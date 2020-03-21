import React from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import Header from './Containers/Header/ReturnHeader';
import List from './Containers/Content/Latest/ReturnList';
import Detail from './Containers/Content/Detail/ReturnDetail';

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
          <Route path='/' exact={true} component={List} />
          <Route path='/block/:blockNumber' component={Detail} />
        </MainInner>
      </Main>
    </ThemeProvider>
  );
};
export default App;
