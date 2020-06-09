import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { Link, useHistory } from 'react-router-dom';
import PixedTableWidth from '../../../../helper/PixedTableWidth';
import { InnerWidth } from '../../../../helper/CustomHook';
import { BLOCKSALL, TXSALL, VIEWTIME } from '../../../../Action/ActionTypes';
import { GetAll } from '../../../../Action/api/Get';
import { GetTime } from '../../../../Action/Time';
import { CuttingData, DetailTimeToText } from '../../../../helper/translate';
import { darken, lighten } from 'polished';

const ListDiv = styled.div`
  @media only screen and (max-width: 1023px) {
    margin-bottom: 30px;
  }
`;

const TitleInner = styled.div`
  padding: 12px 0;
`;

const Title = styled.div`
  font-size: 19.5px;
  padding-bottom: 12px;

  @media only screen and (max-width: 479.98px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.etherinfo};
  }
`;

const SubTitle = styled.div`
  font-size: 13px;
  padding-top: 12px;
`;

const ContentBox = styled.div`
  background-color: ${props => props.theme.background};
  padding: 12px;
  box-shadow: 0 0.5rem 1.2rem ${props => props.theme.ethershadow};
`;

const ContentInner = styled.div``;

const ContentTitleNavigationBox = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

const ContentTitle = styled.p`
  font-size: 13px;
  color: ${props => props.theme.draksubtitle};
`;

const Navigation = styled.div`
  display: flex;

  @media only screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

const NavigationBox = styled.div`
  display: flex;
`;

const NavigationButton = styled.div`
  width: fit-content;
  margin: 0px 2px;
  font-size: 11px;
  color: ${props => props.theme.draksubtitle};
`;

const NavigationNoneText = styled.div`
  padding: 8px 9.6px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${props => lighten(0.42, props.theme.button)};
  cursor: default;
`;

const NavigationText = styled(Link)`
  display: flex;
  padding: 8px 9.6px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${props => lighten(0.42, props.theme.button)};
  color: ${props => darken(0.1, props.theme.button)};
  text-decoration: none;
  :hover {
    color: ${props => props.theme.background};
    background-color: ${props => darken(0.1, props.theme.button)};
  }
`;

const BlockListBox = styled.div`
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: ${props => props.theme.background};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.scrollthumb};
    border-radius: 8px;
  }
`;

const BlockListTable = styled.table`
  width: 100%;

  @media only screen and (max-width: 767px) {
    display: table;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const BlockAttributeBox = styled.thead`
  width: 100%;
  display: flex;
  align-items: center;
  height: 38px;
  font-size: 15px;
  font-weight: 550;
  color: ${props => props.theme.draksubtitle};
  border-top: 1px solid ${props => props.theme.etherinfo};
  border-bottom: 2px solid ${props => props.theme.etherinfo};
  background-color: ${props => props.theme.attribute};
`;

const Styledtr = styled.tr`
  display: flex;
  width: 100%;

  font-size: 13px;
  :hover {
    background-color: ${props => props.theme.attribute};
  }
`;

const Styledth = styled.th`
  text-align: left;
  padding: 0 10px;
`;

const StyledTableBody = styled.tbody`
  @media only screen and (min-width: 1400px) {
    width: 100%;
  }
`;

const Styledtd = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 13px 10px 20px 10px;
  font-size: ${props => (props.resize ? '11px' : '13px')};
  text-align: left;

  @media only screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${props => (props.resize ? '12px' : '13px')};
  }
  @media only screen and (min-width: 1200px) {
    font-size: ${props => (props.resize ? '11px' : '13px')};
  }
  @media only screen and (min-width: 1400px) {
    font-size: 13px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.button};
`;

const ContentBottomBox = styled.div`
  display: flex;
  margin-top: 12px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

const ShowCountBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #77838f;
`;

const StyeldSelect = styled.select`
  border-radius: 4px;
  padding: 6px 2px;
  margin: 0 7px;
  border-color: ${props => props.theme.draksubtitle};
