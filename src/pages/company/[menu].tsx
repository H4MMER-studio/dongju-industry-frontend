import React from 'react';
import Router, { useRouter } from 'next/router';

const CompanyView: React.FC = () => {
  const router = useRouter();
  const { menu } = router.query as {
    menu: 'welcome' | 'history' | 'way-to-come';
  };

  console.log(menu, '메뉴');

  return <div />;
};

export default CompanyView;
