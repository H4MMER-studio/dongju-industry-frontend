import React from 'react';
import styled from 'styled-components';
import AirConditionerInfoBox from './partials/AirConditionerInfoBox';

const STDContainer = styled.article`
  flex: 1;
  height: 100%;
  overflow: scroll;
`;

const AirConditioner: React.FC = () => {
  const CasingPanelContent = [
    {
      subTitle: '재질',
      description: (
        <p>
          Out Casing : SCP1 (냉간압연강판), In Casing : GI (아연도강판)
          <ul>
            <li>보온재 : 불연재(Glass Wool 48K), 난연재(폴리에스터폼), 기타</li>
            <li>
              페인트 : Casing - 에폭시폴리에스테르 도료로 마감처리 후 180℃ 이상
              고온에서 열처리 (분체정전도장)
            </li>
            <li>열 손실을 최소화하고 흡음 효과를 높임</li>
          </ul>
        </p>
      ),
    },
    { subTitle: '특징', description: 'hi' },
    { subTitle: '종류', description: 'hi' },
  ];
  return (
    <STDContainer>
      <AirConditionerInfoBox title={'Casing Panel'} list={CasingPanelContent} />
      <AirConditionerInfoBox title={'Casing Panel'} list={CasingPanelContent} />
      <AirConditionerInfoBox title={'Casing Panel'} list={CasingPanelContent} />
      <AirConditionerInfoBox title={'Casing Panel'} list={CasingPanelContent} />
      <AirConditionerInfoBox title={'Casing Panel'} list={CasingPanelContent} />
    </STDContainer>
  );
};

export default AirConditioner;
