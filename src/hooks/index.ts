import { useSelector } from 'react-redux';
import {
  selectHomeState,
  selectPerformanceState,
  selectCertificationState,
} from '@/store';
import { selectHistoryState } from '@/store/module/history';

function useGetRootState() {
  const rootState = useSelector((rootState) => rootState);

  return rootState;
}

export const useGetStore = {
  home: () => selectHomeState(useGetRootState().home),
  performance: () => selectPerformanceState(useGetRootState().performance),
  history: () => selectHistoryState(useGetRootState().history),
  certification: () =>
    selectCertificationState(useGetRootState().certification),
};

export * from './useResize';
