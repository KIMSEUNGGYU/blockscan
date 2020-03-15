import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';
import Theme from '../Styles/Theme';
import Header from './Containers/Header/ReturnHeader';
import SponsoredTitle from './Containers/Content/Title/ReturnSponsoredTitle';
import SearchBar from './Containers/Content/SearchBar/ReturnSearchBar';
import EtherInfo from './Containers/Content/EtherInformation/ReturnEtherInfo';
import Banner from './Containers/Content/Banner';
import Latest from './Containers/Content/Latest/ReturnList';
import Footer from './Containers/Footer/ReturnFooter';

const Body = styled.div`
  background-color: #f8f9fa;
`;

//27인치 확인시 66가 width 동일

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
        <Main>
          <SponsoredTitle />
          <SearchBar />
          <EtherInfo />
          <Banner />
          <Latest />
        </Main>
        <Footer />
      </Body>
    </ThemeProvider>
  );
};
export default App;
