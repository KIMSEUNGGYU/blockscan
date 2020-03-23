import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MAINTIME } from '../../../../Action/ActionTypes';
import { GetTime } from '../../../../Action/Time';

const BlockItem = styled.div``;

const BlockInner = styled.div`
  border-bottom: 0.5px solid #e7eaf3;
  margin-bottom: 12px;
`;

const BlockBox = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const BlockIconDiv = styled.div`
  margin-right: 8px;
  display: flex;
`;

const BlockIconBox = styled.div`
  cursor: default;
  width: 38.609px;
  height: 38.609px;
  background: rgba(119, 131, 143, 0.1);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const NumberElapseDiv = styled.div`
  width: 119.375px;
  display: block;
`;

const NumberBox = styled.div`
  color: #3498db;
  cursor: pointer;
`;

const ElapseBox = styled.div`
  color: #77838f;
`;

const MinerTxEthDiv = styled.div`
  width: 391px;
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
  color: #3498db;
  cursor: pointer;
`;

const TxBox = styled.div``;

const TxCount = styled.a`
  color: #3498db;
  cursor: pointer;
`;

const EthBox = styled.div`
  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #f1f2f4;
  display: flex;
  border-radius: 6.1875rem;
  font-size: 0.60938rem;
  line-height: 1.7;
  letter-spacing: 0.8px;
  padding: 0 0.5rem;
  align-items: center;
`;

const A = styled.a`
  color: #3498db;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #3498db;
    font-weight: 500;
  }
`;

const BlockItems = ({ index, number, timestamp, miner, txCount, blockReward }) => {
  const [loading, setLoading] = useState();
  const [time, setTime] = useState({
    Seconds: 0,
    Minutes: null,
  });

  if (blockReward != null) {
    blockReward = blockReward.toFixed(5);
  }

  function TimeCount() {
    setLoading(true);
    let Timeobj;
    setInterval(() => {
      Timeobj = GetTime(timestamp, MAINTIME);
      setTime(Timeobj);
    }, 999);
    setLoading(false);
  }
  useEffect(() => {
    TimeCount();
  }, [time]);

  return (
    <BlockItem>
      <BlockInner style={index === 9 ? { marginBottom: '0px', borderBottom: '0px' } : null}>
        <BlockBox>
          <BlockIconDiv>
            <BlockIconBox>BK</BlockIconBox>
          </BlockIconDiv>
          <NumberElapseDiv>
            <NumberBox>
              <A href={`/block/${number}`}>{number}</A>
            </NumberBox>
            <ElapseBox>
              {loading && null}
              {!loading && time.Minutes
                ? time.Minutes + 'min ' + time.Seconds + 'secs ago'
                : time.Seconds + 'secs ago'}
            </ElapseBox>
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
