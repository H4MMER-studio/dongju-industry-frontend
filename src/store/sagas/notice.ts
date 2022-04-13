import { call, put, takeEvery } from 'redux-saga/effects';
import { API, NOTICE_API } from '@/utils';
import {
  ActionType,
  IGetNoticeDataDetail,
  IGetNoticeDataParams,
} from '@/interfaces';
import { noticeActions } from '../module/notice';

export function* getNoticeDataListSaga({
  payload,
}: ActionType & { payload: IGetNoticeDataParams }) {
  try {
    const noticeDataList = yield call(
      API.GET,
      `${NOTICE_API}?value=${payload.type}&skip=${payload.skip}&limit=${payload.limit}`
    );
    if (payload.type === 'archive') {
      yield put(noticeActions.setDataList(noticeDataList.data));
    } else {
      yield put(noticeActions.setNoticeList(noticeDataList.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getNoticeDataDetailSaga({
  payload,
}: ActionType & { payload: IGetNoticeDataDetail }) {
  try {
    const noticeDetail = yield call(API.GET, `${NOTICE_API}/${payload.id}`);
    yield put(noticeActions.setNoticeDetail(noticeDetail.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetNoticeDataList() {
  yield takeEvery(noticeActions.getNoticeDataList, getNoticeDataListSaga);
}

export function* watchGetNoticeDataDetailSaga() {
  yield takeEvery(noticeActions.getNoticeDataDetail, getNoticeDataDetailSaga);
}

export default [
  watchGetNoticeDataList,
  watchGetNoticeDataDetailSaga,
].map((fn) => fn());
