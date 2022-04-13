export interface IPerformanceInitialState {
  deliveryList: IDeliveryList[];
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
  isAsc: boolean;
}
