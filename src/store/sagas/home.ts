import { call, put, takeEvery } from 'redux-saga/effects';
import { API, TEST_API } from '@/utils';
import { homeActions } from '../module/home';

export function* testSaga() {
  try {
    const test = yield call(API.GET, TEST_API);
    yield put(homeActions.setTest(test));
  } catch (error) {
    console.error(error);
  }
}

export function* watchTestSaga() {
  yield takeEvery(homeActions.getData, testSaga);
}

export default [watchTestSaga].map((fn) => fn());
