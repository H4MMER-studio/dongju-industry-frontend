import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHomeInitialState } from '@/interfaces';

const initialState: IHomeInitialState = {
  test: 'test',
};

const slice = createSlice({
  name: 'homeReducer',
  initialState,
  reducers: {
    setTest: (state, { payload }: PayloadAction<any>) => {
      state.test = payload;
    },
    getData: (_, __) => {},
  },
});

export const selectHomeState = createSelector(
  (state: IHomeInitialState) => state.test,
  (test) => {
    return {
      test,
    };
  }
);

export const home = slice.name;
export const homeReducer = slice.reducer;
export const homeActions = slice.actions;

export default homeReducer;
