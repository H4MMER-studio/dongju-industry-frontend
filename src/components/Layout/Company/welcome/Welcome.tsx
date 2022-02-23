import React from 'react';
import styled from 'styled-components';

const WelcomeLayout = styled.main`
  display: flex;
  align-items: center;
`;

const LeftSection = styled.section`
  width: 100%;
  margin-right: 24px;
`;

const RightSection = styled.section`
  width: 100%;
`;

const CardLayout = styled.div`
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 32px;
  color: #2979ff;
`;

const MainText = styled.div``;

const Welcome: React.FC = () => {
  return (
    <WelcomeLayout>
      <LeftSection>
        <CardLayout>
          <Title>안녕하십니까</Title>
          <MainText></MainText>
        </CardLayout>
      </LeftSection>
      <RightSection>
        <CardLayout>
          <Title>고객과 함께하는 성장</Title>
          <MainText></MainText>
        </CardLayout>
      </RightSection>
    </WelcomeLayout>
  );
};

export default Welcome;
