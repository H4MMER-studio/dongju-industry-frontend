import { call, put, takeEvery } from 'redux-saga/effects';
import { API, DELIVERY_API } from '@/utils';
import { performanceActions } from '../module/performance';
import { ActionType, IGetDeliveryListParams } from '@/interfaces';

export function* getDeliveryListSaga({
  payload,
}: ActionType & { payload: IGetDeliveryListParams }) {
  try {
    const { isAsc, isSearch, limit, skip, field, value } = payload;
    const deliveryList = yield call(
      API.GET,
      `${DELIVERY_API}?skip=${skip}&limit=${limit}${
        isSearch ? `&type=search` : ''
      }${field ? `&field=${field}` : ''}&value=${value}${
        isAsc ? '' : '&sort=delivery-year+desc&sort=delivery-month+desc'
      }`
    );

    if (isSearch) {
      yield put(performanceActions.setSearchList(deliveryList.data));
    } else {
      yield put(
        performanceActions.setDeliveryList({
          list: deliveryList.data,
          size: deliveryList.size,
        })
      );
    }
  } catch (error) {
    console.error(error);
  }
}

export function* watchDeliveryList() {
  yield takeEvery(performanceActions.getDeliveryList, getDeliveryListSaga);
}

export default [watchDeliveryList].map((fn) => fn());
