import React from 'react';
import styled from 'styled-components';
import Price from '../../../../Assets/Price.svg';
import Block from '../../../../Assets/Block.svg';
import Market from '../../../../Assets/Market.svg';
import Difficulty from '../../../../Assets/Difficulty.svg';
import Chart from '../../../../Assets/Chart.jpg';

const EtherInfo = styled.div`
  height: 30%;
  padding: 12px 0;
  margin: 0px 0px 20px;
  border: 1px solid #e7eaf3;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.8125rem;
  line-height: 1.5;
  background-color: white;
  box-shadow: 0 0.5rem 1.2rem rgba(189, 197, 209, 0.2);
`;

const InfoInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubInner = styled.div`
  width: 32%;
  border-right: 1px solid #e7eaf3;
  margin-left: 12px;
  padding-right: 15px;
`;

const ThirdInner = styled.div`
  display: flex;
  align-items: center;
`;

const BlockTxDiffiHashinner = styled.div`
  width: 100%;
`;

const LatestTransactionBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: block;
  color: #77838f;
`;

const StlyedText = styled.div`
  color: black;
`;

const ImageBox = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 10px;
`;

const Styledhr = styled.hr`
  width: 95%;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  opacity: 0.75px;
  border: 0;
  border: 0.5px solid #e7eaf3;
`;

const RenderEtherInfo = () => {
  return (
    <EtherInfo>
      <InfoInner>
        <SubInner>
          <ThirdInner>
            <ImageBox src={Price} />
            <BlockTxDiffiHashinner>
              <LatestTransactionBox>
                <TitleBox>ETHER PRICE</TitleBox>
              </LatestTransactionBox>
              <LatestTransactionBox>
                <StlyedText>$119.28 @ 0.02318 BTC (-15.58%)</StlyedText>
              </LatestTransactionBox>
            </BlockTxDiffiHashinner>
          </ThirdInner>
          <Styledhr />
          <ThirdInner>
            <ImageBox src={Market} />
            <BlockTxDiffiHashinner>
              <LatestTransactionBox>
                <TitleBox>MARKET CAP</TitleBox>
              </LatestTransactionBox>
              <LatestTransactionBox>
                <StlyedText>$13,130,287,549.724</StlyedText>
              </LatestTransactionBox>
            </BlockTxDiffiHashinner>
          </ThirdInner>
        </SubInner>
        <SubInner>
          <ThirdInner>
            <ImageBox src={Block} />
            <BlockTxDiffiHashinner>
              <LatestTransactionBox>
                <TitleBox>LATEST BLOCK</TitleBox>
                <TitleBox>TRANSACTIONS</TitleBox>
              </LatestTransactionBox>
              <LatestTransactionBox>
                <StlyedText>9664036</StlyedText>
                <StlyedText>657.51</StlyedText>
              </LatestTransactionBox>
            </BlockTxDiffiHashinner>
          </ThirdInner>
          <Styledhr />
          <ThirdInner>
            <ImageBox src={Difficulty} />
            <BlockTxDiffiHashinner>
              <LatestTransactionBox>
                <TitleBox>DIFFICULTY</TitleBox>
                <TitleBox>HASH RATE</TitleBox>
              </LatestTransactionBox>
              <LatestTransactionBox>
                <StlyedText>2,274.65 TH</StlyedText>
                <StlyedText>175,515.42 GH/s</StlyedText>
              </LatestTransactionBox>
            </BlockTxDiffiHashinner>
          </ThirdInner>
        </SubInner>
        <SubInner>
          <img src={Chart} alt='ETHEREUM TRANSACTION HISTORY IN 14 DAYS'></img>
        </SubInner>
      </InfoInner>
    </EtherInfo>
  );
};

export default RenderEtherInfo;
