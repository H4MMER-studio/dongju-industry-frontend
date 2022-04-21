import React from 'react';
import Router, { useRouter } from 'next/router';
import { Company } from '@/components';
import { ICertificationMenuType } from '@/interfaces';
import { wrapper } from '@/store';

interface IProps {
  currentMenu:
    | 'welcome'
    | 'history'
    | 'way-to-come'
    | 'performance'
    | 'certification';
}

const CompanyView: React.FC<IProps> = ({ currentMenu }) => {
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
      menu={menu ?? currentMenu}
      type={type}
      clickCertificationTypeMenu={clickCertificationTypeMenu}
    />
  );
};

export default CompanyView;

export const getServerSideProps = wrapper.getServerSideProps(
  (_) => async (ctx) => {
    return {
      props: {
        currentMenu: ctx.params.menu,
      },
    };
  }
);
