import React from 'react';
import styled from 'styled-components';
import { InnerWidth } from '../../../../helper/CustomHook';
import Price from '../../../../Assets/Price.svg';
import Block from '../../../../Assets/Block.svg';
import Market from '../../../../Assets/Market.svg';
import Difficulty from '../../../../Assets/Difficulty.svg';
import Chart from '../../../../Assets/Chart.jpg';

const EtherInfo = styled.div`
  height: 30%;
  margin: 0px 0px 20px;
  border: 1px solid ${props => props.theme.etherinfo};
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.8125rem;
  line-height: 1.5;
  background-color: ${props => props.theme.background};
  box-shadow: 0 0.5rem 1.2rem ${props => props.theme.ethershadow};

  @media only screen and (max-width: 479.98px) {
    /*  */
    padding: 12px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    padding: 12px;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    padding: 12px 0;
  }
  @media only screen and (min-width: 1024px) {
    width: 818px;
    /* 820 */
  }
  @media only screen and (min-width: 1200px) {
    width: 948px;
    /* 950 */
  }
  @media only screen and (min-width: 1400px) {
    /* 1200 */
    width: 1198px;
  }
`;

const InfoInner = styled.div`
  /* background-color: red; */

  @media only screen and (max-width: 479.98px) {
    /*  */
    display: block;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    display: block;
    /* margin: 0 10px; */
  }
  @media only screen and (min-width: 768px) {
    /*  */
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1024px) {
    /* */
  }
  @media only screen and (min-width: 1200px) {
    /* */
  }
  @media only screen and (min-width: 1400px) {
    /*  */
  }
`;

const SubInner = styled.div`
  display: block;

  @media only screen and (max-width: 479.98px) {
    /*  */
    margin: 0;
    padding: 0;
    width: 100%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    margin: 0;
    padding: 0;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    width: 32%;
    border-right: 1px solid ${props => props.theme.etherinfo};
    margin-left: 12px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 1024px) {
    /* */
  }
  @media only screen and (min-width: 1200px) {
    /* */
  }
  @media only screen and (min-width: 1400px) {
    /*  */
  }
`;

const CharInner = styled.div`
  width: 36%;
  background-image: url(${Chart});
  background-repeat: no-repeat;
  background-size: 100% 128px;
  margin: 0 10px;

  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
  }
  @media only screen and (min-width: 768px) {
    background-size: 100% 115px;
  }
  @media only screen and (min-width: 1024px) {
    background-size: 100% 120px;
  }
  @media only screen and (min-width: 1200px) {
    /*  */
  }
  @media only screen and (min-width: 1400px) {
    background-size: 100% 128px;
  }
`;

const ThirdInner = styled.div`
  @media only screen and (max-width: 479.98px) {
    /*  */
    display: flex;
    align-items: center;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    /* flex-direction: column; */
    /* display: block; */
    display: flex;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    display: flex;
    align-items: center;
  }
  @media only screen and (min-width: 1024px) {
    /*  */
  }
  @media only screen and (min-width: 1200px) {
    /*  */
  }
  @media only screen and (min-width: 1400px) {
    /*  */
  }
`;

const BlockTxDiffiHashinner = styled.div`
  width: 100%;
`;

const LatestTransactionBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    /* align-items: center; */
    /* justify-content: center; */
  }
  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 1024px) {
    /*  */
  }
  @media only screen and (min-width: 1200px) {
    /*  */
  }
  @media only screen and (min-width: 1400px) {
    /*  */
  }
`;

const TitleBox = styled.div`
  display: block;
  color: ${props => props.theme.draksubtitle};

  @media only screen and (max-width: 479.98px) {
    /*  */
    font-size: 10px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    font-size: 10px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1400px) {
  }
`;

const StlyedText = styled.div`
  color: ${props => props.theme.black};

  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
  }
  @media only screen and (min-width: 768px) {
    font-size: 11px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1400px) {
  }
`;

const ImageBox = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 10px;

  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 1024px) {
    /*  */
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1400px) {
  }
`;

const Styledhr = styled.hr`
  width: 100%;
  border: 0.5px solid ${props => props.theme.etherinfo};

  @media only screen and (max-width: 479.98px) {
    /*  */
    margin: 20px 0;
    opacity: 0.75;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    margin: 20px 0;
    opacity: 0.75;
  }
  @media only screen and (min-width: 768px) {
    margin: 25.6px 0;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1400px) {
  }
`;

const RenderEtherInfo = () => {
  const width = InnerWidth();

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
                <StlyedText>$119.28 @ 0.02318 BTC {width <= 1024 ? null : '(-15.58%)'}</StlyedText>
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
        {width < 768 && <Styledhr />}
        <SubInner>
          <ThirdInner>
            <ImageBox src={Block} />
            <BlockTxDiffiHashinner>
              <LatestTransactionBox>
                <TitleBox>{width <= 1024 ? 'BLOCK' : 'LATEST BLOCK'}</TitleBox>
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
        <CharInner url={Chart}></CharInner>
      </InfoInner>
    </EtherInfo>
  );
};

export default RenderEtherInfo;
