import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken, lighten } from 'polished';
import { TXSALL, VIEWTIME } from '../../../../Action/ActionTypes';
import { GetTxAll } from '../../../../Action/api/Get';
import { GetTime } from '../../../../Action/Time';

const ListDiv = styled.div``;

const TitleInner = styled.div`
  padding: 12px 0;
`;

const Title = styled.div`
  font-size: 19.5px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e7eaf3;
`;

// SECTION OPTION
const SectionOptions = styled.div`
  height: 80px;
  line-height: 80px;
  font-size: 19px;
  color: #77838f;
`;

const B = styled.b`
  font-weight: bold;
`;

const A = styled.a`
  color: #3498db;
  /* font-weight: 900; */
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${darken(0.1, '#3498db')};
    font-weight: 600;
  }
`;

// const SubTitle = styled.div`
//   font-size: 13px;
//   padding-top: 12px;
// `;

const ContentBox = styled.div`
  background-color: white;
  padding: 12px;
  box-shadow: 0 0.5rem 1.2rem rgba(189, 197, 209, 0.2);
`;

const ContentInner = styled.div``;

const ContentTitleNavigationBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ContentTitle = styled.p`
  font-size: 13px;
  color: #6c757e;
`;

const Navigation = styled.div`
  width: 22%;
`;

const NavigationBox = styled.ul`
  width: 100%;

  text-align: right;
`;

const NavigationButton = styled.li`
  display: flex;
  justify-content: space-between;
`;

const NavigationText = styled(Link)`
  font-size: 11px;
  padding: 8px 9.6px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #eaf4fb;
  text-decoration: none;
  color: #8c98a4;
`;

const TxListBox = styled.div`
  width: 100%;
`;

const TxListTable = styled.table`
  width: 100%;
`;

const TxAttributeBox = styled.thead`
  font-size: 15px;
  font-weight: 550;
  color: #6c757e;
  border-top: 1px solid #e7eaf3;
  border-bottom: 2px solid #e7eaf3;
  background-color: #f8fafd;
`;

const Styledtr = styled.tr`
  font-size: 13px;
  border-bottom: 1px solid #e7eaf3;
  :hover {
    background-color: #f8fafd;
  }
`;

const Styledth = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #e7eaf3;
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
  color: #3498db;
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
  border-color: #e7eaf3;
