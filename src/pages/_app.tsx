import React from 'react';
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

const STDContainer = styled.div`
  ${mixins.flexSet('flex-start')}
  padding: 16px;
`;

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickMenu = (menu: string) => {
    router.push(`/${menu === 'product' ? '' : menu}`);
  };

  return (
    <ApolloProvider client={client}>
      <STDContainer>
        <MainNav selectedMenu={selectedMenu} onClickMenu={onClickMenu} />
        <Component {...pageProps} />
      </STDContainer>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(withReduxSaga(App));
