import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Title = styled.div`
  padding: 20px 0px;
`;

const TitleText = styled.ins`
  color: ${props => props.theme.draksubtitle};
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.8125rem;
  text-decoration: none;
`;

const Link = styled.a`
  color: ${props => darken(0.1, props.theme.button)};
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
