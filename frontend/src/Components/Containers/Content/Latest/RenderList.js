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

  @media only screen and (max-width: 479.98px) {
    /*  */
    flex-direction: column;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    width: 710px;
    flex-direction: column;
  }
  @media only screen and (min-width: 1024px) {
    /*  */
    width: 820px;
    height: 450px;
    flex-direction: row;
  }
  @media only screen and (min-width: 1200px) {
    /*  */
    width: 950px;
  }
  @media only screen and (min-width: 1400px) {
    width: 1200px;
  }
`;

const StyledListBox = styled.div`
  align-items: center;
  background-color: ${props => props.theme.background};
  border: 1px solid ${prop => prop.theme.ethershadow};
  box-shadow: 0 1px 1.2rem ${props => props.theme.ethershadow};

  @media only screen and (max-width: 479.98px) {
    /*  */
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    width: 710px;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 1024px) {
    /* 중간폭 20px */
    width: 398px;
    margin-bottom: 0%;
  }
  @media only screen and (min-width: 1200px) {
    /*  */
    width: 449px;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    width: 575px;
  }
  /* 중간 빈공간 고려 */

  /* background-color: green; */
`;

const StyledTitleBox = styled.div`
  padding: 5px 0 0 12px;
  height: 29px;
  border-bottom: 1px solid ${props => props.theme.etherinfo};

  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
  }
  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 1024px) {
    /*  */
    width: 388px;
  }
  @media only screen and (min-width: 1200px) {
    width: 438px;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    width: 563px;
  }
`;

const TitleInner = styled.div`
  height: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  /* background-color: darkgrey; */

  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
  }
  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 1024px) {
    width: 388px;
  }
  @media only screen and (min-width: 1200px) {
    width: 438px;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    width: 563px;
  }
`;

const StyledListItemInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  margin: 10px 0 0 12px;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${props => props.theme.background};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.scrollthumb};
    border-radius: 16px;
  }

  @media only screen and (max-width: 479.98px) {
    /*  */
    max-height: 364px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    max-height: 364px;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    max-height: 364px;
  }
  @media only screen and (min-width: 1024px) {
    /*  */
    width: 388px;
    /* max-height: 364px; */
  }
  @media only screen and (min-width: 1200px) {
    width: 438px;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    width: 563px;
  }

  /* background-color: lightgray; */
`;

const ViewAllDiv = styled.div`
  height: 44px;
  border-top: 1px solid ${props => props.theme.etherinfo};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
  /* background-color: green; */
`;

const ViewAllButton = styled(Link)`
  width: 95%;
  height: 25px;
  border: none;
  background-color: ${props => lighten(0.42, props.theme.button)};
  color: ${props => darken(0.1, props.theme.button)};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RenderList = ({ REQUESTBLOCKS, REQUESTTXS, Blocks, Txs }) => {
  return (
    <StyledDiv>
      <StyledListBox>
        <StyledTitleBox>
          <TitleInner>Latest Blocks</TitleInner>
        </StyledTitleBox>
        <StyledListItemInner>
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
        </StyledListItemInner>
        <ViewAllDiv>
          <ViewAllButton to={`/blocks`}>View all blocks</ViewAllButton>
        </ViewAllDiv>
      </StyledListBox>
      <StyledListBox>
        <StyledTitleBox>
          <TitleInner>Latest Transactions</TitleInner>
        </StyledTitleBox>
        <StyledListItemInner>
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
        </StyledListItemInner>
        <ViewAllDiv>
          <ViewAllButton to={`/txs`}>View all transactions</ViewAllButton>
        </ViewAllDiv>
      </StyledListBox>
    </StyledDiv>
  );
};

export default RenderList;
