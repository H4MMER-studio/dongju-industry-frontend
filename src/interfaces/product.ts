export interface IProductInitialState {
  productMenu: ProductMenu;
}

export interface ProductType {
  type:
    | 'air-conditioner'
    | 'freeze-protection-damper-coil'
    | 'exhaust-unit'
    | 'bubble-damper'
    | 'fully-sealed-door'
    | 'air-blower'
    | 'exhaust-pan';
}

export interface ProductMenu {
  productName: string;
  menuList: { id: string; menu: string }[];
  detailImages: string[];
}
