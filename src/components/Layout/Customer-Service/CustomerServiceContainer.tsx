import React from 'react';
import styled from 'styled-components';
import * as CustomerServiceComponents from './Components';
import { Images } from 'public/image';

const CustomerServiceContainer: React.FC = () => {
  return (
    <CustomerServiceContainerLayout>
      <Layout>
        <ServiceLayout>
          <CustomerServiceComponents.Service
            title="견적 문의"
            infoMessage="제품의 설치의 초기 견적 문의"
            backgroundImageSrc={Images.EsitmateBackground}
          />
        </ServiceLayout>
        <ServiceLayout>
          <CustomerServiceComponents.Service
            title="A/S 문의"
            infoMessage="설치 후 고장 및 수리 관련 문의"
            backgroundImageSrc={Images.ASBackground}
          />
        </ServiceLayout>
        <ServiceLayout>
          <CustomerServiceComponents.Service
            title="그 외 문의"
            infoMessage="기타 사항 문의"
            backgroundImageSrc={Images.ETCBackground}
          />
        </ServiceLayout>
        <CustomerServiceComponents.InfoCard
          backgroundImageSrc={Images.InfoBackground}
        />
      </Layout>
    </CustomerServiceContainerLayout>
  );
};

export default CustomerServiceContainer;

const CustomerServiceContainerLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ServiceLayout = styled.div`
  margin-right: 16px;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
`;
