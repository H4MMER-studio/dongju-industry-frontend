import { mixins } from '@/styles';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  marginBottom?: number;
  title: string;
  list: {
    subTitle: string;
    description: React.ReactNode | string;
  }[];
  isSelected: boolean;
}

const STDContainer = styled.div<{ marginBottom?: number }>`
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 36}px;

  h2 {
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 700;
    color: #2979ff;
  }
`;

const STDTableWrapper = styled.div<{ isSelected: boolean }>`
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.isSelected && '0px 0px 12px 4px rgba(41, 121, 255, 0.12)'};
`;

const STDTableOneLine = styled.div`
  ${mixins.flexSet('flex-start', 'stretch')}
  border-bottom: 1px solid #DFDFDF;
  height: 100%;

  &:last-child {
    border: none;
  }

  > h3 {
    ${mixins.flexSet()}
    flex-shrink: 0;
    width: 78px;
    font-size: 17px;
    background-color: #c8c8c8;
  }
`;

const STDTableDescription = styled.div`
  padding: 8px 16px;
  line-height: 32px;
  font-size: 19px;

  @media (max-width: 1024px) {
    align-items: stretch;
    height: auto;
    font-size: 17px;
  }

  li {
    list-style: disc;
    margin-left: 25px;
  }
`;

const AirConditionerInfoBox: React.FC<IProps> = ({
  title,
  list,
  marginBottom,
  isSelected,
}) => {
  return (
    <STDContainer marginBottom={marginBottom}>
      <h2>{title}</h2>
      <STDTableWrapper isSelected={isSelected}>
        {list.map(({ subTitle, description }) => (
          <STDTableOneLine key={subTitle}>
            <h3>{subTitle}</h3>
            <STDTableDescription>{description}</STDTableDescription>
          </STDTableOneLine>
        ))}
      </STDTableWrapper>
    </STDContainer>
  );
};

export default AirConditionerInfoBox;
