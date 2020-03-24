import React from 'react';
import qs from 'qs';
import RenderBlockList from './RenderBlocksList';

const ReturnBlocksList = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const { pn, p } = query;

  return <RenderBlockList pn={pn} p={p} />;
};

export default ReturnBlocksList;
