import React from 'react';
import styled from 'styled-components';
import Price from '../../../../Assets/Price.svg';
import Block from '../../../../Assets/Block.svg';
import Market from '../../../../Assets/Market.svg';
import Difficulty from '../../../../Assets/Difficulty.svg';
import Chart from '../../../../Assets/Chart.jpg';

const EtherInfo = styled.div`
  height: 152px;
  margin: 0px 0px 20px;
  box-shadow: 0 0.5rem 1.2rem rgba(189, 197, 209, 0.2);
  border: 1px solid #e7eaf3;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.8125rem;
  line-height: 1.5;
  background-color: white;
`;

const InfoDiv = styled.div`
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
`;

const EtherMarketBox = styled.div`
  border-right: 1px solid #e7eaf3;
  width: 30%;
  border: 1px solid black;
  display: block;
`;

const LatestDifficultyBox = styled.div`
  width: 30%;
  border-right: 1px solid #e7eaf3;
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;
  /* justify-content: space-between; */
`;

const ImageBox = styled.img`
  width: 26px;
  height: 26px;
`;

const Styledhr = styled.hr`
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  opacity: 0.75px;
  border: 0;
  border-top: 1px solid black;
`;

const StyledCharBox = styled.div`
  display: block;
  box-sizing: border-box;
  border: 1px solid black;
`;

const RenderEtherInfo = () => {
  return (
    <EtherInfo>
      <InfoDiv>
        <EtherMarketBox>
          <ItemBox>
            <ImageBox src={Price} />
            ETHER PRICE
            <br />
            $203.66 @ 0.0252 BTC (-0.60%)
          </ItemBox>
          <Styledhr />
          <ItemBox>
            <ImageBox src={Market} />
            MARKET CAP
            <br />
            $22,410,113,736.381
          </ItemBox>
        </EtherMarketBox>
        <LatestDifficultyBox>
          <div>
            <ItemBox>
              <ImageBox src={Block} />
              LATEST BLOCK
              <br />
              9643913
            </ItemBox>
            <ItemBox>
              TRANSACTIONS
              <br />
              655.13 M (10.3 TPS)
            </ItemBox>
          </div>
          <Styledhr />
          <div>
            <ItemBox>
              <ImageBox src={Difficulty} />
              DIFFICULTY
              <br />
              2,297.24 TH
            </ItemBox>
            <ItemBox>
              HASH RATE
              <br />
              184,076.93 GH/s
            </ItemBox>
          </div>
        </LatestDifficultyBox>
        <StyledCharBox>
          <img src={Chart} alt='ETHEREUM TRANSACTION HISTORY IN 14 DAYS'></img>
        </StyledCharBox>
      </InfoDiv>
    </EtherInfo>
  );
};

export default RenderEtherInfo;
