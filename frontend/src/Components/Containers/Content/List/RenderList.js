import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { Link, useHistory } from 'react-router-dom';
import { BLOCKSALL, TXSALL, VIEWTIME } from '../../../../Action/ActionTypes';
import { GetAll } from '../../../../Action/api/Get';
import { GetTime } from '../../../../Action/Time';
import { CuttingData } from '../../../../helper/translate';
import { darken, lighten } from 'polished';

const ListDiv = styled.div``;

const TitleInner = styled.div`
  padding: 12px 0;
`;

const Title = styled.div`
  font-size: 19.5px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${props => props.theme.etherinfo};
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
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ContentTitle = styled.p`
  font-size: 13px;
  color: ${props => props.theme.draksubtitle};
`;

const Navigation = styled.div`
  width: 25%;
`;

const NavigationBox = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-between;
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
`;

const BlockListTable = styled.table`
  width: 100%;
`;

const BlockAttributeBox = styled.thead`
  font-size: 15px;
  font-weight: 550;
  color: ${props => props.theme.draksubtitle};
  border-top: 1px solid ${props => props.theme.etherinfo};
  border-bottom: 2px solid ${props => props.theme.etherinfo};
  background-color: ${props => props.theme.attribute};
`;

const Styledtr = styled.tr`
  font-size: 13px;
  border-bottom: 1px solid ${props => props.theme.etherinfo};
  :hover {
    background-color: ${props => props.theme.attribute};
  }
`;

const Styledth = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.etherinfo};
`;

const StyledTableBody = styled.tbody``;

const Styledtd = styled.td`
  table-layout: fixed;
  max-width: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 13px 13px 20px 13px;
  font-size: 13px;
  text-align: left;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.button};
`;

const ContentBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
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
  }, [GetDatas]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      {loading && '로딩 중'}
      {!loading && datas && total && page && (
        <ListDiv>
          <TitleInner>
            <Title>{path === 'blocks' ? 'Blocks' : 'Transactions'}</Title>
            <SubTitle>
              <span role='img' aria-label='light'>
                💡 Feature Tip: Track historical data points of any address with the analytics
                module !
              </span>
            </SubTitle>
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
                      <Styledth width={path === 'blocks' ? '8%' : '16%'}>
                        {path === 'blocks' ? 'Block' : 'Txn Hash'}
                      </Styledth>
                      <Styledth width={path === 'blocks' ? '15%' : '7%'}>
                        {path === 'blocks' ? 'Age' : 'Block'}
                      </Styledth>
                      <Styledth width={path === 'blocks' ? '7%' : '15%'}>
                        {path === 'blocks' ? 'Txn' : 'Age'}
                      </Styledth>
                      <Styledth width={path === 'blocks' ? '7%' : '20%'}>
                        {path === 'blocks' ? 'Uncles' : 'From'}
                      </Styledth>
                      <Styledth width={path === 'blocks' ? '20%' : '20%'}>
                        {path === 'blocks' ? 'Miner' : 'To'}
                      </Styledth>
                      <Styledth width={path === 'blocks' ? '13%' : '15%'}>
                        {path === 'blocks' ? 'Gas Used' : 'Value'}
                      </Styledth>
                      <Styledth width={path === 'blocks' ? '10%' : '7%'}>
                        {path === 'blocks' ? 'Gas Limit' : '[Txn Fee]'}
                      </Styledth>
                      <Styledth width={path === 'blocks' ? '10%' : null}>
                        {path === 'blocks' ? 'Avg.Gas Price' : null}
                      </Styledth>
                      <Styledth width={path === 'blocks' ? '10%' : null}>
                        {path === 'blocks' ? 'Reward' : null}
                      </Styledth>
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
                            <Styledtd>
                              <StyledLink to={`/block/${data.number}`}>{data.number}</StyledLink>
                            </Styledtd>
                            <Styledtd>
                              {Time.Days
                                ? Time.Days + ' days ago ' + Time.Hours + ' hrs ago'
                                : Time.Hours
                                ? Time.Hours + ' hrs ago ' + Time.Minutes + ' mins ago'
                                : Time.Minutes > 1
                                ? Time.Minutes + ' mins ago'
                                : Time.Minutes === 1
                                ? Time.Minutes + ' min ago'
                                : Time.Seconds
                                ? Time.Seconds + ' secs ago'
                                : 0 + ' secs ago'}
                            </Styledtd>
                            <Styledtd>
                              <StyledLink to={'#'}>{data.txCount}</StyledLink>
                            </Styledtd>
                            <Styledtd padding={0}>{data.uncles}</Styledtd>
                            <Styledtd>
                              <StyledLink to={`/address/${data.miner}`}>{data.miner}</StyledLink>
                            </Styledtd>
                            <Styledtd>{data.gasUsed}</Styledtd>
                            <Styledtd>{data.gasLimit}</Styledtd>
                            <Styledtd>{avgGasPrice} Gwei</Styledtd>
                            <Styledtd>{Reward} Ether</Styledtd>
                            {/* <Styledtd>{data.gasUsedPercent}</Styledtd> */}
                          </Styledtr>
                        );
                      })}
                    {!loading &&
                      path === 'txs' &&
                      datas.map((data, index) => {
                        const Time = GetTime(data.timestamp, VIEWTIME);
                        const Txfee = CuttingData(data.txfee, 6);
                        return (
                          <Styledtr key={index}>
                            <Styledtd>
                              <StyledLink to={`/tx/${data.hash}`}>{data.hash}</StyledLink>
                            </Styledtd>
                            <Styledtd>
                              <StyledLink to={`/block/${data.blocksnumber}`}>
                                {data.blocksnumber}
                              </StyledLink>
                            </Styledtd>
                            <Styledtd>
                              {Time.Days
                                ? Time.Days + ' days ago ' + Time.Hours + ' hrs ago'
                                : Time.Hours
                                ? Time.Hours + ' hrs ago ' + Time.Minutes + ' mins ago'
                                : Time.Minutes > 1
                                ? Time.Minutes + ' mins ago'
                                : Time.Minutes === 1
                                ? Time.Minutes + ' min ago'
                                : Time.Seconds
                                ? Time.Seconds + ' secs ago'
                                : 0 + ' secs ago'}
                            </Styledtd>
                            <Styledtd>
                              <StyledLink to={'#'}>{data.from}</StyledLink>
                            </Styledtd>
                            <Styledtd padding={0}>
                              <StyledLink to={'#'}>{data.to}</StyledLink>
                            </Styledtd>
                            <Styledtd>{data.value} Value</Styledtd>
                            <Styledtd>{Txfee}</Styledtd>
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
