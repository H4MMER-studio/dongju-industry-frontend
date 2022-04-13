import { call, put, takeEvery } from 'redux-saga/effects';
import { API, DELIVERY_API } from '@/utils';
import { performanceActions } from '../module/performance';
import { ActionType, IGetDeliveryListParams } from '@/interfaces';

export function* getDeliveryListSaga({
  payload,
}: ActionType & { payload: IGetDeliveryListParams }) {
  try {
    const deliveryList = yield call(
      API.GET,
      `${DELIVERY_API}?${
        payload.isAsc ? '' : 'sort=delivery-year+desc&sort=delivery-month+desc'
      }`
    );
    yield put(performanceActions.setDeliveryList(deliveryList.data));
  } catch (error) {
    console.error(error);
  }
}

export function* watchDeliveryList() {
  yield takeEvery(performanceActions.getDeliveryList, getDeliveryListSaga);
}

export default [watchDeliveryList].map((fn) => fn());
