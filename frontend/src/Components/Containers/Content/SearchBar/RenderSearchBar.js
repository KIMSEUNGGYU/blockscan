import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import ReactSearchBox from 'react-search-box';
import FilterData from './FilterData';

const Search = styled.div`
  height: 30%;
  padding: 12px 20px 20px 20px;
  margin: 0px 0px 20px 0px;
  background-image: linear-gradient(to right, #1e83e5, #273ea7);
  border-radius: 0.25rem;
`;

const SearchInner = styled.div`
  /* border: 1px solid black; */
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 8px;
`;

const SearchBarTitle = styled.h2``;

const QuickLinks = styled.h3`
  font-size: 0.8125rem;
  cursor: pointer;
  border-bottom: 1px dashed #97a4af;
  font-size: 70%;
  margin: 5px;
`;

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  z-index: 2;
`;

const StyledSelect = styled(Select)`
  width: 9%;
  height: 100%;
  display: block;
  font-size: 0.8125rem;
`;

const StyledSearchBox = styled.input`
  width: 85%;
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
  z-index: 1;
`;

const StyledButton = styled.button`
  width: 6%;
  color: white;
  margin-left: -1px;
  padding: 11px 12px;
  background-color: #3498db;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  z-index: 2;
  user-select: none;
`;

const RenderSearchBar = () => {
  const [select, setSelect] = useState(FilterData[0]);

  const handleChange = select => {
    setSelect(select);
  };

  return (
    <Search>
      <SearchInner>
        <TitleBox>
          <SearchBarTitle>Ethereum Blockchain Explorer</SearchBarTitle>
          <QuickLinks>Quick links: ERC-20 Quick links</QuickLinks>
        </TitleBox>
        <SearchBox>
          <StyledSelect
            defaultValue={select}
            value={select}
            onChange={handleChange}
            options={FilterData}
          />
          <StyledSearchBox />
          <StyledButton>Search</StyledButton>
        </SearchBox>
      </SearchInner>
    </Search>
  );
};

export default RenderSearchBar;
