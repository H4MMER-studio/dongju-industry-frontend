import React from 'react';
import Router, { useRouter } from 'next/router';
import { Company } from '@/components';
import { ICertificationMenuType } from '@/interfaces';

const CompanyView: React.FC = () => {
  const router = useRouter();
  const { menu } = router.query as {
    menu: 'welcome' | 'history' | 'way-to-come';
  };

  const clickCertificationTypeMenu = (type: ICertificationMenuType) => {
    router.push(`?type=${type}`);
  };

  return (
    <Company.Container
      menu={menu}
      clickCertificationTypeMenu={clickCertificationTypeMenu}
    />
  );
};

export default CompanyView;
