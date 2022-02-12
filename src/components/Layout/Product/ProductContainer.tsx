import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductType, ProductMenu } from '@/interfaces';
import * as ProductComponents from './components';
import { Product } from '@/components';
import { mixins } from '@/styles';
interface Iprops {
  productType: ProductType['type'];
}

const ProductContainerLayout = styled.div`
  ${mixins.flexSet('space-between', 'unset')}
  width: 100%;
  height: 100%;
  padding-left: 24px;
  padding-right: 8px;

  @media (max-width: 1365px) {
    display: block;
  }
`;

const ProductManualLayout = styled.div`
  padding-right: 24px;

  @media (max-width: 1365px) {
    padding-right: 0px;
    margin-bottom: 48px;
  }
`;

const TableLocation = styled.div``;

const ProductContainer: React.FC<Iprops> = ({ productType }) => {
  const [selectedProductManual, setSelectedProductManual] = useState(
    PRODUCT_MANUAL_DATA['air-conditioner']
  );

  useEffect(() => {
    setSelectedProductManual(PRODUCT_MANUAL_DATA[productType]);
  }, [productType]);

  const renderProduct = (type: ProductType['type']) => {
    switch (type) {
      case 'air-conditioner':
        return <Product.AirConditioner />;
      case 'freeze-protection-damper-coil':
        return <Product.DamperCoilDetail />;
    }
  };

  return (
    <ProductContainerLayout>
      <ProductManualLayout>
        <ProductComponents.ProductManual productMenu={selectedProductManual} />
      </ProductManualLayout>
      <TableLocation>{renderProduct(productType)}</TableLocation>
    </ProductContainerLayout>
  );
};

export default ProductContainer;

const PRODUCT_MANUAL_DATA: {
  [key: string]: ProductMenu;
} = {
  'air-conditioner': {
    productName: '공기조화기',
    menuList: ['구조', '선정방법', '규격표'],
  },
  'freeze-protection-damper-coil': {
    productName: '동파방지댐퍼코일',
    menuList: ['개요', '구조', '작동원리', '주의사항'],
  },

  'exhaust-unit': {
    productName: '배기유니트',
    menuList: ['개요', '적용'],
  },
  'bubble-damper': {
    productName: '버블댐퍼',
    menuList: ['개요', '적용'],
  },
  'fully-sealed-door': {
    productName: '완전밀폐도어',
    menuList: ['개요', '적용'],
  },
};