`;

const RenderList = ({ location, path }) => {
  let p, pn;
  const history = useHistory();
  const TableWidth = PixedTableWidth(path);
  const Innerwidth = InnerWidth();

  if (location.search !== '') {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    pn = query.pn;
    p = parseInt(query.p);
  } else if (location.search === '') {
    pn = 50;
    p = 1;
  }

  const [loading, setLoading] = useState(true);
  const [option, setOption] = useState(pn);
  const [page, setPage] = useState(p);
  const [endPage, setEndPage] = useState(null);
  const [total, setTotal] = useState(null);
  const [datas, setDatas] = useState();

  if (history.action === 'POP') {
    if (location.search !== '') {
      const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      const refresh = parseInt(query.p);

      if (page !== refresh) {
        window.location.reload();
      }
    }
  }

  const GetDatas = useCallback(async () => {
    let Data, Total;
    if (path === 'blocks') {
      const { blocks, totalBlock } = await GetAll(BLOCKSALL, page, option);
      Data = blocks;
      Total = totalBlock;
    } else if (path === 'txs') {
      const { txs, totalTx } = await GetAll(TXSALL, page, option);
      Data = txs;
      Total = totalTx;
    }
    if (Data !== undefined && Total !== undefined) {
      setDatas(Data);
      setTotal(Total);
      setEndPage(parseInt(total / option));
      setLoading(false);
    }
  }, [option, total, page, path]);

  const handleChange = e => {
    setOption(e.target.value);
  };

  useEffect(() => {
    GetDatas();
    return () => {};
  }, [GetDatas]);

  return (
    <>
      {loading && '로딩 중'}
      {!loading && datas && total && page && (
        <ListDiv>
          <TitleInner>
            <Title>{path === 'blocks' ? 'Blocks' : 'Transactions'}</Title>
            {Innerwidth >= 768 && (
              <SubTitle>
                <span role='img' aria-label='light'>
                  💡 Feature Tip: Track historical data points of any address with the analytics
                  module !
                </span>
              </SubTitle>
            )}
          </TitleInner>
          <ContentBox>
            <ContentInner>
              <ContentTitleNavigationBox>
                <ContentTitle>
                  {path === 'blocks'
                    ? `Block #${datas[0].number} to #${
                        datas[datas.length - 1].number
                      } (Total of ${total} blocks)`
                    : `More than > ${total} transactions found`}
                </ContentTitle>
                <Navigation>
                  <NavigationBox>
                    <NavigationButton>
                      {page === 1 ? (
                        <NavigationNoneText>First</NavigationNoneText>
                      ) : (
                        <NavigationText
                          onClick={() => {
                            setPage(1);
                          }}
                          to={
                            path === 'blocks' ? `/blocks?pn=${pn}&p=${1}` : `/txs?pn=${pn}&p=${1}`
                          }>
                          First
                        </NavigationText>
                      )}
                    </NavigationButton>
                    <NavigationButton>
                      {page === 1 ? (
                        <NavigationNoneText>&lt;</NavigationNoneText>
                      ) : (
                        <NavigationText
                          onClick={() => {
                            setPage(p - 1);
                          }}
                          to={
                            path === 'blocks'
                              ? `/blocks?pn=${pn}&p=${p - 1}`
                              : `/txs?pn=${pn}&p=${p - 1}`
                          }>
                          &lt;
                        </NavigationText>
                      )}
                    </NavigationButton>
                    <NavigationButton>
                      <NavigationNoneText>
                        Page {page} of {endPage}
                      </NavigationNoneText>
                    </NavigationButton>
                    <NavigationButton>
                      {page === endPage ? (
                        <NavigationNoneText>&gt;</NavigationNoneText>
                      ) : (
                        <NavigationText
                          onClick={() => {
                            setPage(p + 1);
                          }}
                          to={
                            path === 'blocks'
                              ? `/blocks?pn=${pn}&p=${p + 1}`
                              : `/txs?pn=${pn}&p=${p + 1}`
                          }>
                          &gt;
                        </NavigationText>
                      )}
                    </NavigationButton>
                    <NavigationButton>
                      {page === endPage ? (
                        <NavigationNoneText>Last</NavigationNoneText>
                      ) : (
                        <NavigationText
                          onClick={() => {
                            setPage(endPage);
                          }}
                          to={
                            path === 'blocks'
                              ? `/blocks?pn=${pn}&p=${endPage}`
                              : `/txs?pn=${pn}&p=${endPage}`
                          }>
                          Last
                        </NavigationText>
                      )}
                    </NavigationButton>
                  </NavigationBox>
                </Navigation>
              </ContentTitleNavigationBox>
              <BlockListBox>
                <BlockListTable>
                  <BlockAttributeBox>
                    <Styledtr>
                      <Styledth width={TableWidth[0]}>
                        {path === 'blocks' ? 'Block' : 'Txn Hash'}
                      </Styledth>
                      <Styledth width={TableWidth[1]}>
                        {path === 'blocks' ? 'Age' : 'Block'}
                      </Styledth>
                      <Styledth width={TableWidth[2]}>{path === 'blocks' ? 'Txn' : 'Age'}</Styledth>
                      <Styledth width={TableWidth[3]}>
                        {path === 'blocks' ? 'Uncles' : 'From'}
                      </Styledth>
                      <Styledth width={TableWidth[4]}>
                        {path === 'blocks' ? 'Miner' : 'To'}
                      </Styledth>
                      {Innerwidth < 768 && (
                        <>
                          <Styledth width={TableWidth[5]}>
                            {path === 'blocks' ? 'Gas Used' : 'Value'}
                          </Styledth>
                          <Styledth width={TableWidth[6]}>
                            {path === 'blocks' ? 'Gas Limit' : '[Txn Fee]'}
                          </Styledth>
                          {path === 'blocks' && (
                            <>
                              <Styledth width={TableWidth[7]}>
                                {Innerwidth >= 1400 ? 'Avg.Gas Price' : 'Avg.Gas'}
                              </Styledth>
                              <Styledth width={TableWidth[8]}>Reward</Styledth>
                            </>
                          )}
                        </>
                      )}
                      {Innerwidth >= 768 && Innerwidth < 1024 && (
                        <>
                          {path === 'blocks' && (
                            <>
                              <Styledth width={TableWidth[7]}>
                                {Innerwidth >= 1400 ? 'Avg.Gas Price' : 'Avg.Gas'}
                              </Styledth>
                              <Styledth width={TableWidth[8]}>Reward</Styledth>
                            </>
                          )}
                        </>
                      )}
                      {Innerwidth < 1200 &&
                        Innerwidth >= 1024 &&
                        (path === 'blocks' ? (
                          <>
                            <Styledth width={TableWidth[5]}>Gas Used</Styledth>
                            <Styledth width={TableWidth[7]}>Avg.Gas</Styledth>
                            <Styledth width={TableWidth[8]}>Reward</Styledth>
                          </>
                        ) : (
                          <Styledth width={TableWidth[5]}>Value</Styledth>
                        ))}
                      {Innerwidth >= 1200 && (
                        <>
                          <Styledth width={TableWidth[5]}>
                            {path === 'blocks' ? 'Gas Used' : 'Value'}
                          </Styledth>
                          <Styledth width={TableWidth[6]}>
                            {path === 'blocks' ? 'Gas Limit' : '[Txn Fee]'}
                          </Styledth>
                          {path === 'blocks' && (
                            <>
                              <Styledth width={TableWidth[7]}>
                                {Innerwidth >= 1400 ? 'Avg.Gas Price' : 'Avg.Gas'}
                              </Styledth>
                              <Styledth width={TableWidth[8]}>Reward</Styledth>
                            </>
                          )}
                        </>
                      )}
                    </Styledtr>
                  </BlockAttributeBox>
                  <StyledTableBody>
                    {loading && null}
                    {!loading &&
                      path === 'blocks' &&
                      datas.map((data, index) => {
                        const Time = GetTime(data.timestamp, VIEWTIME);
                        const Reward = CuttingData(data.blockReward, 5);
                        const avgGasPrice = CuttingData(data.avgGasPrice, 2);
                        return (
                          <Styledtr key={index}>
                            <Styledtd width={TableWidth[0]}>
                              <StyledLink to={`/block/${data.number}`}>{data.number}</StyledLink>
                            </Styledtd>
                            <Styledtd resize width={TableWidth[1]}>
                              {DetailTimeToText(Time, 'short')}
                            </Styledtd>
                            <Styledtd width={TableWidth[2]}>
                              <StyledLink to={'#'}>{data.txCount}</StyledLink>
                            </Styledtd>
                            <Styledtd width={TableWidth[3]} padding={0}>
                              {data.uncles}
                            </Styledtd>
                            <Styledtd width={TableWidth[4]}>
                              <StyledLink to={`/address/${data.miner}`}>{data.miner}</StyledLink>
                            </Styledtd>
                            {Innerwidth < 768 && (
                              <>
                                <Styledtd width={TableWidth[5]}>{data.gasUsed}</Styledtd>
                                <Styledtd width={TableWidth[6]}>{data.gasLimit}</Styledtd>
                              </>
                            )}
                            {Innerwidth >= 1024 && Innerwidth < 1200 && (
                              <Styledtd width={TableWidth[5]}>{data.gasUsed}</Styledtd>
                            )}
                            {Innerwidth >= 1200 && (
                              <>
                                <Styledtd width={TableWidth[5]}>{data.gasUsed}</Styledtd>
                                <Styledtd width={TableWidth[6]}>{data.gasLimit}</Styledtd>
                              </>
                            )}
                            <Styledtd resize width={TableWidth[7]}>
                              {avgGasPrice} Gwei
                            </Styledtd>
                            <Styledtd resize width={TableWidth[8]}>
                              {Reward} Ether
                            </Styledtd>
                          </Styledtr>
                        );
                      })}
                    {!loading &&
                      path === 'txs' &&
                      datas.map((data, index) => {
                        const Time = GetTime(data.timestamp, VIEWTIME);
                        const Value = CuttingData(data.value, 5);
                        const Txfee = CuttingData(data.txfee, 6);
                        return (
                          <Styledtr key={index}>
                            <Styledtd width={TableWidth[0]}>
                              <StyledLink to={`/tx/${data.hash}`}>{data.hash}</StyledLink>
                            </Styledtd>
                            <Styledtd width={TableWidth[1]}>
                              <StyledLink to={`/block/${data.blocksnumber}`}>
                                {data.blocksnumber}
                              </StyledLink>
                            </Styledtd>
                            <Styledtd
                              resize
                              width={TableWidth[2]}
                              style={
                                Innerwidth > 1024 && Innerwidth < 1200 ? { maxWidth: '15%' } : null
                              }>
                              {DetailTimeToText(Time, 'short')}
                            </Styledtd>
                            <Styledtd width={TableWidth[3]}>
                              <StyledLink to={'#'}>{data.from}</StyledLink>
                            </Styledtd>
                            <Styledtd width={TableWidth[4]} padding={0}>
                              <StyledLink to={'#'}>{data.to}</StyledLink>
                            </Styledtd>
                            {Innerwidth < 768 && (
                              <>
                                <Styledtd resize width={TableWidth[5]}>
                                  {Value} Value
                                </Styledtd>
                                <Styledtd resize width={TableWidth[6]}>
                                  {Txfee}
                                </Styledtd>
                              </>
                            )}
                            {Innerwidth < 1200 && Innerwidth >= 1024 && (
                              <Styledtd resize width={TableWidth[6]}>
                                {Txfee}
                              </Styledtd>
                            )}
                            {Innerwidth >= 1200 && (
                              <>
                                <Styledtd resize width={TableWidth[5]}>
                                  {Value} Value
                                </Styledtd>
                                <Styledtd resize width={TableWidth[6]}>
                                  {Txfee}
                                </Styledtd>
                              </>
                            )}
                          </Styledtr>
                        );
                      })}
                  </StyledTableBody>
                </BlockListTable>
              </BlockListBox>
              <ContentBottomBox>
                <ShowCountBox>
                  Show
                  <form>
                    <StyeldSelect value={option} onChange={handleChange}>
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </StyeldSelect>
                  </form>
                  Records
                </ShowCountBox>
                <Navigation>
                  <NavigationBox>
                    <NavigationButton>
                      {page === 1 ? (
                        <NavigationNoneText>First</NavigationNoneText>
                      ) : (
                        <NavigationText
                          onClick={() => {
                            setPage(1);
                          }}
                          to={
                            path === 'blocks' ? `/blocks?pn=${pn}&p=${1}` : `/txs?pn=${pn}&p=${1}`
                          }>
                          First
                        </NavigationText>
                      )}
                    </NavigationButton>
                    <NavigationButton>
                      {page === 1 ? (
                        <NavigationNoneText>&lt;</NavigationNoneText>
                      ) : (
                        <NavigationText
                          onClick={() => {
                            setPage(p - 1);
                          }}
                          to={
                            path === 'blocks'
                              ? `/blocks?pn=${pn}&p=${p - 1}`
                              : `/txs?pn=${pn}&p=${p - 1}`
                          }>
                          &lt;
                        </NavigationText>
                      )}
                    </NavigationButton>
                    <NavigationButton>
                      <NavigationNoneText>
                        Page {page} of {endPage}
                      </NavigationNoneText>
                    </NavigationButton>
                    <NavigationButton>
                      {page === endPage ? (
                        <NavigationNoneText>&gt;</NavigationNoneText>
                      ) : (
                        <NavigationText
                          onClick={() => {
                            setPage(p + 1);
                          }}
                          to={
                            path === 'blocks'
                              ? `/blocks?pn=${pn}&p=${p + 1}`
                              : `/txs?pn=${pn}&p=${p + 1}`
                          }>
                          &gt;
                        </NavigationText>
                      )}
                    </NavigationButton>
                    <NavigationButton>
                      {page === endPage ? (
                        <NavigationNoneText>Last</NavigationNoneText>
                      ) : (
                        <NavigationText
                          onClick={() => {
                            setPage(endPage);
                          }}
                          to={
                            path === 'blocks'
                              ? `/blocks?pn=${pn}&p=${endPage}`
                              : `/txs?pn=${pn}&p=${endPage}`
                          }>
                          Last
                        </NavigationText>
                      )}
                    </NavigationButton>
                  </NavigationBox>
                </Navigation>
              </ContentBottomBox>
            </ContentInner>
          </ContentBox>
        </ListDiv>
      )}
    </>
  );
};

export default RenderList;
