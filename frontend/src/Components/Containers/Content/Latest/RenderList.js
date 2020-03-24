import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BlockItem from './BlockItems';
import TxsItems from './TxItems';
import { LATESTBLOCKS, LATESTTXS } from '../../../../Action/ActionTypes';
import { GetApi } from '../../../../Action/api/Get';

const StyledDiv = styled.div`
  font-size: 0.8125rem;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
`;

const StyledListInner = styled.div`
  background-color: white;
  align-items: center;
  box-shadow: 0 0.5rem 1.2rem rgba(189, 197, 209, 0.2);
`;

const StyledTitleBox = styled.div`
  padding: 12px;
  border-bottom: 1px solid #e7eaf3;
`;

const StyledListBox = styled.div`
  padding: 12px 12px 0px 12px;
  display: flex;
`;

const StyledSrollBarBox = styled.div`
  height: 324px;
  padding-right: 10px;
  overflow: auto;
  float: right;
  /* 스크롤바 */
  &::-webkit-scrollbar {
    background-color: white;
    width: 1%;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
  }
`;

const ViewAllDiv = styled.div`
  padding: 12px;
  border-top: 1px solid #e7eaf3;
  display: flex;
`;

const ViewAllButton = styled.button`
  width: 100%;
  padding: 4.8px 9.6px;
  border: none;
  background-color: #eaf4fb;
  color: #3498db;
`;

const LinkTag = styled(Link)`
  font-size: 11px;
  padding: 8px 9.6px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #eaf4fb;
  text-decoration: none;
  color: #8c98a4;
`;

const RenderList = () => {
  const [loading, setLoading] = useState(true);
  const [block, setBlock] = useState([
    {
      number: null,
      timestamp: null,
      miner: null,
      txCount: null,
      blockReward: null,
    },
  ]);
  const [txs, setTxs] = useState([
    {
      hash: null,
      timestamp: null,
      from: null,
      to: null,
      txFee: null,
    },
  ]);

  async function GetBlock(action) {
    const response = await GetApi(action);
    setBlock(response);
    return true;
  }

  async function GetTxs(action) {
    const response = await GetApi(action);
    setTxs(response);
    return true;
  }

  const requestData = async () => {
    const result1 = await GetBlock(LATESTBLOCKS);
    const result2 = await GetTxs(LATESTTXS);
    if (result1 && result2) {
      setLoading(false);
    }
  };
  useEffect(() => {
    requestData();
  }, [loading]);

  setInterval(() => {
    requestData();
  }, 15 * 1000);

  return (
    <StyledDiv>
      <StyledListInner>
        <StyledTitleBox>Latest Blocks</StyledTitleBox>
        <StyledListBox>
          <StyledSrollBarBox>
            {loading && null}
            {!loading &&
              block.map((data, index) => {
                return (
                  <BlockItem
                    key={index}
                    index={index}
                    number={data.number}
                    timestamp={data.timestamp}
                    miner={data.miner}
                    txCount={data.txCount}
                    blockReward={data.blockReward}
                  />
                );
              })}
          </StyledSrollBarBox>
        </StyledListBox>
        <ViewAllDiv>
          <ViewAllButton>
            <LinkTag to={'blocks?pn=25&p=1'}>View all blocks</LinkTag>
          </ViewAllButton>
        </ViewAllDiv>
      </StyledListInner>
      <StyledListInner>
        <StyledTitleBox>Latest Transactions</StyledTitleBox>
        <StyledListBox>
          <StyledSrollBarBox>
            {loading && null}
            {!loading &&
              txs.map((data, index) => {
                return (
                  <TxsItems
                    key={index}
                    index={index}
                    hash={data.hash}
                    timestamp={data.timestamp}
                    from={data.from}
                    to={data.to}
                    txFee={data.txFee}
                  />
                );
              })}
          </StyledSrollBarBox>
        </StyledListBox>
        <ViewAllDiv>
          <ViewAllButton>
            <LinkTag to={'txs?pn=25&p=1'}>View all transactions</LinkTag>
          </ViewAllButton>
        </ViewAllDiv>
      </StyledListInner>
    </StyledDiv>
  );
};

export default RenderList;
