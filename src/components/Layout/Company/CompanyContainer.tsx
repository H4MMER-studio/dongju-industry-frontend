import React from 'react';
import styled, { css } from 'styled-components';
import Welcome from './welcome';
import History from './history';
import WayToCome from './way-to-come';
import { Images } from 'public/image';
import useResize from '@/hooks/useResize';

interface Iprops {
  menu: 'welcome' | 'history' | 'way-to-come';
}

const STDContainer = styled.main`
  padding-top: 48px;
  margin: 0 auto;
  width: 1240px;

  @media (max-width: 1682px) {
    width: 974px;
  }

  @media (max-width: 1023px) {
    width: 100%;
    padding: 48px 16px 64px 16px;
  }
`;

const BannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  background-color: #fff;
  margin-bottom: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    width: 100%;
    height: 120px;
    padding: 0px 17px 0 15px;
  }
`;

const CenterLayout = styled.div`
  position: relative;
  z-index: 2;
`;

const BannerImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: contain;
`;

const BreadCrum = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  text-align: center;

  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  text-align: center;

  @media (max-width: 1023px) {
    font-size: 32px;
  }
`;

const CompanyContainer: React.FC<Iprops> = ({ menu }) => {
  const { width } = useResize();

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
        <BannerImage
          src={
            width > 1023
              ? Images.CompanyInfoBannerLarge
              : Images.CompanyInfoBannerSmall
          }
        />
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

          case 'way-to-come':
            return <WayToCome />;

          default:
            return null;
        }
      })()}
    </STDContainer>
  );
};

export default CompanyContainer;
