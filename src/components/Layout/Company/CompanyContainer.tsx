import React from 'react';
import styled, { css } from 'styled-components';
import Welcome from './welcome';
import History from './history';

interface Iprops {
  menu: 'welcome' | 'history' | 'way-to-come';
}

const STDContainer = styled.main`
  padding-top: 48px;
`;

const BannerSection = styled.section`
  width: 1240px;
  height: 200px;
  border-radius: 12px;
  background-color: #fff;
  margin-bottom: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterLayout = styled.div``;

const BreadCrum = styled.div`
  font-weight: 400;
  font-size: 18px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

const CompanyContainer: React.FC<Iprops> = ({ menu }) => {
  const displayTitle = (menu: 'welcome' | 'history' | 'way-to-come') => {
    switch (menu) {
      case 'welcome':
        return '인사말';
      case 'history':
        return '연혁';

      case 'way-to-come':
        return '오시는 길';
      default:
        return '';
    }
  };

  return (
    <STDContainer>
      <BannerSection>
        <CenterLayout>
          <BreadCrum>{`홈/회사/${displayTitle(menu)}`}</BreadCrum>
          <Title>{displayTitle(menu)}</Title>
        </CenterLayout>
      </BannerSection>
      {(() => {
        switch (menu) {
          case 'welcome':
            return <Welcome />;

          case 'history':
            return <History />;

          default:
            return null;
        }
      })()}
    </STDContainer>
  );
};

export default CompanyContainer;
