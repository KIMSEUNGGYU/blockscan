import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BlockItem from './BlockItems';
import TxsItems from './TxItems';
import { darken, lighten } from 'polished';

const StyledDiv = styled.div`
  font-size: 13px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
`;

const StyledListInner = styled.div`
  background-color: ${props => props.theme.background};
  align-items: center;
  box-shadow: 0 0.5rem 1.2rem ${props => props.theme.ethershadow};
`;

const StyledTitleBox = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${props => props.theme.etherinfo};
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
    background-color: ${props => props.theme.background};
    width: 1%;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.scrollthumb};
    border-radius: 16px;
  }
`;

const ViewAllDiv = styled.div`
  padding: 12px;
  border-top: 1px solid ${props => props.theme.etherinfo};
  display: flex;
`;

const ViewAllButton = styled(Link)`
  width: 100%;
  padding: 4.8px 9.6px;
  border: none;
  background-color: ${props => lighten(0.42, props.theme.button)};
  color: ${props => darken(0.1, props.theme.button)};
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
