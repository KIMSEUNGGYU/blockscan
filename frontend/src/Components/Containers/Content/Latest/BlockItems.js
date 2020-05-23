import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TimeStamBox from './TimeItems';

const BlockItem = styled.div`
  width: 425px;
`;

const BlockInner = styled.div`
  border-bottom: 0.5px solid ${props => props.theme.etherinfo};
  margin-bottom: 12px;
`;

const BlockBox = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const BlockIconDiv = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 8px;
  display: flex;
`;

const BlockIconBox = styled.div`
  width: 100%;
  height: 100%;
  cursor: default;
  background: ${props => props.theme.ethershadow};
  display: flex;
  justify-content: center;
  user-select: none;
  padding: 10px;
  border-radius: 5px;
`;

const NumberElapseDiv = styled.div`
  width: 20%;
  display: block;
`;

const NumberBox = styled(Link)`
  color: ${props => props.theme.button};
  text-decoration: none;
  cursor: pointer;
`;

const MinerTxEthDiv = styled.div`
  width: 70%;
  padding-left: 7.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MinerTxDiv = styled.div`
  display: block;
`;

const MinerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MinerName = styled.a`
  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 3px;
  color: ${props => props.theme.button};
  cursor: pointer;
`;

const TxBox = styled.div``;

const TxCount = styled.a`
  color: ${props => props.theme.button};
  cursor: pointer;
`;

const EthBox = styled.div`
  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${props => props.theme.etherbackgroundcolor};
  display: flex;
  border-radius: 6.1875rem;
  font-size: 0.60938rem;
  line-height: 1.7;
  letter-spacing: 0.8px;
  padding: 0 0.5rem;
  align-items: center;
`;

const BlockItems = ({ index, number, timestamp, miner, txCount, blockReward }) => {
  blockReward = blockReward.toFixed(5);

  return (
    <BlockItem>
      <BlockInner style={index === 9 ? { marginBottom: '0px', borderBottom: '0px' } : null}>
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
