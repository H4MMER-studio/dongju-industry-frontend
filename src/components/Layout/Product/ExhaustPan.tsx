import { mixins } from '@/styles';
import React from 'react';
import styled from 'styled-components';
import * as ProductComponents from './components';

interface IProps {
  selectedMenu: string | null;
}

const ExhaustPanLayout = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 24px 0;
`;

const OverviewCardLayout = styled.div`
  margin-bottom: 36px;
`;

const ImageWrapper = styled.div<{ cssStyle?: string }>`
  ${mixins.flexSet()}

  .image {
    width: 100%;
    max-width: 20rem;
  }
  ${({ cssStyle }) => cssStyle}
`;

const ExhaustPan: React.FC<IProps> = ({ selectedMenu }) => {
  return (
    <ExhaustPanLayout>
      <OverviewCardLayout id='menu-1'>
        <ProductComponents.OverviewCard
          title='공간 청정 급배기 시스템(Purair System)'
          overview={
            <>
              <ImageWrapper cssStyle='margin-bottom: 1.25rem;'>
                <img
                  className='image'
                  src='/image/product/exhaust-pan/exhaust-item5.png'
                />
              </ImageWrapper>
              <ImageWrapper cssStyle='.image { max-width: 30rem;}'>
                <img
                  className='image'
                  src='/image/product/exhaust-pan/exhaust-item6.png'
                />
              </ImageWrapper>
            </>
          }
          isSelected={selectedMenu === 'menu-1'}
        />
      </OverviewCardLayout>
      <ProductComponents.ApplyInfoCard
        title='대공간 청정 급배기 시스템 특징'
        containerStyle='margin-bottom: 36px;'
        applyList={[
          '고성능 필터 장착(PM2.5 99% 제거)\n     - Pre Filter + HEPA・Filter\n     - MERV 16@2.5 H13',
          'CO2 농도 및 미세먼지 농도에 따른 변풍량 제어(냉난방 비용 최소화)',
          'Purair 전용센서(CO2, PM2.5, PM10, VOC)에 의한 정밀 농도 조절 (1등급 인증 Sensor)',
          '제트기류 유도효과에 의한 빠른 급/배기 구현(공기연령 최소화)',
          '소음저감기술 적용으로 저소음 운전',
          '타사 공조기와 연동운전 가능(선택사항)',
        ]}
        isSelected={selectedMenu === 'menu-1'}
      />
      <OverviewCardLayout id='menu-2'>
        <ProductComponents.OverviewCard
          title='환기용팬 제원표'
          overview={
            <>
              <ImageWrapper cssStyle='.image { max-width: unset;}'>
                <img
                  className='image'
                  src='/image/product/exhaust-pan/exhaust-item7.png'
                />
              </ImageWrapper>
            </>
          }
          isSelected={selectedMenu === 'menu-2'}
        />
      </OverviewCardLayout>
      <ProductComponents.ApplyInfoCard
        id={'menu-3'}
        title='대공간 변풍량 기류순환팬 특징'
        containerStyle='margin-bottom: 36px;'
        applyList={[
          '상하기류순환으로 냉난방 효율 극대화',
          '설정온도에 따른 운전: [ON/OFF] [단계별 변풍량 운전 가능]',
          '자동승강형 / 고정형 선택가능',
        ]}
        isSelected={selectedMenu === 'menu-3'}
      />
      <OverviewCardLayout id='menu-4'>
        <ProductComponents.OverviewCard
          title='변풍량 기류순환팬 제원표'
          overview={
            <ImageWrapper cssStyle='.image { max-width: unset;}'>
              <img
                className='image'
                src='/image/product/exhaust-pan/exhaust-item8.png'
              />
            </ImageWrapper>
          }
          isSelected={selectedMenu === 'menu-4'}
        />
      </OverviewCardLayout>
    </ExhaustPanLayout>
  );
};

export default ExhaustPan;
