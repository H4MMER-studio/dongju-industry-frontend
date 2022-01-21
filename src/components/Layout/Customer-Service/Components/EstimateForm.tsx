import React from 'react';
import styled from 'styled-components';
import { Icon } from 'public/image';

const EstimateForm: React.FC = () => {
  return (
    <EstimateFormLayout>
      <Header>
        <Title>고객문의</Title>
        <Icon.CloseIcon />
      </Header>
    </EstimateFormLayout>
  );
};

export default EstimateForm;

const EstimateFormLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
