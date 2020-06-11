import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { InnerWidth } from '../../../helper/CustomHook';
import logo from '../../../Assets/logo-ether.png';

const Header = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0px 1px 10px ${props => props.theme.etherbackgroundcolor};
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 479.98px) {
    /*  */
    width: 95%;
    height: 55px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    width: 95%;
    height: 55px;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    width: 710px;
  }
  @media only screen and (min-width: 1024px) {
    /*  */
    width: 820px;
  }
  @media only screen and (min-width: 1200px) {
    /*  */
    width: 950px;
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    width: 1200px;
  }
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
  @media only screen and (max-width: 479.98px) {
    /*  */
    margin-top: 5px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    margin-top: 5px;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    margin-top: 8px;
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

const HeaderMenuDiv = styled.div`
  height: 100%;
  display: flex;
`;

const HeaderMenuInner = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HeaderMenuBox = styled.div`
  /* width: 100%; */
  display: flex;

  @media only screen and (max-width: 479.98px) {
    /*  */
    align-items: center;
    margin: 15px 0;
    font-size: 13px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    align-items: center;
    margin: 15px 0;
    font-size: 13px;
  }
  @media only screen and (min-width: 768px) {
    /*  */
    /* width: 710px; */
    font-size: 15px;
    margin-left: 30px;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1024px) {
    /* width: 820px; */
  }
  @media only screen and (min-width: 1200px) {
    /* width: 950px; */
  }
  @media only screen and (min-width: 1400px) {
    /* width: 1200px; */
    /* width: 100%; */
  }

  /* background-color: lightgray; */
`;

const StyledMenu = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const StyledSvg = styled.svg`
  :hover {
    fill: ${props => props.theme.button};
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: grey; */
`;

const SubMenuInner = styled.div`
  width: 90%;
  margin: 0 auto;
  /* background-color: darkblue; */
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
  const width = InnerWidth();
  const [menu, setMenu] = useState(false);

  return (
    <Header>
      <HeaderInner>
        <HeaderLogoBox>
          <StyledLink to={`/`}>
            <HeaderLogoIcon url={logo} />
          </StyledLink>
        </HeaderLogoBox>
        {width < 768 ? (
          <>
            <HeaderMenuDiv>
              <HeaderMenuBox>
                <StyledMenu
                  onClick={() => {
                    setMenu(!menu);
                  }}>
                  <StyledSvg>
                    {menu ? (
                      <path d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z' />
                    ) : (
                      <path d='M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z' />
                    )}
                  </StyledSvg>
                </StyledMenu>
              </HeaderMenuBox>
            </HeaderMenuDiv>
          </>
        ) : (
          <HeaderMenuDiv>
            <HeaderMenuInner>
              <HeaderMenuBox>
                <StyledLink
                  to={`/`}
                  onClick={() => {
                    if (menu === true) {
                      setMenu(!menu);
                    }
                  }}>
                  Home
                </StyledLink>
              </HeaderMenuBox>
              <HeaderMenuBox>
                <StyledLink
                  to={`/blocks`}
                  onClick={() => {
                    if (menu === true) {
                      setMenu(!menu);
                    }
                  }}>
                  Blocks
                </StyledLink>
              </HeaderMenuBox>
              <HeaderMenuBox>
                <StyledLink
                  to={`/txs`}
                  onClick={() => {
                    if (menu === true) {
                      setMenu(!menu);
                    }
                  }}>
                  Transactions
                </StyledLink>
              </HeaderMenuBox>
              <HeaderMenuBox>
                <StyledLink
                  to={`/`}
                  onClick={() => {
                    if (menu === true) {
                      setMenu(!menu);
                    }
                  }}>
                  Resources
                </StyledLink>
              </HeaderMenuBox>
              <HeaderMenuBox>
                <StyledLink
                  to={`/`}
                  onClick={() => {
                    if (menu === true) {
                      setMenu(!menu);
                    }
                  }}>
                  More
                </StyledLink>
              </HeaderMenuBox>
            </HeaderMenuInner>
          </HeaderMenuDiv>
        )}
      </HeaderInner>
      {menu && (
        <SubMenu>
          <SubMenuInner>
            <HeaderMenuBox>
              <StyledLink
                to={`/`}
                onClick={() => {
                  if (menu === true) {
                    setMenu(!menu);
                  }
                }}>
                Home
              </StyledLink>
            </HeaderMenuBox>
            <HeaderMenuBox>
              <StyledLink
                to={`/blocks`}
                onClick={() => {
                  if (menu === true) {
                    setMenu(!menu);
                  }
                }}>
                Blocks
              </StyledLink>
            </HeaderMenuBox>
            <HeaderMenuBox>
              <StyledLink
                to={`/txs`}
                onClick={() => {
                  if (menu === true) {
                    setMenu(!menu);
                  }
                }}>
                Transactions
              </StyledLink>
            </HeaderMenuBox>
            <HeaderMenuBox>
              <StyledLink
                to={`/`}
                onClick={() => {
                  if (menu === true) {
                    setMenu(!menu);
                  }
                }}>
                Resources
              </StyledLink>
            </HeaderMenuBox>
            <HeaderMenuBox>
              <StyledLink
                to={`/`}
                onClick={() => {
                  if (menu === true) {
                    setMenu(!menu);
                  }
                }}>
                More
              </StyledLink>
            </HeaderMenuBox>
          </SubMenuInner>
        </SubMenu>
      )}
    </Header>
  );
};

export default RenderHeader;
