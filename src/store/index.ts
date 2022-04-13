import { combineReducers } from '@reduxjs/toolkit';
import home from './module/home';
import performance from './module/performance';
import certification from './module/certification';
import history from './module/history';

const rootReducer = combineReducers({
  home,
  performance,
  certification,
  history,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// configure
export * from './configureStore';

//modules
export * from './module/home';
export * from './module/performance';
export * from './module/certification';
