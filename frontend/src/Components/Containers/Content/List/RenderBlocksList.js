import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken, lighten } from 'polished';
import { BLOCKSALL, VIEWTIME } from '../../../../Action/ActionTypes';
import { GetAll } from '../../../../Action/api/Get';
import { GetTime } from '../../../../Action/Time';

const ListDiv = styled.div``;
// SECTION TITLE
const SectionTitle = styled.div`
  height: 80px;
  line-height: 80px;
  background-color: #f8f9fa;
  display: flex;
  border-bottom: 2px solid ${darken(0.1, '#f8f9fa')};
`;

const Title = styled.h1`
  font-size: 30px;
`;

const SubTitle = styled.p`
  margin-left: 15px;
  font-size: 23px;
  color: #77838f;
`;

const TitleInner = styled.div`
  padding: 12px 0;
`;

// const Title = styled.div`
//   font-size: 19.5px;
//   padding-bottom: 12px;
//   border-bottom: 1px solid #e7eaf3;
// `;

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

const BlockListBox = styled.div`
  width: 100%;
`;

const BlockListTable = styled.table`
  width: 100%;
`;

const BlockAttributeBox = styled.thead`
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

const RenderBlocksList = ({ pn, p }) => {
  const [option, setOption] = useState(pn);
  const [page, setPage] = useState(p);
  const [blocks, setBlocks] = useState([
    {
      number: null,
      timestamp: null,
      txCount: null,
      miner: null,
      gasUsed: null,
      gasLimit: null,
      avgGasPrice: null,
      blockReward: null,
      gasUsedPercent: null,
    },
  ]);
  const [totalBlock, setTotalBlock] = useState(0);
  const [endPage, setEndPage] = useState(1);
  const [loading, setLoading] = useState(true);

  async function GetBlocks() {
    const { blocks, totalBlock } = await GetAll(BLOCKSALL, page, option);
    setBlocks(blocks);
    setTotalBlock(totalBlock);
    setLoading(false);
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
    window.location.href = `/blocks?pn=${e.target.value}&p=${p}`;
  };

  useEffect(() => {
    GetBlocks();
    setEndPage(parseInt(totalBlock / pn) + 1);
  }, [blocks]);

  useEffect(() => {
    setOption(pn);
    setPage(p);
  }, [pn, p]);

  return (
    <ListDiv>
      <SectionTitle>
        <Title> Blocks </Title>
      </SectionTitle>
      <SectionOptions>
        💡 <B>Feature Tip</B>: Browse all your{' '}
        <A href='https://etherscan.io/dapp'>favourite Dapps here</A> on Blockscan! 😍
      </SectionOptions>
      {/* <TitleInner>
        <Title>Blocks</Title>
        <SectionOptions>
          💡 <B>Feature Tip</B>: Browse all your{' '}
          <A href='https://etherscan.io/dapp'>favourite Dapps here</A> on Blockscan! 😍
        </SectionOptions>
      </TitleInner> */}
      <ContentBox>
        <ContentInner>
          <ContentTitleNavigationBox>
            <ContentTitle>Block #블록번호 to #블록번호 (Total of 토탈블록수 blocks)</ContentTitle>
            <Navigation>
              <NavigationBox>
                <NavigationButton>
                  <NavigationText
                    to={`/blocks?pn=${pn}&p=1`}
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
                      to={`/blocks?pn=${pn}&p=1`}
                      disable={parseInt(page) === 1 ? true : false}>
                      &lt;
                    </NavigationText>
                  ) : (
                    <NavigationText
                      to={`/blocks?pn=${pn}&p=${parseInt(p) - 1}`}
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
                      to={`/blocks?pn=${pn}&p=${endPage}`}
                      disable={parseInt(page) === parseInt(endPage) ? true : false}>
                      &gt;
                    </NavigationText>
                  ) : (
                    <NavigationText
                      to={`/blocks?pn=${pn}&p=${parseInt(p) + 1}`}
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
                    to={`/blocks?pn=${pn}&p=${endPage}`}
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
          <BlockListBox>
            <BlockListTable>
              <BlockAttributeBox>
                <Styledtr>
                  <Styledth>Block</Styledth>
                  <Styledth>Age</Styledth>
                  <Styledth>Txn</Styledth>
                  <Styledth>Uncles</Styledth>
                  <Styledth>Miner</Styledth>
                  <Styledth>Gas Used</Styledth>
                  <Styledth>Gas Limit</Styledth>
                  <Styledth>Avg.Gas Price</Styledth>
                  <Styledth>Reward</Styledth>
                </Styledtr>
              </BlockAttributeBox>
              <StyledTableBody>
                {loading && null}
                {!blocks ? (
                  <div>데이터가 존재하지 않습니다.. </div>
                ) : (
                  !loading &&
                  blocks.map((data, index) => {
                    const Time = GetTime(data.timestamp, VIEWTIME);
                    const Reward = CuttingData(data.blockReward, 5);
                    const avgGasPrice = CuttingData(data.avgGasPrice, 2);
                    return (
                      <Styledtr key={index}>
                        <Styledtd width={'5%'}>
                          <StyledLink to={`/block/${data.number}`}>{data.number}</StyledLink>
                        </Styledtd>
                        <Styledtd width={'12%'}>
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
                        <Styledtd width={'5%'}>
                          <A>{data.txCount}</A>
                        </Styledtd>
                        <Styledtd width={'5%'} padding={0}>
                          {data.uncles}
                        </Styledtd>
                        <Styledtd width={'11%'}>
                          <A>{data.miner}</A>
                        </Styledtd>
                        <Styledtd width={'8%'}>{data.gasUsed}</Styledtd>
                        <Styledtd width={'6%'}>{data.gasLimit}</Styledtd>
                        <Styledtd width={'9%'}>{avgGasPrice} Gwei</Styledtd>
                        <Styledtd width={'10%'}>{Reward} Ether</Styledtd>
                        {/* <Styledtd>{data.gasUsedPercent}</Styledtd> */}
                      </Styledtr>
                    );
                  })
                )}
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
                  <NavigationText
                    to={`/blocks?pn=${pn}&p=1`}
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
                      to={`/blocks?pn=${pn}&p=1`}
                      disable={parseInt(page) === 1 ? true : false}>
                      &lt;
                    </NavigationText>
                  ) : (
                    <NavigationText
                      to={`/blocks?pn=${pn}&p=${parseInt(p) - 1}`}
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
                      to={`/blocks?pn=${pn}&p=${endPage}`}
                      disable={parseInt(page) === parseInt(endPage) ? true : false}>
                      &gt;
                    </NavigationText>
                  ) : (
                    <NavigationText
                      to={`/blocks?pn=${pn}&p=${parseInt(p) + 1}`}
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
                    to={`/blocks?pn=${pn}&p=${endPage}`}
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

export default RenderBlocksList;
