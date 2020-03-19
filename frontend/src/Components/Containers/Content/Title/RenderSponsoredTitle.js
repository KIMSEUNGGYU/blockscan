import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  padding: 20px 0;
`;

const TitleText = styled.ins`
  color: #6c757e;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.8125rem;
  text-decoration: none;
`;

const Link = styled.a`
  color: #3498e1;
`;

const Sponsored = () => {
  return (
    <Title>
      <TitleText>
        Sponsored:
        <Link href={'https://www.notion.so/IGMM-BLOCK-EXPLORER-88a81bf42fbc40b2b614724562dde11b'}>
          Visit IGMM Notion
        </Link>
      </TitleText>
    </Title>
  );
};

export default Sponsored;
