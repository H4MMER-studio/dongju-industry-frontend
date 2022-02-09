import React from 'react';
import styled from 'styled-components';
import { ProductType } from '@/interfaces';
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

const ProductContainer: React.FC<Iprops> = ({ productType }) => {
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
        <ProductComponents.ProductManual />
      </ProductManualLayout>
      <TableLocation>{renderProduct(productType)}</TableLocation>
    </ProductContainerLayout>
  );
};

export default ProductContainer;

const TableLocation = styled.div``;
