import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BlockItem from './BlockItems';
import TxsItems from './TxItems';

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

const ViewAllButton = styled(Link)`
  width: 100%;
  padding: 4.8px 9.6px;
  border: none;
  background-color: #eaf4fb;
  color: #3498db;
  text-decoration: none;
  text-align: center;
`;

const RenderList = ({ REQUESTBLOCKS, REQUESTTXS, Blocks, Txs }) => {
  return (
    <StyledDiv>
      <StyledListInner>
        <StyledTitleBox>Latest Blocks</StyledTitleBox>
        <StyledListBox>
          <StyledSrollBarBox>
            {REQUESTBLOCKS && null}
            {!REQUESTBLOCKS &&
              Blocks &&
              !null &&
              Blocks.map((data, index) => {
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
          <ViewAllButton to={`/blocks`}>View all blocks</ViewAllButton>
        </ViewAllDiv>
      </StyledListInner>
      <StyledListInner>
        <StyledTitleBox>Latest Transactions</StyledTitleBox>
        <StyledListBox>
          <StyledSrollBarBox>
            {REQUESTTXS && null}
            {!REQUESTTXS &&
              Txs &&
              !null &&
              Txs.map((data, index) => {
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
          <ViewAllButton to={`/txs`}>View all transactions</ViewAllButton>
        </ViewAllDiv>
      </StyledListInner>
    </StyledDiv>
  );
};

export default RenderList;
