import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  INoticeInitialState,
  IGetNoticeDataParams,
  IGetNoticeDataDetail,
} from '@/interfaces';

const initialState: INoticeInitialState = {
  noticeList: [],
  dataList: [],
  noticeDetail: null,
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
    setNoticeDetail: (
      state,
      { payload }: PayloadAction<INoticeInitialState['noticeDetail']>
    ) => {
      state.noticeDetail = payload;
    },
    getNoticeDataList: (_, __: PayloadAction<IGetNoticeDataParams>) => {},
    getNoticeDataDetail: (_, __: PayloadAction<IGetNoticeDataDetail>) => {},
  },
});

export const selectNoticeState = createSelector(
  (state: INoticeInitialState) => state.noticeList,
  (state: INoticeInitialState) => state.dataList,
  (state: INoticeInitialState) => state.noticeDetail,
  (noticeList, dataList, noticeDetail) => {
    return {
      noticeList,
      dataList,
      noticeDetail,
    };
  }
);

export const notice = slice.name;
export const noticeReducer = slice.reducer;
export const noticeActions = slice.actions;

export default noticeReducer;
