import React from 'react';
import { useRouter } from 'next/router';
import { Company } from '@/components';
import { ICertificationMenuType } from '@/interfaces';

const CompanyView: React.FC = () => {
  const router = useRouter();
  const { menu, type } = router.query as {
    menu:
      | 'welcome'
      | 'history'
      | 'way-to-come'
      | 'performance'
      | 'certification';
    type: ICertificationMenuType;
  };

  const clickCertificationTypeMenu = (type: ICertificationMenuType) => {
    router.push(`/company/certification/?type=${type}`);
  };

  return (
    <Company.Container
      menu={menu}
      type={type}
      clickCertificationTypeMenu={clickCertificationTypeMenu}
    />
  );
};

export default CompanyView;
