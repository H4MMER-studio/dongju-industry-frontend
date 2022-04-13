export interface IHistoryInitialState {
  historyList: IHistory[];
}

export interface IHistory {
  _id: string;
  history_content: string;
  history_month: number;
  history_year: number;
  created_at: string | null;
  deleted_at: string | null;
  updated_at: string | null;
}

export interface IGetHistoryParams {
  isAsc: boolean;
}
