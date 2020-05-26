import React from 'react';
import { FaMoon } from 'react-icons/fa';
import styled from 'styled-components';
import Ethereum from '../../../Assets/Footerethereum.svg';
import Map from '../../../Assets/Map.png';

const Footer = styled.div`
  width: 100%;
  height: 20%;
  padding: 32px 0 20px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  background-image: linear-gradient(150deg, #19a0ff, #2d1582);
  background-attachment: fixed;
  margin-top: 55px;
`;

const FooterInner = styled.div`
  width: 950px;
  margin: 0 auto;
  display: block;
  justify-content: space-between;
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
  /* 다크모드 소스 추가예정 */
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
            <FaMoon className='hoverColor' />
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
