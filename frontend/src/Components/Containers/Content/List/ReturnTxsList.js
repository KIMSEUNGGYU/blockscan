import React from 'react';
import qs from 'qs';
import RenderTxsList from './RenderTxsList';

const ReturnTxsList = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const { pn, p } = query;

  return <RenderTxsList pn={pn} p={p} />;
};

export default ReturnTxsList;
