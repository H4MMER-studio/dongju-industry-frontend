import { call, put, takeEvery } from 'redux-saga/effects';
import { API, NOTICE_API } from '@/utils';
import { ActionType, IGetNoticeDataParams } from '@/interfaces';
import { noticeActions } from '../module/notice';

export function* getNoticeDataListSaga({
  payload,
}: ActionType & { payload: IGetNoticeDataParams }) {
  try {
    const noticeDataList = yield call(
      API.GET,
      `${NOTICE_API}?skip=${payload.skip}&limit=${payload.limit}`
    );
    yield put(noticeActions.setDataList(noticeDataList.data));
    yield put(noticeActions.setNoticeList(noticeDataList.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetNoticeDataList() {
  yield takeEvery(noticeActions.getNoticeDataList, getNoticeDataListSaga);
}

export default [watchGetNoticeDataList].map((fn) => fn());
