import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import Header from './Containers/Header/ReturnHeader';
import Routes from '../Routes/Routes';
import Footer from './Containers/Footer/ReturnFooter';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const WrapperInner = styled.div`
  width: 950px;
  height: 100%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Header />
          <WrapperInner>
            <Routes />
          </WrapperInner>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
