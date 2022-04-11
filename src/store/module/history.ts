import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHistoryInitialState } from '@/interfaces';

const initialState: IHistoryInitialState = {
  historyList: [],
};

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
    getHistoryList: (_, __: PayloadAction) => {},
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

export const historyList = slice.name;
export const historyListReducer = slice.reducer;
export const historyListActions = slice.actions;

export default historyListReducer;
