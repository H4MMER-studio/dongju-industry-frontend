import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Detail from './Detail';
import { historyActions } from '@/store/module/history';

const HistoryLayout = styled.main``;

const History: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(historyActions.getHistoryList({ isAsc: false }));
  }, []);

  return (
    <HistoryLayout>
      <Detail />
    </HistoryLayout>
  );
};

export default History;
