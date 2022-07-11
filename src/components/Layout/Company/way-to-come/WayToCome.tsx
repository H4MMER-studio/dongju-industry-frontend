import React, { useEffect } from 'react';
import styled from 'styled-components';
import useResize from '@/hooks/useResize';

const STDContainer = styled.section`
  @media (max-width: 1023px) {
    padding: 0 16px 30px;
  }
`;

const STDTitle = styled.h2`
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const STDWayToComeLayout = styled.article`
  display: flex;
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid #c8c8c8;

  @media (max-width: 1023px) {
    display: block;
  }

  &:last-child {
    border: none;
  }
`;

const LeftSection = styled.div`
  width: 608px;
  height: 256px;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
  margin-right: 24px;

  @media (max-width: 1023px) {
    width: 100%;
    height: 206px;
    margin-bottom: 24px;
    margin-right: 0px;
  }
`;

const RightSection = styled.div`
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
  width: 608px;
  height: 100%;
  padding: 24px;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const DataLayout = styled.div`
  display: flex;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  min-height: 52px;
  background: #f5f5f5;
  color: #2979ff;
  font-size: 17px;
  font-weight: 600;
  border-bottom: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 19px;
  color: #383838;
  padding: 8px 16px;
  border-bottom: 1px solid #e8e8e8;
  word-break: keep-all;

  @media (max-width: 1023px) {
    font-size: 17px;
  }
`;

const TableLayout = styled.div`
  border-top: 1px solid #e8e8e8;
`;
0;
const WayToCome: React.FC = () => {
  const isMobile = useResize().width < 768;

  useEffect(() => {
    if (!window.kakao) return;
    let mapContainer = document.getElementById('kakao_map');
    let mapContainer2 = document.getElementById('kakao_map2');
    let mapOption = {
      center: new window.kakao.maps.LatLng(
        37.21221844319734,
        126.85351383359696
      ),
      level: 4,
    };

    let mapOption2 = {
      center: new window.kakao.maps.LatLng(
        37.374266446251454,
        126.94691414593339
      ),
      level: 4,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);
    const map2 = new window.kakao.maps.Map(mapContainer2, mapOption2);

    var marker = new window.kakao.maps.Marker({
      position: map.getCenter(),
    });
    var marker2 = new window.kakao.maps.Marker({
      position: map2.getCenter(),
    });

    marker.setMap(map);
    marker2.setMap(map2);

    function resizeMap() {
      var mapContainer = document.getElementById('kakao_map');
    }

    function relayout() {
      map.relayout();
    }
  }, [isMobile]);

  return (
    <STDContainer>
      <STDTitle>본사 및 공장</STDTitle>
      <STDWayToComeLayout>
        <LeftSection>
          <div id='kakao_map' style={{ width: '100%', height: '100%' }}>
            <div style={{ width: '100%', height: '100%' }} />
          </div>
        </LeftSection>
        <RightSection>
          <TableLayout>
            {COMPANY_ADDRESS_INFORMATION.map((info) => {
              return (
                <DataLayout key={info.type}>
                  <Head>{info.type}</Head>
                  <Value>{info.value}</Value>
                </DataLayout>
              );
            })}
          </TableLayout>
        </RightSection>
      </STDWayToComeLayout>
      <STDTitle>영업 사무소</STDTitle>
      <STDWayToComeLayout>
        <LeftSection>
          <div id='kakao_map2' style={{ width: '100%', height: '100%' }}>
            <div style={{ width: '100%', height: '100%' }} />
          </div>
        </LeftSection>
        <RightSection>
          <TableLayout>
            {OFFICE_INFORMATION.map((info) => {
              return (
                <DataLayout key={info.type}>
                  <Head>{info.type}</Head>
                  <Value>{info.value}</Value>
                </DataLayout>
              );
            })}
          </TableLayout>
        </RightSection>
      </STDWayToComeLayout>
    </STDContainer>
  );
};

export default WayToCome;

const COMPANY_ADDRESS_INFORMATION = [
  {
    type: '본사',
    value: '경기도 화성시 남양읍 주석로 228-6 1층',
  },
  {
    type: '전화',
    value: '032-579-8272',
  },
  {
    type: '팩스',
    value: '031-357-7462',
  },
  {
    type: '이메일',
    value: 'dongju91@hanmail.net',
  },
];

const OFFICE_INFORMATION = [
  {
    type: '주소',
    value: '경기도 안양시 동안구 엘에스로 142, 808호 (금정역 SK V1 Center)',
  },
  {
    type: '팩스',
    value: '031-429-9431',
  },
  {
    type: '메일',
    value: 'dongju91@hanmail.net',
  },
];
