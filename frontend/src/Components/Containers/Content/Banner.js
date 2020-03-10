import React from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`
  height: 76.5px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  margin: 0 0 20px;
`;

const BannerBox = styled.div`
  width: 967px;
  height: 100%;
  border: 1px solid black;
  background-color: white;
`;

export default () => {
  return (
    <BannerDiv>
      <BannerBox />
    </BannerDiv>
  );
};
