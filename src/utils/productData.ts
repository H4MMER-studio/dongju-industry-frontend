import { ProductMenu } from '@/interfaces';

export const PRODUCT_LIST = [
  'air-conditioner',
  'freeze-protection-damper-coil',
  'exhaust-unit',
  'bubble-damper',
  'fully-sealed-door',
  'air-blower',
  'exhaust-pan',
];

export const PRODUCT_MANUAL_DATA: {
  [key: string]: ProductMenu;
} = {
  'air-conditioner': {
    productName: '공기조화기',
    menuList: [
      { id: 'menu-1', menu: '구조' },
      { id: 'menu-2', menu: '선정방법' },
      { id: 'menu-3', menu: '규격표' },
    ],
    detailImages: [
      '/image/product/air-conditioner/prod2_img1.jpg',
      '/image/product/air-conditioner/prod2_img2.jpg',
      '/image/product/air-conditioner/prod2_img3.jpg',
      '/image/product/air-conditioner/prod2_img4.jpg',
    ],
  },
  'freeze-protection-damper-coil': {
    productName: '동파방지댐퍼코일',
    menuList: [
      { id: 'menu-1', menu: '개요' },
      { id: 'menu-2', menu: '구조' },
      { id: 'menu-3', menu: '작동원리' },
      { id: 'menu-4', menu: '주의사항' },
    ],
    detailImages: [
      '/image/product/freeze-protection-damper-coil/prod1_img1.jpg',
      '/image/product/freeze-protection-damper-coil/prod1_img2.jpg',
      '/image/product/freeze-protection-damper-coil/prod1_img3.jpg',
      '/image/product/freeze-protection-damper-coil/prod1_img4.jpg',
    ],
  },

  'exhaust-unit': {
    productName: '배기유니트',
    menuList: [
      { id: 'menu-1', menu: '개요' },
      { id: 'menu-2', menu: '적용' },
    ],
    detailImages: [
      '/image/product/exhaust-unit/prod3_img1.jpg',
      '/image/product/exhaust-unit/prod3_img2.jpg',
      '/image/product/exhaust-unit/prod3_img3.jpg',
      '/image/product/exhaust-unit/prod3_img4.jpg',
    ],
  },
  'bubble-damper': {
    productName: '버블댐퍼',
    menuList: [
      { id: 'menu-1', menu: '개요' },
      { id: 'menu-2', menu: '적용' },
    ],
    detailImages: [
      '/image/product/bubble-damper/prod4_img1.jpg',
      '/image/product/bubble-damper/prod4_img2.jpg',
      '/image/product/bubble-damper/prod4_img3.jpg',
      '/image/product/bubble-damper/prod4_img4.jpg',
      '/image/product/bubble-damper/prod4_img5.jpg',
      '/image/product/bubble-damper/prod4_img6.jpg',
      '/image/product/bubble-damper/prod4_img7.jpg',
    ],
  },
  'fully-sealed-door': {
    productName: '밀폐도어',
    menuList: [
      { id: 'menu-1', menu: '개요' },
      { id: 'menu-2', menu: '적용' },
    ],
    detailImages: [
      '/image/product/fully-sealed-door/prod5_img1.jpg',
      '/image/product/fully-sealed-door/prod5_img2.jpg',
      '/image/product/fully-sealed-door/prod5_img3.jpg',
      '/image/product/fully-sealed-door/prod5_img4.jpg',
      '/image/product/fully-sealed-door/prod5_img5.jpg',
    ],
  },
  'air-blower': {
    productName: '송풍기',
    menuList: [
      { id: 'menu-1', menu: '개요' },
      { id: 'menu-2', menu: '적용' },
    ],
    detailImages: [
      '/image/product/air-blower/prod6_img1.jpg',
      '/image/product/air-blower/prod6_img2.jpg',
      '/image/product/air-blower/prod6_img3.jpg',
    ],
  },
  'exhaust-pan': {
    productName: '대공간 환기시스템',
    menuList: [
      { id: 'menu-1', menu: '급배기' },
      { id: 'menu-2', menu: '급배기 제원' },
      { id: 'menu-3', menu: '기류팬' },
      { id: 'menu-4', menu: '기류팬 제원' },
    ],
    detailImages: [
      '/image/product/exhaust-pan/exhaust-item1.jpeg',
      '/image/product/exhaust-pan/exhaust-item2.jpeg',
      '/image/product/exhaust-pan/exhaust-item3.jpeg',
      '/image/product/exhaust-pan/exhaust-item4.jpeg',
    ],
  },
};
