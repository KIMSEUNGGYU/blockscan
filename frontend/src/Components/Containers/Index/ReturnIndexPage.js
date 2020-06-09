import React from 'react';
import Title from '../Content/Title/ReturnSponsoredTitle';
import SearchBar from '../Content/SearchBar/ReturnSearchBar';
import EtherInfo from '../Content/EtherInformation/ReturnEtherInfo';
import Banner from '../Content/Banner';
import Latest from '../Content/Latest/ReturnList';
import { InnerWidth } from '../../../helper/CustomHook';

const ReturnIndexPage = () => {
  const width = InnerWidth();
  return (
    <>
      <Title />
      <SearchBar />
      <EtherInfo />
      {width >= 1200 && <Banner />}
      <Latest />
    </>
  );
};

export default ReturnIndexPage;
