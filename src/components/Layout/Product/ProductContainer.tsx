import React from 'react';
import styled from 'styled-components';
import { ProductType } from '@/interfaces';
import * as ProductComponents from './components';

interface Iprops {
  productType: ProductType['type'];
}

const ProductContainerLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  return (
    <ProductContainerLayout>
      <ProductManualLayout>
        <ProductComponents.ProductManual />
      </ProductManualLayout>
      <TableLocation>테이블 위치</TableLocation>
    </ProductContainerLayout>
  );
};

export default ProductContainer;

const TableLocation = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`;
