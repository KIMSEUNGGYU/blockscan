import React from 'react';
import styled from 'styled-components';

import ReturnList from '../Latest/ReturnList';
import ReturnSearchBar from '../SearchBar/ReturnSearchBar';
import ReturnSponsoredTitle from '../Title/ReturnSponsoredTitle';
import ReturnBanner from '../Banner';
import ReturnEtherInfo from '../EtherInformation/ReturnEtherInfo';

const SectionBottom = styled.div`
  height: 60px;
`;

const RenderIndex = () => {
  return (
    <>
      <ReturnSponsoredTitle />
      <ReturnSearchBar />
      <ReturnEtherInfo />
      <ReturnBanner />
      <ReturnList />
      <SectionBottom />
    </>
  );
};

export default RenderIndex;
