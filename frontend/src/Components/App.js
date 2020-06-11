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
  height: 100%;
  margin: 0 auto;

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
    /*  */
    width: 1200px;
  }
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
