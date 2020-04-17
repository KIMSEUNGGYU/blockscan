import React from 'react';
import styled from 'styled-components';
import TimeStamBox from './TimeItems';

const TxsItem = styled.div``;

const TxsInner = styled.div`
  border-bottom: 0.5px solid #e7eaf3;
  margin-bottom: 12px;
`;

const TxsBox = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const TxsIconDiv = styled.div`
  margin-right: 8px;
  display: flex;
`;

const TxsIconBox = styled.div`
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

const HashTimestampBox = styled.div`
  width: 119.375px;
  display: block;
`;

const HashBox = styled.div`
  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3498db;
  cursor: pointer;
`;

const FromToDiv = styled.div`
  width: 391px;
  padding-left: 7.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TxDiv = styled.div`
  display: block;
`;

const FromBox = styled.div`
  display: flex;
`;

const From = styled.a`
  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 3px;
  color: #3498db;
  cursor: pointer;
`;

const ToBox = styled.div`
  max-width: 132px;
  display: flex;
`;

const To = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3498db;
  cursor: pointer;
  margin-left: 4px;
`;

const TxFeeBox = styled.div`
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

const TxsItems = ({ index, hash, timestamp, from, to, txFee }) => {
  txFee = txFee.toFixed(5);

  return (
    <TxsItem>
      <TxsInner style={index === 9 ? { marginBottom: '0px', borderBottom: '0px' } : null}>
        <TxsBox>
          <TxsIconDiv>
            <TxsIconBox>TX</TxsIconBox>
          </TxsIconDiv>
          <HashTimestampBox>
            <HashBox>{hash}</HashBox>
            <TimeStamBox timestamp={timestamp} />
          </HashTimestampBox>
          <FromToDiv>
            <TxDiv>
              <FromBox>
                From
                <From>{from}</From>
              </FromBox>
              <ToBox>
                To
                <To> {to}</To>
              </ToBox>
            </TxDiv>
            <TxFeeBox> {txFee}Eth</TxFeeBox>
          </FromToDiv>
        </TxsBox>
      </TxsInner>
    </TxsItem>
  );
};

export default TxsItems;
