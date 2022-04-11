import { call, put, takeEvery } from 'redux-saga/effects';
import { API, HISTORIES_API } from '@/utils';
import { historyListActions } from '../module/history';
import { IHistory } from '@/interfaces';

export function* getHistoryListSaga() {
  try {
    const historyList: IHistory[] = yield call(API.GET, `${HISTORIES_API}`);
    yield put(historyListActions.setHistoryList(historyList));
  } catch (error) {
    console.log(error);
  }
}

export function* watchHistoryList() {
  yield takeEvery(historyListActions.getHistoryList, getHistoryListSaga);
}

export default [watchHistoryList].map((fn) => fn());
