import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import FilterData from './FilterData';
import { InnerWidth } from '../../../../helper/CustomHook';
import Select from 'react-dropdown-select';
import { FaSearch } from 'react-icons/fa';

const Search = styled.div`
  height: 30%;
  padding: 12px 20px 20px 20px;
  margin: 0px 0px 20px 0px;
  background-image: linear-gradient(to right, #1e83e5, #273ea7);
  border-radius: 0.25rem;

  @media only screen and (max-width: 479.98px) {
    /*  */
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    /* 440 - 40 */
  }
  @media only screen and (min-width: 768px) {
    width: 670px;
    /* 710 - 40 */
  }
  @media only screen and (min-width: 1024px) {
    width: 780px;
    /* 820 - 40 */
  }
  @media only screen and (min-width: 1200px) {
    width: 910px;
    /* 940 - 40 */
  }
  @media only screen and (min-width: 1400px) {
    width: 1160px;
    /* 1200 - 40 */
  }
`;

const SearchInner = styled.div``;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.background};
  margin-bottom: 8px;

  @media only screen and (max-width: 479.98px) {
    /*  */
    font-size: 12px;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
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
  .css-15e6jke-DropDown {
    border: none;
  }
  .react-dropdown-select-input {
    display: none;
  }
`;

const StyledSearchBox = styled.input`
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 12px 16px;

  :focus {
    outline: none;
  }
  @media only screen and (max-width: 479.98px) {
    width: 85%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    width: 85%;
  }
  @media only screen and (min-width: 768px) {
    width: 663px;
    font-size: 12px;
    /* 780 85% */
  }
  @media only screen and (min-width: 1024px) {
    width: 697px;
    /* 820 85% */
  }
  @media only screen and (min-width: 1200px) {
    width: 741.5px;
    /* 910 의 85퍼 */
  }
  @media only screen and (min-width: 1400px) {
    /*  */
    width: 986px;
    /* 1160 의 85퍼 */
  }
`;

const StyledButton = styled.button`
  color: white;
  margin-left: -1px;
  background-color: ${props => props.theme.button};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  :focus {
    outline: none;
  }

  @media only screen and (max-width: 479.98px) {
    /*  */
    width: 15%;
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    /*  */
    width: 15%;
  }
  @media only screen and (min-width: 768px) {
    width: 39px;
    /* 780 의 5퍼 */
  }
  @media only screen and (min-width: 1024px) {
    width: 41px;
    /* 820 의 5퍼  */
  }
  @media only screen and (min-width: 1200px) {
    width: 45.5px;
    font-size: 10px;
    /* 1024 이하부터 아이콘으로 대체 */
    /* 910 의 5퍼 */
  }
  @media only screen and (min-width: 1400px) {
    /* 1160 의 5퍼  */
    width: 58px;
    font-size: 14px;
  }
`;

const RenderSearchBar = () => {
  const width = InnerWidth();

  let history = useHistory();
  const [option, setOption] = useState([FilterData[0]]);
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
    //  수정 필요
    const value = option[0].value;

    if (text !== undefined) {
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
    } else {
      // 404 page
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
            style={
              // 10퍼
              //원하는폭에서 -12
              width >= 1400
                ? { width: 104, fonrSize: 14 }
                : width >= 1200
                ? { width: 79, fontSize: 10 }
                : width >= 1024
                ? { width: 70, fontSize: 10 }
                : width >= 768
                ? { width: 66, fontSize: 10 }
                : { display: 'none' }
            }
          />
          <StyledSearchBox
            placeholder={'Search by Address / Txn Hash / Block / Token / Ens'}
            onChange={e => {
              onInput(e.target.value);
            }}
          />
          <StyledButton
            onClick={() => {
              subMitRouting();
            }}>
            {width <= 1200 ? <FaSearch size='15px' /> : 'Search'}
          </StyledButton>
        </SearchBox>
      </SearchInner>
    </Search>
  );
};

export default RenderSearchBar;
