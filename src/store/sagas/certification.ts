import { call, put, takeEvery } from 'redux-saga/effects';
import { API, CERTIFICATIONS_API } from '@/utils';
import { certificationActions } from '../module/certification';
import { ICertification, ICertificationMenuType } from '@/interfaces';

export function* getCertificationListSaga({
  payload,
}: {
  payload: ICertificationMenuType;
}) {
  try {
    const certificationList: ICertification[] = yield call(
      API.GET,
      `${CERTIFICATIONS_API}`
    );
    yield put(certificationActions.setCertificationList(certificationList));
  } catch (error) {
    console.log(error);
  }
}

export function* watchCertificationList() {
  yield takeEvery(
    certificationActions.getCertificationList,
    getCertificationListSaga
  );
}

export default [watchCertificationList].map((fn) => fn());