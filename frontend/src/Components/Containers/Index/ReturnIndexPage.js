import React from 'react';
import Title from '../Content/Title/ReturnSponsoredTitle';
import SearchBar from '../Content/SearchBar/ReturnSearchBar';
import EtherInfo from '../Content/EtherInformation/ReturnEtherInfo';
import Banner from '../Content/Banner';
import Latest from '../Content/Latest/ReturnList';

const ReturnIndexPage = () => {
  return (
    <>
      <Title />
      <SearchBar />
      <EtherInfo />
      <Banner />
      <Latest />
    </>
  );
};

export default ReturnIndexPage;
