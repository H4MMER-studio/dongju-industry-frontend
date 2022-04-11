import { all, put } from 'redux-saga/effects';
import watchHome from './home';
import watchPerformance from './performance';

export default function* rootSaga() {
  yield all([...watchHome, ...watchPerformance]);
}
