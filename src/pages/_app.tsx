import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { MainNav, Footer } from '@/components';
import { AppProps } from 'next/app';
import withReduxSaga from 'next-redux-saga';
import { wrapper } from '@/store/configureStore';
import { mixins } from '@/styles';
import useResize from '@/hooks/useResize';
import CssBaseline from '@mui/material/CssBaseline';
import { ProductType } from '@/interfaces';

interface IContainerProps {
  height: number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const STDContainer = styled.div<IContainerProps>`
  ${mixins.flexSet('flex-start', 'flex-start')}
  height: ${(props) => props.height}px;
  background-color: #f0f0f0;

  @media (max-width: 1024px) {
    ${mixins.flexSet('flex-start', 'flex-start', 'column')}
    height: auto;
  }
`;

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const selectedMenu = router.pathname;
  const params = router.query as {
    menu:
      | 'welcome'
      | 'history'
      | 'way-to-come'
      | 'performance'
      | 'certification';
  };
  const { height } = useResize();

  const onClickMenu = (menu: string) => {
    router.push(`/${menu}`);
  };

  const onClickProduct = (productType: ProductType['type']) => {
    router.push(`/product/${productType}`);
  };

  const onClickCompanyMenu = (
    companyMenu:
      | 'welcome'
      | 'history'
      | 'way-to-come'
      | 'performance'
      | 'certification'
  ) => {
    if (companyMenu === 'certification') {
      router.push(`/company/${companyMenu}?type=license`);
    } else {
      router.push(`/company/${companyMenu}`);
    }
  };

  const onClickNoticeMenu = (noticeMenu: 'list' | 'data') => {
    router.push(`/notice/${noticeMenu}`);
  };

  const onClickCustomerMenu = (customerMenu: 'inquiry') => {
    router.push(`/customer-service/${customerMenu}`);
  };

  return (
    <>
      <Head>
        <meta
          content="정직과 신뢰, 폭 넓은 전문지식으로 고객 만족에 한 발 더 나아가겠습니다."
          name="description"
          key="description"
        />
        <meta
          content="정직과 신뢰, 폭 넓은 전문지식으로 고객 만족에 한 발 더 나아가겠습니다."
          property="og:description"
          key="og:description"
        />
        <meta
          content="정직과 신뢰, 폭 넓은 전문지식으로 고객 만족에 한 발 더 나아가겠습니다."
          name="twitter:description"
          key="twitter:description"
        />
        <meta
          content="공기조화기, 동파방지댐퍼코일, 동파방지, 댐퍼코일, 배기유니트, 조화기, 버블댐퍼, 밀폐도어, 밀폐도어, 송풍기, 동주산업, 동주"
          name="keywords"
        />
        <title>동주산업</title>
        <meta content="동주산업" property="og:title" key="og:title" />
        <meta content="동주산업" name="twitter:title" key="twitter:title" />
        <meta content="동주산업" name="author" key="author" />
        <meta content="동주산업" property="og:site_name" key="og:site_name" />
      </Head>
      <CssBaseline />
      <STDContainer height={height}>
        <MainNav
          selectedMenu={selectedMenu}
          params={params}
          onClickMenu={onClickMenu}
          onClickProduct={onClickProduct}
          onClickNoticeMenu={onClickNoticeMenu}
          onClickCompanyMenu={onClickCompanyMenu}
          onClickCustomerMenu={onClickCustomerMenu}
        />
        <Component {...pageProps} />
      </STDContainer>
      {selectedMenu === '/' && <Footer />}
    </>
  );
}

export default wrapper.withRedux(withReduxSaga(App));
