import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INoticeInitialState, IGetNoticeDataParams } from '@/interfaces';

const initialState: INoticeInitialState = {
  noticeList: [],
  dataList: [],
};

const slice = createSlice({
  name: 'noticeReducer',
  initialState,
  reducers: {
    setNoticeList: (
      state,
      { payload }: PayloadAction<INoticeInitialState['noticeList']>
    ) => {
      state.noticeList = payload;
    },
    setDataList: (
      state,
      { payload }: PayloadAction<INoticeInitialState['dataList']>
    ) => {
      state.dataList = payload;
    },
    getNoticeDataList: (_, __: PayloadAction<IGetNoticeDataParams>) => {},
  },
});

export const selectNoticeState = createSelector(
  (state: INoticeInitialState) => state.noticeList,
  (state: INoticeInitialState) => state.dataList,
  (noticeList, dataList) => {
    return {
      noticeList,
      dataList,
    };
  }
);

export const notice = slice.name;
export const noticeReducer = slice.reducer;
export const noticeActions = slice.actions;

export default noticeReducer;
