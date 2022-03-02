import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { MainNav } from '@/components';
import { AppProps } from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import withReduxSaga from 'next-redux-saga';
import { wrapper } from '@/store/configureStore';
import { useGetStore } from '@/hooks';
import { mixins } from '@/styles';
import { homeActions } from '@/store';
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
  }
`;

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const selectedMenu = router.pathname;
  const params = router.query as {
    menu: 'welcome' | 'history' | 'way-to-come';
  };
  const { height } = useResize();

  const onClickMenu = (menu: string) => {
    router.push(`/${menu}`);
  };

  const onClickProduct = (productType: ProductType['type']) => {
    router.push(`/product/${productType}`);
  };

  const onClickCompanyMenu = (
    companyMenu: 'welcome' | 'history' | 'way-to-come'
  ) => {
    router.push(`/company/${companyMenu}`);
  };

  return (
    <>
      <Head>
        <title>동주산업</title>
      </Head>
      <ApolloProvider client={client}>
        <CssBaseline />
        <STDContainer height={height}>
          <MainNav
            selectedMenu={selectedMenu}
            params={params}
            onClickMenu={onClickMenu}
            onClickProduct={onClickProduct}
            onClickCompanyMenu={onClickCompanyMenu}
          />
          <Component {...pageProps} />
        </STDContainer>
      </ApolloProvider>
    </>
  );
}

export default wrapper.withRedux(withReduxSaga(App));
