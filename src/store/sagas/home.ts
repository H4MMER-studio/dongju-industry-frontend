export function* testSaga() {}

export function* watchTestSaga() {}

export default [watchTestSaga].map((fn) => fn());
