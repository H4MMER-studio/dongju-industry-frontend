import React from 'react';
import styled from 'styled-components';
import Welcome from './welcome';
import History from './history';
import WayToCome from './way-to-come';
import Certification from './certification';
import Performance from './Performance';
import { Images } from 'public/image';
import useResize from '@/hooks/useResize';
import { ICertificationMenuType } from '@/interfaces';
import { mixins } from '@/styles';

interface Iprops {
  menu: 'welcome' | 'history' | 'way-to-come' | 'performance' | 'certification';
  type: ICertificationMenuType;
  clickCertificationTypeMenu: (type: ICertificationMenuType) => void;
}

const STDContainer = styled.main`
  padding-top: 48px;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
  /* overflow-y: auto; */

  @media (max-width: 1682px) {
    width: 100%;
  }

  @media (max-width: 1023px) {
    width: 100%;
    padding: 0px;
  }
`;

const ScollLayout = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

const BannerSection = styled.section<{ marginBottom?: number }>`
  ${mixins.flexSet()}
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  background-color: #fff;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 48}px;
  overflow: hidden;

  @media (max-width: 1023px) {
    width: 100%;
    height: 120px;
    padding: 0px 17px 0 15px;
  }
`;

const MobileBannerPadding = styled.div`
  @media (max-width: 1023px) {
    padding: 48px 16px 0px;
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
  object-fit: cover;
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

const CompanyContainer: React.FC<Iprops> = ({
  type,
  menu,
  clickCertificationTypeMenu,
}) => {
  const { width } = useResize();

  const displayTitle = (
    menu:
      | 'welcome'
      | 'history'
      | 'way-to-come'
      | 'performance'
      | 'certification'
  ) => {
    switch (menu) {
      case 'welcome':
        return '인사말';
      case 'history':
        return '연혁';
      case 'way-to-come':
        return '오시는 길';

      case 'performance':
        return '납품실적';
      case 'certification':
        return '인증서';
      default:
        return '';
    }
  };

  return (
    <ScollLayout>
      <STDContainer>
        <MobileBannerPadding>
          <BannerSection marginBottom={menu === 'performance' ? 24 : undefined}>
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
        </MobileBannerPadding>
        {(() => {
          switch (menu) {
            case 'welcome':
              return <Welcome />;

            case 'history':
              return <History />;

            case 'way-to-come':
              return <WayToCome />;

            case 'certification':
              return (
                <Certification
                  type={type}
                  clickCertificationTypeMenu={clickCertificationTypeMenu}
                />
              );
            case 'performance':
              return <Performance />;

            default:
              return null;
          }
        })()}
      </STDContainer>
    </ScollLayout>
  );
};

export default CompanyContainer;
