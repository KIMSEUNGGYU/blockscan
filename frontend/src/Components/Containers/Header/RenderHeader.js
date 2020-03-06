import React from 'react';
import styled from 'styled-components';
import logo from '../../../Assets/logo-ether.png';

const Header = styled.div`
  height: 52px;
  position: relative;
  border-bottom: solid 1px white;
  box-shadow: 0 1px 10px rgba(151, 164, 175, 0.1);
`;

const HeaderDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 69px;
`;

const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogoIcon = styled.img`
  width: 155px;
  height: 35px;
  background-size: cover;
  border-radius: 10px;
`;

const HeaderMenuDiv = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderMenuBox = styled.div`
  padding: 8px;
  margin: 4px;
`;

const RenderHeader = () => {
  // const [data, setData] = useState(white);
  // const onFocus = () => {
  //   setData(data === 'white' ? black : white);
  // };

  return (
    <Header>
      <HeaderDiv>
        <HeaderLogoBox>
          <HeaderLogoIcon src={logo} />
        </HeaderLogoBox>
        <HeaderMenuDiv>
          <HeaderMenuBox>Home</HeaderMenuBox>
          <HeaderMenuBox>BlockChain</HeaderMenuBox>
          <HeaderMenuBox>Tokens</HeaderMenuBox>
          <HeaderMenuBox>Resources</HeaderMenuBox>
          <HeaderMenuBox>More</HeaderMenuBox>
        </HeaderMenuDiv>
      </HeaderDiv>
    </Header>
  );
};

export default RenderHeader;
