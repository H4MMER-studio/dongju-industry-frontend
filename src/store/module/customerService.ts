import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomerServiceInitialState } from '@/interfaces';

const initialState: ICustomerServiceInitialState = {};

const slice = createSlice({
  name: 'historyReducer',
  initialState,
  reducers: {
    setHistoryList: (
      state,
      { payload }: PayloadAction<IHistoryInitialState['historyList']>
    ) => {
      state.historyList = payload;
    },
    getHistoryList: (_, __: PayloadAction<IGetHistoryParams>) => {},
  },
});

export const selectHistoryState = createSelector(
  (state: IHistoryInitialState) => state.historyList,
  (historyList) => {
    return {
      historyList,
    };
  }
);

export const history = slice.name;
export const historyReducer = slice.reducer;
export const historyActions = slice.actions;

export default historyReducer;
