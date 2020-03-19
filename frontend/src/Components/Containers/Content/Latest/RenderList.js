import React from 'react';
import styled from 'styled-components';
import BlockItem from './BlockItems';

const StyledDiv = styled.div`
  font-size: 0.8125rem;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
`;

const StyledListInner = styled.div`
  background-color: white;
  align-items: center;
  box-shadow: 0 0.5rem 1.2rem rgba(189, 197, 209, 0.2);
`;

const StyledTitleBox = styled.div`
  padding: 12px;
  border-bottom: 1px solid #e7eaf3;
`;

const StyledListBox = styled.div`
  padding: 12px 12px 0px 12px;
  display: flex;
`;

const StyledSrollBarBox = styled.div`
  height: 324px;
  padding-right: 10px;
  overflow: auto;
  float: right;
  /* 스크롤바 */
  &::-webkit-scrollbar {
    background-color: white;
    width: 1%;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
  }
`;

const ViewAllDiv = styled.div`
  padding: 12px;
  border-top: 1px solid #e7eaf3;
  display: flex;
`;

const ViewAllButton = styled.button`
  width: 100%;
  padding: 4.8px 9.6px;
  border: none;
  background-color: #eaf4fb;
  color: #3498db;
`;
// 스크롤 끝을 감지
// const handleScroll = e => {
//   const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
//   if (bottom) {
//     console.log('asdfa');
//   }
// };
// <StyledSrollBarBox onScroll={handleScroll}>

const ReturnList = () => {
  return (
    <StyledDiv>
      <StyledListInner>
        <StyledTitleBox>Latest Blocks</StyledTitleBox>
        <StyledListBox>
          <StyledSrollBarBox>
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
          </StyledSrollBarBox>
        </StyledListBox>
        <ViewAllDiv>
          <ViewAllButton>View all blocks</ViewAllButton>
        </ViewAllDiv>
      </StyledListInner>
      <StyledListInner>
        <StyledTitleBox>Latest Transactions</StyledTitleBox>
        <StyledListBox>
          <StyledSrollBarBox>
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
            <BlockItem />
          </StyledSrollBarBox>
        </StyledListBox>
        <ViewAllDiv>
          <ViewAllButton>View all transactions</ViewAllButton>
        </ViewAllDiv>
      </StyledListInner>
    </StyledDiv>
  );
};

export default ReturnList;
