import { all, put } from 'redux-saga/effects';
import watchHome from './home';
import watchCertification from './certification';
import watchHistory from './history';
import watchPerformance from './performance';
import watchNotice from './notice';
import watchCustomerService from './customerService';

export default function* rootSaga() {
  yield all([
    ...watchHome,
    ...watchCertification,
    ...watchHistory,
    ...watchPerformance,
    ...watchNotice,
    ...watchCustomerService,
  ]);
}
