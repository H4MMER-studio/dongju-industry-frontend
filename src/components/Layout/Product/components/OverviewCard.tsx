import React from 'react';
import styled from 'styled-components';

interface Iprops {
  overview: string;
}

const OverviewCardLayout = styled.div`
  width: 100%;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
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
`;

const OverviewCard: React.FC<Iprops> = ({ overview }) => {
  return (
    <OverviewCardLayout>
      <Title>개요</Title>
      <OverviewLayout>{overview}</OverviewLayout>
    </OverviewCardLayout>
  );
};

export default OverviewCard;
