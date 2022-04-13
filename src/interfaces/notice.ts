export interface INoticeInitialState {
  noticeList: INoticeList[];
  dataList: IDataList[];
}

export interface INoticeList {}

export interface IDataList {}

export interface IGetNoticeDataParams {
  skip: number;
  limit: number;
}
