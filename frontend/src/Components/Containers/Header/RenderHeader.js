import React from 'react';
import styled from 'styled-components';
import logo from '../../../Assets/logo-ether.png';

const Header = styled.div`
  border-bottom: solid 1px white;
  box-shadow: 0 1px 10px rgba(151, 164, 175, 0.1);
  padding: 10px 0 10px;
`;

const HeaderInner = styled.div`
  width: 66%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogoIcon = styled.img`
  width: 155px;
  height: 35px;
`;

const HeaderMenuDiv = styled.div`
  color: #6c757e;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderMenuBox = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  margin: 4px;
  padding: 6px;
`;

const RenderHeader = () => {
  // const [data, setData] = useState(white);
  // const onFocus = () => {
  //   setData(data === 'white' ? black : white);
  // };

  return (
    <Header>
      <HeaderInner>
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
      </HeaderInner>
    </Header>
  );
};

export default RenderHeader;
