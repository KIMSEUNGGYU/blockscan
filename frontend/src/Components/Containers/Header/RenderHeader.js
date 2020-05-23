import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../Assets/logo-ether.png';

const Header = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0px 1px 10px ${props => props.theme.etherbackgroundcolor};
`;

const HeaderInner = styled.div`
  width: 950px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoBox = styled.div`
  width: 200px;
  height: 55px;
`;

const HeaderLogoIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin-top: 8px;
`;

const HeaderMenuDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const HeaderMenuInner = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HeaderMenuBox = styled.div`
  width: 100%;
  justify-content: space-between;
  font-size: 15px;
  margin-left: 30px;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.headertext};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.button};
    font-weight: 600;
  }
`;

const RenderHeader = () => {
  return (
    <Header>
      <HeaderInner>
        <HeaderLogoBox>
          <StyledLink to={`/`}>
            <HeaderLogoIcon url={logo} />
          </StyledLink>
        </HeaderLogoBox>
        <HeaderMenuDiv>
          <HeaderMenuInner>
            <HeaderMenuBox>
              <StyledLink to={`/`}>Home</StyledLink>
            </HeaderMenuBox>
            <HeaderMenuBox>
              <StyledLink to={`/blocks`}>Blocks</StyledLink>
            </HeaderMenuBox>
            <HeaderMenuBox>
              <StyledLink to={`/txs`}>Transactions</StyledLink>
            </HeaderMenuBox>
            <HeaderMenuBox>
              <StyledLink to={`/`}>Resources</StyledLink>
            </HeaderMenuBox>
            <HeaderMenuBox>
              <StyledLink to={`/`}>More</StyledLink>
            </HeaderMenuBox>
          </HeaderMenuInner>
        </HeaderMenuDiv>
      </HeaderInner>
    </Header>
  );
};

export default RenderHeader;
