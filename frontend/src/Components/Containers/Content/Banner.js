import React from 'react';
import styled from 'styled-components';
import Banner from '../../../Assets/banner.png';

const BannerDiv = styled.div`
  height: 76.5px;
  display: flex;
  justify-content: center;
  margin: 0 0 20px;
  /* border: 1px solid black; */
`;

const BannerBox = styled.div`
  width: 75%;
  border-radius: 0.25rem;
  background-image: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* border: 1px solid black; */
`;

export default () => {
  return (
    <BannerDiv>
      <BannerBox url={Banner} />
    </BannerDiv>
  );
};
