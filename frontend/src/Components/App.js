import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import Header from './Containers/Header/ReturnHeader';

const Body = styled.div`
  background-color: #f8f9fa;
`;

const Main = styled.div`
  height: 100%;
  width: 66%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Body>
        <Header />
        <Main></Main>
        <Footer />
      </Body>
    </ThemeProvider>
  );
};
export default App;
