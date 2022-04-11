import styled from 'styled-components';
import { mixins } from '@/styles';

export const Container = styled.article`
  width: 100%;
`;

export const FilterWrapper = styled.div`
  ${mixins.flexSet('space-between')}
  margin-bottom: 12px;

  @media (max-width: 1024px) {
    ${mixins.flexSet('center', 'flex-end', 'column')}
  }
`;

export const SearchBox = styled.div`
  ${mixins.flexSet('flex-start')}
  position: relative;
  height: 48px;
  background: white;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 12px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const DeliveryBox = styled.div`
  ${mixins.flexSet('space-between')}
  width: 101px;
  padding: 14px 0 14px 16px;
  cursor: pointer;
  font-size: 17px;
  line-height: 20px;
  color: #949494;

  div {
    ${mixins.flexSet()}

    svg {
      width: 9.33px;
      height: 5.33px;
      margin-right: 15.33px;
    }

    > p {
      width: 1px;
      height: 25px;
      background-color: #c8c8c8;
    }
  }
`;

export const SearchWrapper = styled.div`
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
    top: 15px;
    width: 15.59px;
    height: 15.59px;
  }
`;

export const OrderButton = styled.div`
  ${mixins.flexSet('space-between')}
  position: relative;
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
  cursor: pointer;

  svg {
    width: 13.33px;
    height: 6.67px;
  }

  @media (max-width: 1024px) {
    width: auto;
    padding: 0 12px;
    background: none;
    border: none;

    svg {
      width: 13.33px;
      height: 6.67px;
      margin-left: 11.33px;
    }
  }
`;

export const TableContainer = styled.div`
  border-top: 1px solid #777777;
  border-bottom: 1px solid #777777;
  background: white;
`;

export const TitleWrapper = styled.div`
  ${mixins.flexSet('unset')}
  height: 44px;
  border-bottom: 1px solid #c8c8c8;
`;

export const LongTitle = styled.div`
  flex: 1;
  padding: 12px 12px 12px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

export const ShortTitle = styled.div`
  flex: 0.45;
  max-width: 120px;
  padding: 12px 12px 12px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

export const ContentWrapper = styled.div`
  ${mixins.flexSet('unset')}
  height: 49px;

  @media (max-width: 1024px) {
    height: auto;
  }
`;

export const LongContent = styled.div`
  flex: 1;
  padding: 12px 12px 12px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;

export const ShortContent = styled.div`
  flex: 0.45;
  max-width: 120px;
  padding: 12px 12px 12px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
`;

export const DeliverySelectBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  min-width: 100px;
  padding: 18px 22px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
`;

export const DeliverySelectText = styled.p<{ isSelected?: boolean }>`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${({ isSelected }) => (isSelected ? '#383838' : '#949494')};
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DeliverySearchTextBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  padding: 18px 22px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
`;

export const DeliverySearchText = styled.p`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SelectOrderBox = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  padding: 18px 22px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;

  @media (max-width: 1024px) {
    padding: 18px 16px;
  }
`;
