import React from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import Header from './Containers/Header/ReturnHeader';
import Footer from './Containers/Footer/ReturnFooter';
import DetailBlock from './Containers/Content/Detail/ReturnDetail';
import DetailTx from './Containers/Content/Detail/ReturnDetailTxs';
import ReturnBlocksList from './Containers/Content/List/ReturnBlocksList';
import Index from './Containers/Content/Index/ReturnIndex';

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
          <Route path='/blocks/' exact={true} component={ReturnBlocksList} />
          <Route path='/block/:blockNumber' component={DetailBlock} />
          <Route path='/txs/:txHash' component={DetailTx} />
        </MainInner>
      </Main>
      <Footer />
    </ThemeProvider>
  );
};
export default App;
