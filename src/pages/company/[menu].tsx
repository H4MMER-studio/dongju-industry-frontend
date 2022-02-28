import React from 'react';
import Router, { useRouter } from 'next/router';
import { Company } from '@/components';

const CompanyView: React.FC = () => {
  const router = useRouter();
  const { menu } = router.query as {
    menu: 'welcome' | 'history' | 'way-to-come';
  };

  return <Company.Container menu={menu} />;
};

export default CompanyView;
