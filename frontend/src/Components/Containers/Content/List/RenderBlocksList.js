import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import qs from 'qs';
import { BLOCKSALL, VIEWTIME } from '../../../../Action/ActionTypes';
import { GetAll } from '../../../../Action/api/Get';
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

const SubTitle = styled.div`
  font-size: 13px;
  padding-top: 12px;
`;

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

const RenderBlocksList = () => {
  // const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [option, setOption] = useState(25);
  const [page, setPage] = useState(1);
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
  const [loading, setLoading] = useState(true);

  async function GetBlocks() {
    const data = await GetAll(BLOCKSALL, page, option);
    setBlocks(data);
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
  };

  useEffect(() => {
    GetBlocks();
  }, [option]);

  return (
    <ListDiv>
      <TitleInner>
        <Title>Blocks</Title>
        <SubTitle>
          💡 Feature Tip: Track historical data points of any address with the analytics module !
        </SubTitle>
      </TitleInner>
      <ContentBox>
        <ContentInner>
          <ContentTitleNavigationBox>
            <ContentTitle>Block #블록번호 to #블록번호 (Total of 토탈블록수 blocks)</ContentTitle>
            <Navigation>
              <NavigationBox>
                <NavigationButton>
                  <NavigationText
                    // to='/blocks'
                    style={
                      page === 1
                        ? { color: '#8c98a4', cursor: 'default', pointerevents: 'none' }
                        : { color: '#3498db' }
                    }
                    disable={page === 1 ? true : false}>
                    First
                  </NavigationText>
                  <NavigationText
                    // to={`/blocks?p=${query.page - 1}`}
                    style={
                      page === 1
                        ? { color: '#8c98a4', cursor: 'default', pointerevents: 'none' }
                        : { color: '#3498db' }
                    }
                    disable={page === 1 ? true : false}>
                    &lt;
                  </NavigationText>
                  <NavigationText
                    disable={true}
                    style={{ cursor: 'default', pointerevents: 'none' }}>
                    Page {page} of 388767
                  </NavigationText>
                  <NavigationText
                    // to={`/blocks?p=${query.page + 1}`}
                    style={page === 1 ? { color: '#8c98a4' } : { color: '#3498db' }}
                    disable={page === 1 ? true : false}>
                    &gt;
                  </NavigationText>
                  <NavigationText
                    style={page === 1 ? { color: '#8c98a4' } : { color: '#3498db' }}
                    disable={page === 1 ? true : false}>
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
                {!loading &&
                  blocks.map((data, index) => {
                    const Time = GetTime(data.timestamp, VIEWTIME);
                    const Reward = CuttingData(data.blockReward, 5);
                    const avgGasPrice = CuttingData(data.avgGasPrice, 2);
                    return (
                      <Styledtr key={index}>
                        <Styledtd width={'5%'}>
                          <StyledLink to={`/block/${data.number}`}>{data.number}</StyledLink>
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
                        <Styledtd width={'5%'}>
                          <StyledLink to={`/txs?block=${data.number}`}>{data.txCount}</StyledLink>
                        </Styledtd>
                        <Styledtd width={'5%'} padding={0}>
                          {data.uncles}
                        </Styledtd>
                        <Styledtd width={'11%'}>
                          <StyledLink to={`/address/${data.miner}`}>{data.miner}</StyledLink>
                        </Styledtd>
                        <Styledtd width={'8%'}>{data.gasUsed}</Styledtd>
                        <Styledtd width={'6%'}>{data.gasLimit}</Styledtd>
                        <Styledtd width={'9%'}>{avgGasPrice} Gwei</Styledtd>
                        <Styledtd width={'10%'}>{Reward} Ether</Styledtd>
                        {/* <Styledtd>{data.gasUsedPercent}</Styledtd> */}
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
                  {/* <NavigationText>First</NavigationText>
                  <NavigationText onClick={deCrease}>&lt;</NavigationText>
                  <NavigationText>Page 1 of 388767</NavigationText>
                  <NavigationText onClick={inCrease}>&gt;</NavigationText>
                  <NavigationText>Last</NavigationText> */}
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
