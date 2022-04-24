import React from 'react';
import { useRouter } from 'next/router';
import { Company } from '@/components';
import { ICertificationMenuType } from '@/interfaces';
import { GetStaticPaths, GetStaticProps } from 'next';
import { COMPANY_MENU } from '@/utils';

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

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    fallback: false,
    paths: COMPANY_MENU.map((datapoint) => ({
      params: {
        menu: datapoint,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const currentMenu = ctx.params.menu;

  return {
    props: {
      currentMenu,
    },
  };
};
