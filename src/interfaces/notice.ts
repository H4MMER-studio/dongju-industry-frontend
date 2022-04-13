export interface INoticeInitialState {
  noticeList: (INoticeDetail & { size: number })[];
  dataList: (INoticeDetail & { size: number })[];
  noticeDetail: INoticeDetail | null;
}

export interface INoticeDetail {
  _id: string;
  notice_title: string;
  notice_content: string;
  notice_files: INoticeFile[] | null;
  notice_images: INoticeImage[] | null;
  notice_type: string;
  created_at: string | null;
  deleted_at: string | null;
  updated_at: string | null;
}

export interface INoticeFile {
  name: string;
  url: string;
}

export interface INoticeImage {
  name: string;
  url: string;
}

export interface IDataList {}

export interface IGetNoticeDataParams {
  skip: number;
  limit: number;
  type: 'archive' | 'notification';
}

export interface IGetNoticeDataDetail {
  id: string | number;
}
