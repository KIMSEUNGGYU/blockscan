import React from 'react';
import styled from 'styled-components';
import logo from '../../../Assets/logo-ether.png';

const Header = styled.div`
  border-bottom: solid 2px #f8f9fa;
  box-shadow: 0 1px 10px rgba(151, 164, 175, 0.1);
  height: 50px;
`;

const HeaderInner = styled.div`
  width: 66%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoBox = styled.div``;

const HeaderLogoIcon = styled.img`
  width: 140px;
  height: 40px;
`;

const HeaderMenuDiv = styled.div`
  color: #6c757e;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderMenuBox = styled.div`
  font-size: 0.9rem;
  margin-left: 30px;
`;
const A = styled.a`
  color: #6c757e;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #3498db;
    font-weight: 600;
  }
`;

const RenderHeader = () => {
  return (
    <Header>
      <HeaderInner>
        <HeaderLogoBox>
          <A href='/'>
            <HeaderLogoIcon src={logo} />
          </A>
        </HeaderLogoBox>
        <HeaderMenuDiv>
          <HeaderMenuBox>
            <A href='/'>Home</A>
          </HeaderMenuBox>
          <HeaderMenuBox>
            <A href={`/blocks?pn=1&p=1`}>Blocks</A>
          </HeaderMenuBox>
          <HeaderMenuBox>
            <A href={`/txs?pn=1&p=1`}>Transactions</A>
          </HeaderMenuBox>
          <HeaderMenuBox>Resources</HeaderMenuBox>
          <HeaderMenuBox>More</HeaderMenuBox>
        </HeaderMenuDiv>
      </HeaderInner>
    </Header>
  );
};

export default RenderHeader;
