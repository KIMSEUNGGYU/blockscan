import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TimeStamBox from './TimeItems';

const BlockItem = styled.div`
  width: 100%;
  display: flex;
`;

const BlockInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.etherinfo};
`;

const BlockBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const BlockIconDiv = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlockIconBox = styled.div`
  width: 100%;
  cursor: default;
  background: ${props => props.theme.ethershadow};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 5px;

  @media only screen and (max-width: 479.98px) {
    /*  */
    height: 80%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    height: 80%;
    /* display: none; */
  }
  @media only screen and (min-width: 768px) {
    /*  */
    height: 100%;
  }
  @media only screen and (min-width: 1024px) {
    /*  */
    height: 80%;
    font-size: 11px;
  }
  @media only screen and (min-width: 1200px) {
    /* max-width: 132px; */
    height: 100%;
    font-size: 13px;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
  }
`;

const NumberElapseDiv = styled.div`
  display: block;
  /* width: 18%; */

  /* background-color: grey; */

  /* maxwidth */
  @media only screen and (max-width: 479.98px) {
    /*  */
    width: 18%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    /* display: flex; */
    width: 18%;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    width: 18%;
  }
  @media only screen and (min-width: 1024px) {
    /*  */
    width: 25%;
  }
  @media only screen and (min-width: 1200px) {
    /*  */
  }
  @media only screen and (min-width: 1400px) {
    /*  */
  }
`;

const NumberBox = styled(Link)`
  width: 100px;
  display: block;
  color: ${props => props.theme.button};
  text-decoration: none;
  cursor: pointer;
`;

const MinerTxEthDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: grey; */
  @media only screen and (max-width: 479.98px) {
    /*  */
    width: 72%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    /* background-color: red; */
    width: 72%;
    /* padding-left: 3px; */
  }
  @media only screen and (min-width: 768px) {
    /*  */
    /* padding-left: 7.5px; */
    width: 72%;
  }
  @media only screen and (min-width: 1024px) {
    /*  */
    width: 65%;
  }
  @media only screen and (min-width: 1200px) {
    /*  */
  }
  @media only screen and (min-width: 1400px) {
    /*  */
  }
`;

const MinerTxDiv = styled.div`
  display: block;
  height: 100%;

  @media only screen and (max-width: 479.98px) {
    /*  */
    max-width: 60%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    max-width: 60%;
    /* background-color: red; */
  }
  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 1024px) {
    /*  */
    max-width: 60%;
  }
  @media only screen and (min-width: 1200px) {
    /* max-width: 132px; */
    max-width: 60%;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    max-width: 60%;
  }
  /* background-color: lightgray; */
`;

const MinerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MinerName = styled.a`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 3px;
  color: ${props => props.theme.button};
  cursor: pointer;

  /* border: 1px solid darkblue; */

  /* 반응형시 max-width 건드려야함 */
`;

const TxBox = styled.div``;

const TxCount = styled.a`
  color: ${props => props.theme.button};
  cursor: pointer;
`;

const EthBox = styled.div`
  background-color: ${props => props.theme.etherbackgroundcolor};
  display: flex;
  border-radius: 6.1875rem;
  font-size: 0.60938rem;
  line-height: 1.7;
  letter-spacing: 0.8px;
  padding: 0 10px;
  align-items: center;
  margin-right: 10px;
`;

const BlockItems = ({ index, number, timestamp, miner, txCount, blockReward }) => {
  blockReward = blockReward.toFixed(5);
  return (
    <BlockItem style={index !== 0 ? { marginTop: '12px' } : null}>
      <BlockInner>
        <BlockBox>
          <BlockIconDiv>
            <BlockIconBox>BK</BlockIconBox>
          </BlockIconDiv>
          <NumberElapseDiv>
            <NumberBox to={`/block/${number}`}>{number}</NumberBox>
            <TimeStamBox timestamp={timestamp} />
          </NumberElapseDiv>
          <MinerTxEthDiv>
            <MinerTxDiv>
              <MinerBox>
                Miner
                <MinerName>{miner}</MinerName>
              </MinerBox>
              <TxBox>
                <TxCount> {txCount} txns</TxCount>
              </TxBox>
            </MinerTxDiv>
            <EthBox> {blockReward}Eth</EthBox>
          </MinerTxEthDiv>
        </BlockBox>
      </BlockInner>
    </BlockItem>
  );
};

export default BlockItems;
