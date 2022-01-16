import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetStore } from '@/hooks';
import { homeActions } from '@/store';
import { Home } from '@/components';
import { API } from '@/utils';

const HomePage: React.FC = () => {
  const { test } = useGetStore.home();
  const dispatch = useDispatch();

  const onClickSetTest = (test: string) => {
    dispatch(homeActions.setTest(test));
  };

  const getData = async () => {
    try {
      const test = await API.GET('');
      dispatch(homeActions.setTest(test));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>hello {test}</div>
      <Home.Container onClickSetTest={onClickSetTest} />
    </>
  );
};

export default HomePage;
