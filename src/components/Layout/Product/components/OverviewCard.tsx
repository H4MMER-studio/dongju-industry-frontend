import React from 'react';
import styled from 'styled-components';

interface Iprops {
  title?: string;
  overview: string | React.ReactNode;
  marginBottom?: number;
  isSelected: boolean;
}

const OverviewCardLayout = styled.div<{
  marginBottom?: number;
  isSelected: boolean;
}>`
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  width: 100%;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.isSelected && '0px 0px 12px 4px rgba(41, 121, 255, 0.12)'};
`;

const Title = styled.div`
  color: #2979ff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const OverviewLayout = styled.div`
  line-height: 32px;
  color: #383838;
  font-size: 19px;
  white-space: pre-line;

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  img {
    width: 100%;
    margin-top: 12px;
    background-color: #f8f8f8;
  }
`;

const OverviewCard: React.FC<Iprops> = ({
  title,
  overview,
  marginBottom,
  isSelected,
}) => {
  return (
    <OverviewCardLayout marginBottom={marginBottom} isSelected={isSelected}>
      <Title>{title ?? '개요'}</Title>
      <OverviewLayout>{overview}</OverviewLayout>
    </OverviewCardLayout>
  );
};

export default OverviewCard;
