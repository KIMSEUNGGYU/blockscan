import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { GetTime } from '../../../../Action/Time';
import { GetInfo } from '../../../../Action/api/Get';
import { hexToString, DetailTimeToText, TranslateDetailText } from '../../../../helper/translate';
import { DETAILBLOCK, DETAILTX, VIEWTIME } from '../../../../Action/ActionTypes';

const DetailSection = styled.div`
  width: 100%;
  height: 100%;
`;

const SectionTitle = styled.div`
  height: 10%;
  margin: 20px 0;
  display: flex;
`;

const PageTitle = styled.h1`
  font-size: 19px;
`;

const SubTitle = styled.p`
  margin-left: 15px;
  font-size: 15px;
  color: ${props => props.theme.draksubtitle};
`;

const SectionOptions = styled.div`
  display: block;
  height: 5%;
  margin: 20px 0;
  line-height: 25px;
  font-size: 14px;
  color: ${props => props.theme.draksubtitle};
`;

const ItemBold = styled.b`
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.button};
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
`;

const SectionContents = styled.div`
  width: 100%;
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => darken(0.1, props.theme.subtitle)};
  font-size: 15px;
`;

const ContentTitle = styled.div`
  border-bottom: 2px solid ${props => darken(0.1, props.theme.subtitle)};
  font-weight: 700;
  color: ${props => props.theme.button};
  display: flex;
`;

const ContentLi = styled.li`
  margin-left: 0;
  padding: 20px;
  list-style: none;
  border-bottom-color: ${props => props.theme.button};
  border-bottom: 3px solid ${props => props.theme.button};
  &:hover {
    cursor: pointer;
  }
`;

const ContentItemSection = styled.div`
  width: 99%;
  margin-left: 1%;
`;

const ContentItems = styled.div`
  width: 97%;
  padding: 10px;
  display: flex;
  border-bottom: 2px solid ${props => props.theme.line};
  font-size: 14px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: none;
  }
`;
const ItemTitle = styled.div`
  /* width: 20%; */
  @media only screen and (max-width: 767px) {
    /* flex-direction: column; */
    width: 100%;
    height: fit-content;
    margin: 5px 0px;
  }

  @media only screen and (min-width: 768px) {
    /* flex-direction: none; */
    width: 20%;
    display: flex;
    align-items: center;
  }
`;
const ItemValue = styled.div`
  width: 100%;
  display: flex;
  overflow-wrap: anywhere;
  height: fit-content;
  margin: 10px 0px;
`;

const StatusDiv = styled.div`
  background-color: ${props => (props.Success ? props.theme.success : props.theme.fail)};
  color: ${props => (props.Success ? props.theme.successtext : props.theme.failtext)};
  border-radius: 0.25px;
  padding: 0px 11px;
  .IconColor {
    color: ${props => (props.Success ? props.theme.successtext : props.theme.failtext)};
  }
`;

const StatusInner = styled.div`
  font-size: 14px;
  padding: 10px 0px;
`;

const ValueDiv = styled.div`
  display: flex;
  background-color: ${props => props.theme.etherbackgroundcolor};
  border-radius: 5px;
  padding: 0 8px;
`;

const ValueInner = styled.div`
  font-size: 14px;
  padding: 10px 0px;
`;

const StatusDiv = styled.div`
  background-color: ${props => (props.Success ? props.theme.success : props.theme.fail)};
  color: ${props => (props.Success ? props.theme.successtext : props.theme.failtext)};
  border-radius: 0.25px;
  padding: 0px 11px;
  .IconColor {
    color: ${props => (props.Success ? props.theme.successtext : props.theme.failtext)};
  }
`;

const StatusInner = styled.div`
  font-size: 14px;
`;

const ValueDiv = styled.div`
  display: flex;
  background-color: ${props => props.theme.etherbackgroundcolor};
  border-radius: 5px;
  padding: 0 8px;
`;

const ValueInner = styled.div`
  font-size: 14px;
`;

const TransactionDiv = styled.div`
  border-radius: 7px;
  height: 90%;
  padding: 10px 10px;
  font-size: 17px;
  background-color: ${props => lighten(0.42, props.theme.button)};
  &:hover {
    background-color: ${props => darken(0.1, props.theme.button)};
    .button {
      color: ${props => props.theme.background};
    }
  }
`;

const ValueA = styled.a`
  color: #3498db;
  text-decoration: none;
`;

const InputArea = styled.textarea`
  overflow: auto;
  min-height: 40px;
`;

const CollapsedDiv = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 10px;
  font-size: 18px;
`;

const CollapsedButton = styled.button`
  color: ${props => props.theme.button};
  outline: 0;
  border: 0;
  &:hover {
    cursor: pointer;
    color: ${props => darken(0.1, props.theme.button)};
  }
`;

const SectionBottom = styled.div`
  height: 80px;
