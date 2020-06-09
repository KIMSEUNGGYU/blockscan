import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TimeStamBox from './TimeItems';

const TxsItem = styled.div`
  width: 100%;
  display: flex;
`;

const TxsInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 0.5px solid ${props => props.theme.etherinfo};
`;

const TxsBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const TxsIconDiv = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TxsIconBox = styled.div`
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

const HashTimestampBox = styled.div`
  display: block;

  /* background-color: grey; */

  /*  maxwidth*/
  @media only screen and (max-width: 479.98px) {
    /*  */
    width: 18%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
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

const HashBox = styled(Link)`
  max-width: 80%;
  display: block;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.button};
  cursor: pointer;
`;

const FromToDiv = styled.div`
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
    width: 72%;
  }
  @media only screen and (min-width: 768px) {
    /*  */
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

const TxDiv = styled.div`
  display: block;

  @media only screen and (max-width: 479.98px) {
    /*  */
    max-width: 60%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    max-width: 60%;
  }
  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 1024px) {
    /*  */
    max-width: 60%;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 60%;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    max-width: 60%;
  }

  /* background-color: lightgray; */
`;

const FromBox = styled.div`
  display: flex;
`;

const From = styled.a`
  margin-left: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.button};
  cursor: pointer;
`;

const ToBox = styled.div`
  display: flex;
`;

const To = styled.a`
  overflow: hidden;
  margin-left: 3px;
  text-overflow: ellipsis;
  color: ${props => props.theme.button};
  cursor: pointer;

  max-width: 60%;
`;

const TxFeeBox = styled.div`
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

const TxsItems = ({ index, hash, timestamp, from, to, txFee }) => {
  txFee = txFee.toFixed(5);

  return (
    <TxsItem style={index !== 0 ? { marginTop: '12px' } : null}>
      <TxsInner>
        <TxsBox>
          <TxsIconDiv>
            <TxsIconBox>TX</TxsIconBox>
          </TxsIconDiv>
          <HashTimestampBox>
            <HashBox to={`/tx/${hash}`}>{hash}</HashBox>
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
