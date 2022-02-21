import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

interface IProps {
  onClickSetTest(test: string): void;
}

const STDContainer = styled.article`
  ${mixins.flexSet()}
  width: 100%;
  height: calc(100% - 48px);
  margin: 24px;
  border-radius: 20px;
  background: url('/image/main_page/main_company.png') no-repeat center;
  background-size: cover;

  @media (max-width: 1024px) {
    height: 738px;
    margin: 0;
    border-radius: 0;
  }
`;

const STDMainLogoWrapper = styled.div`
  ${mixins.flexSet('center', 'center', 'column')}

  img {
    width: 352px;
    margin-bottom: 24px;
  }

  p {
    font-size: 40px;
    font-weight: bold;
    line-height: 60px;
    color: white;
    text-align: center;
  }
`;

const HomeContainter: React.FC<IProps> = ({ onClickSetTest }) => {
  return (
    <STDContainer>
      <STDMainLogoWrapper>
        <img src="/image/main_page/main_dongju.png" />
        <p>
          정직과 신뢰, 폭 넓은 전문지식으로
          <br />
          고객 만족에 한 발 더 나아가겠습니다.
        </p>
      </STDMainLogoWrapper>
    </STDContainer>
  );
};

export default HomeContainter;
