export interface IPerformanceInitialState {
  deliveryList: { list: IDeliveryList[]; size: number };
  searchList: string[];
}

export interface IDeliveryList {
  _id: number;
  created_at: string;
  deleted_at: string | null;
  updated_at: string | null;
  delivery_amount: number;
  delivery_month: number;
  delivery_year: number;
  delivery_product: string;
  delivery_reference: string;
  delivery_supplier: string;
}

export interface IGetDeliveryListParams {
  skip: number;
  limit: number;
  isAsc: boolean;
  isSearch: boolean;
  field?: 'delivery_supplier' | 'delivery_product';
  value?: string;
}
