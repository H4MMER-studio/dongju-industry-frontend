import { combineReducers } from '@reduxjs/toolkit';
import home from './module/home';
import performance from './module/performance';
import certification from './module/certification';
import history from './module/history';
import notice from './module/notice';

const rootReducer = combineReducers({
  home,
  performance,
  certification,
  history,
  notice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// configure
export * from './configureStore';

//modules
export * from './module/home';
export * from './module/performance';
export * from './module/certification';
export * from './module/notice';