`;

const RenderDetail = ({ match }) => {
  const path = match.path.split('/')[1];
  const Title = TranslateDetailText(path);
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const clickEvent = () => {
    setHidden(!hidden);
  };

  const GetDatas = useCallback(async () => {
    let Data;
    if (path === 'block') {
      const { blockNumber } = match.params;
      Data = await GetInfo(DETAILBLOCK, blockNumber);
    } else if (path === 'tx') {
      const { txHash } = match.params;
      Data = await GetInfo(DETAILTX, txHash);
    }
    setData(Data);
    setLoading(false);
  }, [path, match.params]);

  useEffect(() => {
    GetDatas();
    return () => {};
  }, [GetDatas]);

  return (
    <>
      {loading && '로딩 중'}
      {!loading && data && Title && (
        <>
          <DetailSection>
            <SectionTitle>
              <PageTitle> {path === 'block' ? 'Block' : 'Transaction Details'}</PageTitle>
              {path === 'block' ? <SubTitle> #{data.number}</SubTitle> : null}
            </SectionTitle>
            <SectionOptions>
              <span role='img' aria-label='light'>
                💡
              </span>
              <ItemBold>Feature Tip</ItemBold>: Browse all your{' '}
              <ValueA href='https://etherscan.io/dapp'>favourite Dapps here</ValueA> on Blockscan!
              😍
            </SectionOptions>
            <SectionContents>
              <ContentTitle>
                <ContentLi>Overview</ContentLi>
              </ContentTitle>
              <ContentItemSection>
                <ContentItems>
                  <ItemTitle>{Title[0]}</ItemTitle>
                  {path === 'block' ? (
                    <ItemValue>
                      <ItemBold>{data.number}</ItemBold> &nbsp;&nbsp;&nbsp;
                      <TransactionDiv>
                        <StyledLink to={`/block/${data.number - 1}`} className='button'>
                          &lt;
                        </StyledLink>
                      </TransactionDiv>
                      &nbsp;
                      <TransactionDiv>
                        <StyledLink to={`/block/${data.number + 1}`} className='button'>
                          &gt;
                        </StyledLink>
                      </TransactionDiv>
                    </ItemValue>
                  ) : (
                    <ItemValue>
                      <ItemBold>{data.hash}</ItemBold>
                    </ItemValue>
                  )}
                </ContentItems>
                <ContentItems>
                  <ItemTitle> {Title[1]} </ItemTitle>
                  <ItemValue>
                    {path === 'block' ? (
                      DetailTimeToText(GetTime(data.timestamp, VIEWTIME), 'long')
                    ) : data.status === 1 ? (
                      <StatusDiv Success>
                        <StatusInner>
                          <FaCheckCircle className='IconColor' /> Success
                        </StatusInner>
                      </StatusDiv>
                    ) : (
                      <StatusDiv>
                        <StatusInner>
                          <FaTimesCircle className='IconColor' /> Fail
                        </StatusInner>
                      </StatusDiv>
                    )}
                  </ItemValue>
                </ContentItems>
                <ContentItems>
                  <ItemTitle>{Title[2]}</ItemTitle>
                  {path === 'block' ? (
                    <ItemValue>
                      <TransactionDiv>
                        <ValueA href='#' className='button'>
                          {data.transactions} transactions
                        </ValueA>
                      </TransactionDiv>
                      &nbsp; in this block
                    </ItemValue>
                  ) : (
                    <ItemValue>
                      <StyledLink to={`/block/${data.blocksnumber}`}>
                        {data.blocksnumber}
                      </StyledLink>
                    </ItemValue>
                  )}
                </ContentItems>
                <ContentItems>
                  <ItemTitle> {Title[3]}</ItemTitle>
                  {path === 'block' ? (
                    <ItemValue>
                      <ValueA href={`https://etherscan.io/address/${data.miner}`}>
                        {data.miner}
                      </ValueA>
                    </ItemValue>
                  ) : (
                    <ItemValue>
                      {(DetailTimeToText(GetTime(data.timestamp, VIEWTIME)), 'long')}
                    </ItemValue>
                  )}
                </ContentItems>
                <ContentItems>
                  <ItemTitle>{Title[4]}</ItemTitle>
                  {path === 'block' ? (
                    <ItemValue>
                      {data.blockReward} Ether (2 +{data.blockReward - 2 - data.blockRewardUncles}
                      {data.blockRewardUncles ? `+ ${data.blockRewardUncles}` : null})
                    </ItemValue>
                  ) : (
                    <ItemValue>
                      <ValueA href={`https://etherscan.io/address/${data.from}`}>
                        {data.from}
                      </ValueA>
                    </ItemValue>
                  )}
                </ContentItems>
                <ContentItems>
                  <ItemTitle>{Title[5]}</ItemTitle>
                  {path === 'block' ? (
                    <ItemValue> {data.unclesReward === '0x0' ? 0 : data.unclesReward} </ItemValue>
                  ) : (
                    <ItemValue>
                      <ValueA href={`https://etherscan.io/address/${data.to}`}>{data.to}</ValueA>
                    </ItemValue>
                  )}
                </ContentItems>
                <ContentItems>
                  <ItemTitle>{Title[6]}</ItemTitle>
                  {path === 'block' ? (
                    <ItemValue> {data.difficulty}</ItemValue>
                  ) : (
                    <ItemValue>
                      <ValueDiv>
                        <ValueInner>{data.value} Ether</ValueInner>
                      </ValueDiv>
                    </ItemValue>
                  )}
                </ContentItems>
                <ContentItems>
                  <ItemTitle>{Title[7]}</ItemTitle>
                  {path === 'block' ? (
                    <ItemValue> {data.totalDifficulty}</ItemValue>
                  ) : (
                    <ItemValue>{data.txfee} Ether</ItemValue>
                  )}
                </ContentItems>
                {path === 'block' ? (
                  <ContentItems>
                    <ItemTitle>{Title[8]}</ItemTitle>
                    <ItemValue> {data.size} bytes </ItemValue>
                  </ContentItems>
                ) : hidden ? (
                  <CollapsedDiv>
                    <CollapsedButton onClick={clickEvent}>
                      Click to See more ️ &#11015;{' '}
                    </CollapsedButton>
                  </CollapsedDiv>
                ) : (
                  <>
                    <ContentItems>
                      <ItemTitle>{Title[8]}</ItemTitle>
                      <ItemValue>{data.gaslimit}</ItemValue>
                    </ContentItems>
                    <ContentItems>
                      <ItemTitle>{Title[9]}</ItemTitle>
                      <ItemValue>{data.gasused}</ItemValue>
                    </ContentItems>
                    <ContentItems>
                      <ItemTitle>{Title[10]}</ItemTitle>
                      <ItemValue>{data.gasprice}</ItemValue>
                    </ContentItems>
                    <ContentItems>
                      <ItemTitle>{Title[11]}</ItemTitle>
                      <ItemValue>{data.nonce}</ItemValue>
                    </ContentItems>
                    <ContentItems style={{ height: 'fit-content' }}>
                      <ItemTitle>{Title[12]}</ItemTitle>
                      <InputArea row='10' cols='100' defaultValue={data.inputdata}></InputArea>
                    </ContentItems>
                    <CollapsedDiv>
                      <CollapsedButton onClick={clickEvent}>
                        Click to See less ️ &#11014;{' '}
                      </CollapsedButton>
                    </CollapsedDiv>
                  </>
                )}
                {path === 'block' ? (
                  <>
                    <ContentItems>
                      <ItemTitle>{Title[9]}</ItemTitle>
                      <ItemValue>
                        {data.gasUsed} ({data.gasUsedPercent})
                      </ItemValue>
                    </ContentItems>
                    <ContentItems>
                      <ItemTitle>{Title[10]}</ItemTitle>
                      <ItemValue>{data.gasLimit}</ItemValue>
                    </ContentItems>
                  </>
                ) : null}
                {path === 'block' && hidden ? (
                  <CollapsedDiv>
                    <CollapsedButton onClick={clickEvent}>
                      Click to See more ️ &#11015;{' '}
                    </CollapsedButton>
                  </CollapsedDiv>
                ) : path === 'block' ? (
                  <>
                    <ContentItems>
                      <ItemTitle> {Title[11]} </ItemTitle>
                      <ItemValue>
                        {data.extraData ? hexToString(data.extraData) : null}(Hex:{data.extraData})
                      </ItemValue>
                    </ContentItems>
                    <ContentItems>
                      <ItemTitle> {Title[12]} </ItemTitle>
                      <ItemValue>{data.hash}</ItemValue>
                    </ContentItems>
                    <ContentItems>
                      <ItemTitle> {Title[13]} </ItemTitle>
                      <ItemValue>
                        <ValueA href={'#'}>{data.parentHash}</ValueA>
                      </ItemValue>
                    </ContentItems>
                    <ContentItems>
                      <ItemTitle> {Title[14]} </ItemTitle>
                      <ItemValue>{data.sha3Uncles}</ItemValue>
                    </ContentItems>
                    <ContentItems>
                      <ItemTitle> {Title[15]} </ItemTitle>
                      <ItemValue>{data.nonce}</ItemValue>
                    </ContentItems>
                    <CollapsedDiv>
                      <CollapsedButton onClick={clickEvent}>
                        Click to See less ️ &#11014;{' '}
                      </CollapsedButton>
                    </CollapsedDiv>
                  </>
                ) : null}
              </ContentItemSection>
            </SectionContents>
            <SectionBottom />
          </DetailSection>
        </>
      )}
    </>
  );
};

export default RenderDetail;
