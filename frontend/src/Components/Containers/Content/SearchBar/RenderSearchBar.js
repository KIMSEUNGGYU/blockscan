import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import FilterData from './FilterData';
import Select from 'react-dropdown-select';

const Search = styled.div`
  height: 30%;
  padding: 12px 20px 20px 20px;
  margin: 0px 0px 20px 0px;
  background-image: linear-gradient(to right, #1e83e5, #273ea7);
  border-radius: 0.25rem;
`;

const SearchInner = styled.div``;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.background};
  margin-bottom: 8px;
`;

const SearchBarTitle = styled.h2``;

const QuickLinks = styled.h3`
  font-size: 0.8125rem;
  cursor: pointer;
  border-bottom: 1px dashed ${props => props.theme.subtitle};
  font-size: 70%;
  margin: 5px;
`;

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  font-size: 13px;
`;

const StyledSelect = styled(Select)`
  background-color: ${props => props.theme.background};
  font-size: 14px;
`;

const StyledSearchBox = styled.input`
  width: 84%;
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 12px 16px;
`;

const StyledButton = styled.button`
  width: 6%;
  color: white;
  margin-left: -1px;
  padding: 11px 12px;
  background-color: ${props => props.theme.button};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  z-index: 2;
  user-select: none;
`;

const RenderSearchBar = () => {
  let history = useHistory();
  const [option, setOption] = useState();
  const [text, setText] = useState();

  const onSelect = option => {
    setOption(option);
  };

  const onInput = Text => {
    setText(Text);
  };

  const subMitRouting = () => {
    /* 데모 라우팅 , 백엔드 API 필요함*/
    /*데이터 존재 유무에따라 Not Found 페이지 필요함*/
    const value = option[0].value;

    switch (value) {
      case 'All': {
        if (text.search('0x') === 0) {
          history.push(`/tx/${text}`);
        } else {
          history.push(`/block/${text}`);
        }
        break;
      }
      case 'Transaction': {
        history.push(`/tx/${text}`);
        break;
      }
      case 'Block': {
        history.push(`/block/${text}`);
        break;
      }
      default:
        break;
    }
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
            dropdownGap={0}
            options={FilterData}
            values={[FilterData[0]]}
            onChange={value => {
              onSelect(value);
            }}
          />
          <StyledSearchBox
            placeholder={'Search by Address / Txn Hash / Block / Token / Ens'}
            onChange={e => {
              onInput(e.target.value);
            }}
          />
          <StyledButton onClick={() => subMitRouting()}>Search</StyledButton>
        </SearchBox>
      </SearchInner>
    </Search>
  );
};

export default RenderSearchBar;
