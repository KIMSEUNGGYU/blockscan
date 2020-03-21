/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import axios from 'axios';
import hexToString from '../../../../helper/translate';

const DetailSection = styled.div`
  width: 100%;
  height: 100%;
`;

// SECTION TITLE
const SectionTitle = styled.div`
  height: 80px;
  line-height: 80px;
  background-color: #f8f9fa;
  display: flex;
  border-bottom: 2px solid ${darken(0.1, '#f8f9fa')};
`;

const Title = styled.h1`
  font-size: 30px;
`;

const SubTitle = styled.p`
  margin-left: 15px;
  font-size: 23px;
  color: #77838f;
`;

// SECTION OPTION
const SectionOptions = styled.div`
  height: 80px;
  line-height: 80px;
  font-size: 19px;
  color: #77838f;
`;

const B = styled.b`
  font-weight: bold;
`;

const A = styled.a`
  color: #3498db;
  font-weight: 900;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${darken(0.1, '#3498db')};
  }
`;

// SECTION CONTENTS
const SectionContents = styled.div`
  /* height: 800px; */
  background-color: #fff;
  /* margin-bottom: 100px; */
  border: 1px solid ${darken(0.1, '#f8f9fa')};
`;

const ContentTitle = styled.div`
  border-bottom: 2px solid ${darken(0.1, '#f8f9fa')};
  font-size: 20px;
  font-weight: 700;
  /* color: #4a4f55;  */ /*default color*/
  color: #3498db;
  display: flex;
`;

const ContentLi = styled.li`
  margin-left: 0;
  padding: 20px;
  list-style: none;
  border-bottom-color: #3498db;
  border-bottom: 3px solid #3498db;
  &:hover {
    cursor: pointer;
  }
`;

const ContentItemSection = styled.div`
  margin-left: 1%;
  /* width: 100%; */
`;

const ContentItems = styled.div`
  height: 40px;
  width: 97%;
  line-height: 40px;
  padding: 10px;
  display: flex;
  border-bottom: 2px solid #dae0e5;
  font-size: 18px;
`;
const ItemTitle = styled.div`
  /* margin-left: 20px; */
  width: 20%;
`;
const ItemValue = styled.div`
  display: flex;
`;

const TransactionDiv = styled.div`
  border-radius: 7px;
  height: 90%;
  padding: 0 10px;
  font-size: 17px;
  background-color: ${lighten(0.42, '#3498db')};
`;

const ValueA = styled.a`
  color: #3498db;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${darken(0.1, '#3498db')};
  }
`;

const CollapsedDiv = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 10px;
  font-size: 18px;
`;

const CollapsedButton = styled.button`
  /* margin-left: 20px; */
  color: #3498db;
  outline: 0;
  border: 0;
  &:hover {
    cursor: pointer;
    color: ${darken(0.1, '#3498db')};
  }
`;

// SECTION BOTTOM
const SectionBottom = styled.div`
  height: 80px;
`;

const RenderDetail = ({ match }) => {
  const { blockNumber } = match.params;
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  const [block, setBlock] = useState({});

  const clickEvent = () => {
    setHidden(!hidden);
  };

  const fetchBlock = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://49.50.162.172/api/v1/block/${blockNumber}`);
      const { block } = response.data.result;
      setLoading(false);
      setBlock(block);
    } catch (e) {
      // setError(e);
    }
  };

  useEffect(() => {
    fetchBlock();
  }, []);

  if (loading) return <div> 로딩 중... </div>;
  if (!block) return <div> 데이터를 찾을 수 없습니다.</div>;

  const {
    number,
    timestamp,
    transactions,
    miner,
    blockReward,
    unclesReward,
    difficulty,
    totalDifficulty,
    size,
    gasUsed,
    gasLimit,
    extraData,
    hash,
    parentHash,
    sha3Uncles,
    nonce,
    gasUsedPercent,
    blockRewardUncles,
  } = block;

  return (
    <DetailSection>
      <SectionTitle>
        <Title> Block </Title>
        <SubTitle> #{number}</SubTitle>
      </SectionTitle>
      <SectionOptions>
        💡 <B>Feature Tip</B>: Browse all your{' '}
        <A href='https://etherscan.io/dapp'>favourite Dapps here</A> on Blockscan! 😍
      </SectionOptions>
      <SectionContents>
        <ContentTitle>
          <ContentLi>Overview</ContentLi>
        </ContentTitle>
        <ContentItemSection>
          <ContentItems>
            <ItemTitle> Block Height:</ItemTitle>
            <ItemValue>
              <B>{number}</B> &nbsp;&nbsp;&nbsp;
              <TransactionDiv>
                <A href={`/block/${number - 1}`}>&lt;</A>
              </TransactionDiv>
              &nbsp;
              <TransactionDiv>
                <A href={`/block/${number + 1}`}>&gt;</A>
              </TransactionDiv>
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Timestamp: </ItemTitle>
            <ItemValue> {timestamp}</ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Transactions: </ItemTitle>
            <ItemValue>
              <TransactionDiv>
                <A href='#'>{transactions} transactions</A>
              </TransactionDiv>
              &nbsp; in this block
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Mined by: </ItemTitle>
            <ItemValue>
              <ValueA href={`https://etherscan.io/address/${miner}`}>{miner}</ValueA>
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Block Reward: </ItemTitle>
            <ItemValue>
              {blockReward} Ether (2 + {blockReward - 2 - blockRewardUncles}
              {blockRewardUncles ? `+ ${blockRewardUncles}` : null})
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Uncles Reward:</ItemTitle>
            <ItemValue> {unclesReward === '0x0' ? 0 : unclesReward} </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Difficulty:</ItemTitle>
            <ItemValue> {difficulty} </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Total Difficulty: </ItemTitle>
            <ItemValue> {totalDifficulty}</ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Size: </ItemTitle>
            <ItemValue> {size} bytes </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Gas Used </ItemTitle>
            <ItemValue>
              {' '}
              {gasUsed} ({gasUsedPercent}){' '}
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Gas Limit: </ItemTitle>
            <ItemValue> {gasLimit} </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Extra Data: </ItemTitle>
            <ItemValue>
              {extraData ? hexToString(extraData) : null} (Hex:{extraData})
            </ItemValue>
          </ContentItems>
          {hidden ? (
            <CollapsedDiv>
              <CollapsedButton onClick={clickEvent}>Click to See more ️ &#11015; </CollapsedButton>
            </CollapsedDiv>
          ) : (
            <>
              <ContentItems>
                <ItemTitle> Hash: </ItemTitle>
                <ItemValue>{hash}</ItemValue>
              </ContentItems>
              <ContentItems>
                <ItemTitle> Parent Hash: </ItemTitle>
                <ItemValue>
                  <ValueA href='#'>{parentHash}</ValueA>
                </ItemValue>
              </ContentItems>
              <ContentItems>
                <ItemTitle> Sha3Uncles: </ItemTitle>
                <ItemValue>{sha3Uncles}</ItemValue>
              </ContentItems>
              <ContentItems>
                <ItemTitle> Nonce: </ItemTitle>
                <ItemValue>{nonce}</ItemValue>
              </ContentItems>
              <CollapsedDiv>
                <CollapsedButton onClick={clickEvent}>Click to See less &#11014; </CollapsedButton>
              </CollapsedDiv>
            </>
          )}
        </ContentItemSection>
      </SectionContents>

      <SectionBottom />
    </DetailSection>
  );
};

export default RenderDetail;
