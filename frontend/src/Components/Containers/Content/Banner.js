import React from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`
  height: 76.5px;
  display: flex;
  justify-content: center;
  margin: 0 0 20px;
`;

const BannerBox = styled.div`
  width: 967px;
  border: 1px solid black;
  border-radius: 0.25rem;
  background-color: white;
`;

export default () => {
  return (
    <BannerDiv>
      <BannerBox />
    </BannerDiv>
  );
};
