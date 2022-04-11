import { call, put, takeEvery } from 'redux-saga/effects';
import { API, DELIVERY_API } from '@/utils';
import { performanceActions } from '../module/performance';

export function* getDeliveryListSaga() {
  try {
    const deliveryList = yield call(API.GET, DELIVERY_API);
    yield put(performanceActions.setDeliveryList(deliveryList));
  } catch (error) {
    console.error(error);
  }
}

export function* watchDeliveryList() {
  yield takeEvery(performanceActions.getDeliveryList, getDeliveryListSaga);
}

export default [watchDeliveryList].map((fn) => fn());
