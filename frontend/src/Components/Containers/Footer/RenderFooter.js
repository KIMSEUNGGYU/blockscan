import React from 'react';
import { FaMoon } from 'react-icons/fa';
import styled from 'styled-components';
import Ethereum from '../../../Assets/Footerethereum.svg';
import Map from '../../../Assets/Map.png';

const Footer = styled.div`
  width: 100%;
  height: 20%;

  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  background-image: linear-gradient(150deg, #19a0ff, #2d1582);
  background-attachment: fixed;

  @media only screen and (max-width: 479.98px) {
    /*  */
    padding: 20px 0px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    padding: 20px 0px;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    /* width: 710px; */
    padding: 32px 0 20px;
  }
  @media only screen and (min-width: 1024px) {
    /* width: 820px; */
    margin-top: 20px;
  }
  @media only screen and (min-width: 1200px) {
    /* width: 820px; */
    margin-top: 40px;
  }
`;

const FooterInner = styled.div`
  margin: 0 auto;
  display: block;
  justify-content: space-between;

  @media only screen and (max-width: 479.98px) {
    /*  */
    width: 95%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    width: 95%;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    width: 710px;
  }
  @media only screen and (min-width: 1024px) {
    width: 820px;
  }
  @media only screen and (min-width: 1200px) {
    width: 950px;
  }
  @media only screen and (min-width: 1400px) {
    width: 1200px;
  }
`;

const NameAndInfoBox = styled.div`
  display: block;
  color: ${props => props.theme.background};
  background-image: url(${Map});
  background-repeat: no-repeat;
`;

const EthereumMark = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const PowerEthereumBox = styled.div`
  font-size: 19.5px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  display: block;
  line-height: 1.7;
  font-size: 11.375px;
  margin-bottom: 16px;
`;

const DarkNightMode = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${props => props.theme.background};
  background: rgba(248, 249, 250, 0.1);
  border-radius: 5px;
  padding: 5px;

  &:hover {
    background-color: ${props => props.theme.background};
    .hoverColor {
      color: ${props => props.theme.black};
    }
  }
`;

const StyledHr = styled.hr`
  margin: 28px 0 16px 0;
  border-top: 0.1px solid ${props => props.theme.etherinfo};
  opacity: 0.2;
`;

const YearsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 11.375px;
`;

const YearsBox = styled.div`
  color: ${props => props.theme.background};
`;

const RenderFooter = () => {
  const DarkMode = () => {
    // Dark 모드
  };
  return (
    <Footer>
      <FooterInner>
        <NameAndInfoBox>
          <PowerEthereumBox>
            <EthereumMark src={Ethereum} />
            Power by Ethereum
          </PowerEthereumBox>
          <InfoBox>
            Etherscan is a Block Explorer and Analytics Platform <br />
            for Ethereum, a decentralized smart contracts
            <br />
            platform.
          </InfoBox>
          <DarkNightMode>
            <FaMoon className='hoverColor' onClick={DarkMode()} />
          </DarkNightMode>
        </NameAndInfoBox>
        <StyledHr />
        <YearsDiv>
          <YearsBox>Etherscan © 2020 (A1)</YearsBox>
        </YearsDiv>
      </FooterInner>
    </Footer>
  );
};

export default RenderFooter;
