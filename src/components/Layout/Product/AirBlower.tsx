import React from 'react';
import styled from 'styled-components';
import * as ProductComponents from './components';

const AirBlowerLayout = styled.div`
  padding: 24px 0;
`;

const OverviewCardLayout = styled.div`
  margin-bottom: 36px;
`;

const AirBlower: React.VFC = () => {
  return (
    <AirBlowerLayout>
      <OverviewCardLayout>
        <ProductComponents.OverviewCard overview="당사는 설립 초기부터 터보팬, 시로코팬, 에어포일팬, 인라인팬 등 유저가 요구하는 팬을 제작 생산하여 왔습니다. 각종 공조시설이 필요한 실험실 및 창고, 주방, 작업장의 급배기, 환기 등 필요한 송풍기를 선택하실 수 있습니다." />
      </OverviewCardLayout>
      <ProductComponents.ApplyInfoCard
        applyList={[
          '자동차 페인트부스 팬(중국 북경)',
          '급배기, 환기 팬(정선 카지노)',
          '전산실 바닥공조',
          '가스도어히터(AIR CURTAIN)',
        ]}
      />
    </AirBlowerLayout>
  );
};

export default AirBlower;
