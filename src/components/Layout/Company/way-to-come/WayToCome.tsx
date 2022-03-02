import React from 'react';
import styled from 'styled-components';

const STDWayToComeLayout = styled.section`
  display: flex;
`;

const LeftSection = styled.div`
  width: 608px;
  height: 256px;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
  margin-right: 24px;
`;

const RightSection = styled.div`
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
  width: 608px;
  padding: 24px;
`;

const DataLayout = styled.div`
  display: flex;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 52px;
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
  padding: 0 16px;
  border-bottom: 1px solid #e8e8e8;
`;

const TableLayout = styled.div`
  border-top: 1px solid #e8e8e8;
`;
0;
const WayToCome: React.FC = () => {
  return (
    <STDWayToComeLayout>
      <LeftSection>지도API 적용 할 곳</LeftSection>
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
    value: 'dongju97@hanmail.net',
  },
];
