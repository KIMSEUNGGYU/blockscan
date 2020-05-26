import React from 'react';
import RenderList from './RenderList';

const ReturnList = ({ location }) => {
  const path = location.pathname.split('/')[1];

  return <RenderList location={location} path={path} />;
};

export default ReturnList;
