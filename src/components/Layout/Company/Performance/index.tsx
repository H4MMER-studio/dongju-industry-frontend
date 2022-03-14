import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';
import { IconDownArrowSmall, IconSearch, IconDownArrowGray } from '@svg';

const STDContainer = styled.article`
  width: 100%;
  height: 50px;
`;

const STDFilterWrapper = styled.div`
  ${mixins.flexSet('space-between')}
  margin-bottom: 12px;
`;

const STDSearchBox = styled.div`
  ${mixins.flexSet()}
  height: 48px;
  background: white;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 12px;
`;

const STDDeliveryBox = styled.div`
  ${mixins.flexSet()}
  flex: 1;
  padding: 14px 0 14px 16px;
  cursor: pointer;
  font-size: 17px;
  line-height: 20px;
  color: #949494;

  svg {
    width: 9.33px;
    height: 5.33px;
    margin: 0 15.33px;
  }

  > p {
    width: 1px;
    height: 25px;

    background-color: #c8c8c8;
  }
`;

const STDSearchWrapper = styled.div`
  position: relative;
  width: 238px;
  padding: 14px;

  > input {
    width: 185px;
    border: none;
    font-size: 17px;
    line-height: 20px;
    color: #383838;

    &::placeholder {
      color: #c8c8c8;
    }
  }

  svg {
    position: absolute;
    right: 16.74px;
    top: 21px;
    width: 15.59px;
    height: 15.59px;
  }
`;

const STDOrderButton = styled.div`
  ${mixins.flexSet('space-between')}
  width: 120px;
  height: 48px;
  padding: 0 20.67px 0 14px;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  background: white;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #777777;

  svg {
    width: 13.33px;
    height: 6.67px;
  }
`;

const STDTableContainer = styled.div`
  border-top: 1px solid #777777;
  border-bottom: 1px solid #777777;
  background: white;
`;

const STDTitleWrapper = styled.div`
  ${mixins.flexSet('unset')}
  height: 44px;
  border-bottom: 1px solid #c8c8c8;
`;

const STDLongTitle = styled.div`
  flex: 1;
  padding: 12px 12px 12px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

const STDShortTitle = styled.div`
  flex: 0.45;
  max-width: 120px;
  padding: 12px 12px 12px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

const STDContentWrapper = styled.div`
  ${mixins.flexSet('unset')}
  height: 49px;
`;

const STDLongContent = styled.div`
  flex: 1;
  padding: 12px 12px 12px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;

const STDShortContent = styled.div`
  flex: 0.45;
  max-width: 120px;
  padding: 12px 12px 12px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;

const Performance: React.FC = () => {
  return (
    <STDContainer>
      <STDFilterWrapper>
        <STDSearchBox>
          <STDDeliveryBox>
            납품처
            <IconDownArrowSmall />
            <p />
          </STDDeliveryBox>
          <STDSearchWrapper>
            <input placeholder="검색어를 입력하세요." />
            <IconSearch />
          </STDSearchWrapper>
        </STDSearchBox>
        <STDOrderButton>
          최신순
          <IconDownArrowGray />
        </STDOrderButton>
      </STDFilterWrapper>
      <STDTableContainer>
        <STDTitleWrapper>
          <STDLongTitle>납품처</STDLongTitle>
          <STDLongTitle>품명 및 규격</STDLongTitle>
          <STDShortTitle>수량</STDShortTitle>
          <STDShortTitle>날짜</STDShortTitle>
          <STDLongTitle>비고</STDLongTitle>
        </STDTitleWrapper>
        <div>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <STDContentWrapper key={index}>
                <STDLongContent>(주)세진에스.이</STDLongContent>
                <STDLongContent>COOK FAN</STDLongContent>
                <STDShortContent>3</STDShortContent>
                <STDShortContent>2012.2</STDShortContent>
                <STDLongContent>연세대학교</STDLongContent>
              </STDContentWrapper>
            ))}
        </div>
      </STDTableContainer>
    </STDContainer>
  );
};

export default Performance;