`;

const RenderTxsList = ({ pn, p }) => {
  const [option, setOption] = useState(pn);
  const [page, setPage] = useState(p);
  const [txs, setTxs] = useState([
    {
      hash: null,
      blocksnumber: null,
      timestamp: null,
      from: null,
      to: null,
      value: null,
      txfee: null,
    },
  ]);
  const [totalTxs, setTotalTxs] = useState(0);
  const [endPage, setEndPage] = useState(1);
  const [loading, setLoading] = useState(true);

  async function GetTxs() {
    const { txs } = await GetTxAll(TXSALL, page, option);
    // const { txs, totalTxs } = await GetTxAll(TXSALL, page, option);

    // setTotalTxs(totalTxs);
    if (txs != undefined) {
      setTxs(txs);
      setLoading(false);
    }
  }

  const CuttingData = (data, Cutoption) => {
    if (data != null) {
      const preData = data;
      const result = preData.toFixed(Cutoption);
      return result;
    }
    return data;
  };

  const handleChange = e => {
    setOption(e.target.value);
    window.location.href = `/txs?pn=${e.target.value}&p=${p}`;
  };

  useEffect(() => {
    GetTxs();
    // setEndPage(parseInt(totalTxs / pn) + 1);
  }, [txs]);

  useEffect(() => {
    setOption(pn);
    setPage(p);
  }, [pn, p]);

  return (
    <ListDiv>
      <TitleInner>
        <Title>Transactions</Title>
        <SectionOptions>
          💡 <B>Feature Tip</B>: Browse all your{' '}
          <A href='https://etherscan.io/dapp'>favourite Dapps here</A> on Blockscan! 😍
        </SectionOptions>
      </TitleInner>
      <ContentBox>
        <ContentInner>
          <ContentTitleNavigationBox>
            <ContentTitle>More Than > 토탈트랜잭션수 transactions found</ContentTitle>
            <Navigation>
              <NavigationBox>
                <NavigationButton>
                  <NavigationText
                    to={`/txs?pn=${pn}&p=1`}
                    style={
                      parseInt(page) === 1
                        ? { color: '#8c98a4', cursor: 'default', pointerevents: 'none' }
                        : { color: '#3498db' }
                    }
                    disable={page === 1 ? true : false}>
                    First
                  </NavigationText>
                  {page === '1' ? (
                    <NavigationText
                      to={`/txs?pn=${pn}&p=1`}
                      disable={parseInt(page) === 1 ? true : false}>
                      &lt;
                    </NavigationText>
                  ) : (
                    <NavigationText
                      to={`/txs?pn=${pn}&p=${parseInt(p) - 1}`}
                      style={{ color: '#3498db' }}>
                      &lt;
                    </NavigationText>
                  )}
                  <NavigationText
                    disable={true}
                    style={{ cursor: 'default', pointerevents: 'none' }}>
                    Page {page} of {endPage}
                  </NavigationText>
                  {parseInt(page) === parseInt(endPage) ? (
                    <NavigationText
                      to={`/txs?pn=${pn}&p=${endPage}`}
                      disable={parseInt(page) === parseInt(endPage) ? true : false}>
                      &gt;
                    </NavigationText>
                  ) : (
                    <NavigationText
                      to={`/txs?pn=${pn}&p=${parseInt(p) + 1}`}
                      style={{ color: '#3498db' }}>
                      &gt;
                    </NavigationText>
                  )}
                  {/* <NavigationText
                    to={`/txs?pn=${pn}&p=${parseInt(p) + 1}`}
                    style={page === 1 ? { color: '#8c98a4' } : { color: '#3498db' }}
                    disable={page === 1 ? true : false}>
                    &gt;
                  </NavigationText> */}
                  <NavigationText
                    to={`/txs?pn=${pn}&p=${endPage}`}
                    style={
                      parseInt(page) === parseInt(endPage)
                        ? { color: '#8c98a4' }
                        : { color: '#3498db' }
                    }
                    disable={parseInt(page) === parseInt(endPage) ? true : false}>
                    Last
                  </NavigationText>
                </NavigationButton>
              </NavigationBox>
            </Navigation>
          </ContentTitleNavigationBox>
          <TxListBox>
            <TxListTable>
              <TxAttributeBox>
                <Styledtr>
                  <Styledth>Txn Hash</Styledth>
                  <Styledth>Block</Styledth>
                  <Styledth>Age</Styledth>
                  <Styledth>From</Styledth>
                  <Styledth>To</Styledth>
                  <Styledth>Value</Styledth>
                  <Styledth>[Txn Fee]</Styledth>
                </Styledtr>
              </TxAttributeBox>
              <StyledTableBody>
                {loading && null}
                {!txs ? (
                  <div>데이터가 존재하지 않습니다.. </div>
                ) : (
                  !loading &&
                  txs.map((data, index) => {
                    const Time = GetTime(data.timestamp, VIEWTIME);
                    const Txfee = CuttingData(data.txfee, 6);
                    return (
                      <Styledtr key={index}>
                        <Styledtd width={'6%'}>
                          <A>{data.hash}</A>
                        </Styledtd>
                        <Styledtd width={'5%'}>
                          <StyledLink to={`/block/${data.blocksnumber}`}>
                            {data.blocksnumber}
                          </StyledLink>
                        </Styledtd>
                        <Styledtd width={'9%'}>
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
                        <Styledtd width={'11%'}>
                          <A>{data.from}</A>
                        </Styledtd>
                        <Styledtd width={'11%'} padding={0}>
                          <A>{data.to}</A>
                        </Styledtd>
                        <Styledtd width={'9%'}>{data.value} Value</Styledtd>
                        <Styledtd width={'10%'}>{Txfee}</Styledtd>
                      </Styledtr>
                    );
                  })
                )}
              </StyledTableBody>
            </TxListTable>
          </TxListBox>
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
                  <NavigationText
                    to={`/txs?pn=${pn}&p=1`}
                    style={
                      parseInt(page) === 1
                        ? { color: '#8c98a4', cursor: 'default', pointerevents: 'none' }
                        : { color: '#3498db' }
                    }
                    disable={page === 1 ? true : false}>
                    First
                  </NavigationText>
                  {page === '1' ? (
                    <NavigationText
                      to={`/txs?pn=${pn}&p=1`}
                      disable={parseInt(page) === 1 ? true : false}>
                      &lt;
                    </NavigationText>
                  ) : (
                    <NavigationText
                      to={`/txs?pn=${pn}&p=${parseInt(p) - 1}`}
                      style={{ color: '#3498db' }}>
                      &lt;
                    </NavigationText>
                  )}
                  <NavigationText
                    disable={true}
                    style={{ cursor: 'default', pointerevents: 'none' }}>
                    Page {page} of {endPage}
                  </NavigationText>
                  {parseInt(page) === parseInt(endPage) ? (
                    <NavigationText
                      to={`/txs?pn=${pn}&p=${endPage}`}
                      disable={parseInt(page) === parseInt(endPage) ? true : false}>
                      &gt;
                    </NavigationText>
                  ) : (
                    <NavigationText
                      to={`/txs?pn=${pn}&p=${parseInt(p) + 1}`}
                      style={{ color: '#3498db' }}>
                      &gt;
                    </NavigationText>
                  )}
                  {/* <NavigationText
                    to={`/blocks?pn=${pn}&p=${parseInt(p) + 1}`}
                    style={page === 1 ? { color: '#8c98a4' } : { color: '#3498db' }}
                    disable={page === 1 ? true : false}>
                    &gt;
                  </NavigationText> */}
                  <NavigationText
                    to={`/txs?pn=${pn}&p=${endPage}`}
                    style={
                      parseInt(page) === parseInt(endPage)
                        ? { color: '#8c98a4' }
                        : { color: '#3498db' }
                    }
                    disable={parseInt(page) === parseInt(endPage) ? true : false}>
                    Last
                  </NavigationText>
                </NavigationButton>
              </NavigationBox>
            </Navigation>
          </ContentBottomBox>
        </ContentInner>
      </ContentBox>
    </ListDiv>
  );
};

export default RenderTxsList;
