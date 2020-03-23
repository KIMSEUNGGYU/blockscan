import React from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import Header from './Containers/Header/ReturnHeader';
import Detail from './Containers/Content/Detail/ReturnDetail';
import Index from './Containers/Content/Index/ReturnIndex';
import Footer from './Containers/Footer/ReturnFooter';

const Main = styled.div`
  background-color: #f8f9fa;
`;
const MainInner = styled.div`
  width: 66%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Main>
        <MainInner>
          {/* <Index /> */}
          <Route path='/' exact={true} component={Index} />
          <Route path='/block/:blockNumber' component={Detail} />
        </MainInner>
      </Main>
      <Footer />
    </ThemeProvider>
  );
};
export default App;
