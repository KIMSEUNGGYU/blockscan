import React from 'react';
import styled from 'styled-components';
import banner from '../../../Assets/banner.png';

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
const BannerImg = styled.img`
  width: 40%;
`;
const A = styled.a``;

export default () => {
  return (
    <A href='https://www.notion.so/IGMM-BLOCK-EXPLORER-88a81bf42fbc40b2b614724562dde11b'>
      <BannerDiv>
        {/* <BannerBox> */}

        <BannerImg src={banner} />

        {/* </BannerBox> */}
      </BannerDiv>
    </A>
  );
};
