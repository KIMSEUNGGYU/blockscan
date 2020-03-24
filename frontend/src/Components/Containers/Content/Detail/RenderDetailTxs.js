/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import axios from 'axios';
import { translateTimestamp } from '../../../../helper/translate';

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
  font-weight: 500;
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
  border-bottom: 1.5px solid #dae0e5;
  font-size: 18px;
`;

const ContentTextareaItems = styled.div`
  /* height: 40px; */
  width: 97%;
  line-height: 40px;
  padding: 10px;
  display: flex;
  border-bottom: 1.5px solid #dae0e5;
  font-size: 18px;
`;

const ItemTitle = styled.div`
  /* margin-left: 20px; */
  display: flex;
  width: 20%;
`;
const ItemValue = styled.div`
  display: flex;
`;
const ItemTextarea = styled.textarea`
  display: block;
  width: 80%;
  padding: 0.75rem;
  background-color: #f8f9fa !important;
  font-size: 0.8125rem;
  border: 1px solid #d5dae2;
  border-radius: 0.25rem;
`;

const CollapsedDiv = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 10px;
  font-size: 18px;
  border-bottom: 1.5px solid #dae0e5;
`;

const CollapsedButton = styled.button`
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

// SUCCESS DIV
const SuccessDiv = styled.div`
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 7px;
  background-color: ${lighten(0.55, '#00c9a7')};
  color: #00c9a7;
  text-align: center;
  font-weight: 700;
  font-size: 17px;
`;

// FAIL DIV
const FailDiv = styled.div`
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-radius: 7px;
  background-color: ${lighten(0.4, '#de4437')};
  color: #de4437;
  text-align: center;
  font-weight: 700;
  font-size: 17px;
`;

//  BACKGROUND
const BackgroundDiv = styled.div`
  width: 85px;
  height: 30px;
  line-height: 35px;
  border-radius: 7px;
  background-color: ${lighten(0.4, '#77838f')};
  text-align: center;
  font-weight: 600;
  font-size: 17px;
`;
//  BACKGROUND

const BackgroundSpan = styled.span`
  padding: 0 10px;
  border-radius: 7px;
  background-color: ${lighten(0.4, '#77838f')};
  text-align: center;
  font-weight: 600;
  font-size: 17px;
`;

const RenderDetailTxs = ({ match }) => {
  const { txHash } = match.params;
  console.log('txHash', txHash);

  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  const [tx, setTx] = useState({});

  const clickEvent = () => {
    setHidden(!hidden);
  };

  const fetchTx = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://49.50.162.172/api/v1/txs/${txHash}`);
      // console.log(response.data.result);
      const { txInfo } = response.data.result;
      setLoading(false);
      setTx(txInfo);
    } catch (e) {
      // setError(e);
    }
  };

  useEffect(() => {
    fetchTx();
  }, []);

  if (loading) return <div> 로딩 중... </div>;
  if (!tx) return <div> 데이터를 찾을 수 없습니다.</div>;

  const {
    hash,
    status,
    blocksnumber,
    timestamp,
    from,
    to,
    value,
    txfee,
    gasused,
    gaslimit,
    gasprice,
    nonce,
    inputdata,
    index,
  } = tx;

  return (
    <DetailSection>
      <SectionTitle>
        <Title> Transaction Details</Title>
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
            <ItemTitle> Transaction Hash: </ItemTitle>
            <ItemValue>
              <B>{hash}</B>
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Status: </ItemTitle>
            <ItemValue>
              {status ? <SuccessDiv> Success </SuccessDiv> : <FailDiv> Fail </FailDiv>}
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Block: </ItemTitle>
            <ItemValue>
              <A href={`/block/${blocksnumber}`}>{blocksnumber}</A>
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Timestamp: </ItemTitle>
            <ItemValue>{translateTimestamp(timestamp)}</ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> From: </ItemTitle>
            <ItemValue>
              <A href={`https://etherscan.io/address/${from}`}>{from}</A>
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> To: </ItemTitle>
            <ItemValue>
              <A href={`https://etherscan.io/address/${to}`}>{to}</A>
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Value: </ItemTitle>
            <ItemValue>
              <BackgroundSpan>{value} Ether </BackgroundSpan>
            </ItemValue>
          </ContentItems>
          <ContentItems>
            <ItemTitle> Transaction Fee: </ItemTitle>
            <ItemValue>{txfee} Ether </ItemValue>
          </ContentItems>
          {hidden ? (
            <CollapsedDiv>
              <CollapsedButton onClick={clickEvent}>Click to See more ️ &#11015; </CollapsedButton>
            </CollapsedDiv>
          ) : (
            <>
              <ContentItems>
                <ItemTitle> Gas Limit:</ItemTitle>
                <ItemValue>{gaslimit}</ItemValue>
              </ContentItems>
              <ContentItems>
                <ItemTitle> Gas Used by Transaction: </ItemTitle>
                <ItemValue>
                  {gasused} ({(parseFloat(gaslimit) / parseFloat(gasused)).toFixed(2)}%)
                </ItemValue>
              </ContentItems>
              <ContentItems>
                <ItemTitle> Gas Price: </ItemTitle>
                <ItemValue>{gasprice} Ether</ItemValue>
              </ContentItems>
              <ContentItems>
                <ItemTitle>
                  Nonce &nbsp; <BackgroundDiv>Position</BackgroundDiv>
                </ItemTitle>
                <ItemValue>
                  {nonce} &nbsp; <BackgroundSpan>{index}</BackgroundSpan>
                </ItemValue>
              </ContentItems>
              <ContentTextareaItems>
                <ItemTitle> Input Data: </ItemTitle>
                <ItemTextarea value={inputdata} />
              </ContentTextareaItems>
              <CollapsedDiv>
                <CollapsedButton onClick={clickEvent}>Click to See less &#11014; </CollapsedButton>
              </CollapsedDiv>
            </>
          )}

          <ContentItems>
            <ItemTitle> Private Note: </ItemTitle>
            <ItemValue>
              To access the Private Note feature, you must be &nbsp;<A> Logged In</A>
            </ItemValue>
          </ContentItems>
        </ContentItemSection>
      </SectionContents>
      <SectionBottom />
    </DetailSection>
  );
};

export default RenderDetailTxs;
