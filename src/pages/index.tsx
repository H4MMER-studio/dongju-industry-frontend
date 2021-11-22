import React from 'react';
import { useGetStore } from '@/hooks';

const Home: React.FC = () => {
  const { test } = useGetStore.home();
  return <div>hello {test}</div>;
};

export default Home;
