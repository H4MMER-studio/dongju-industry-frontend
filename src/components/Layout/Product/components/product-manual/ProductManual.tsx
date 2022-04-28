import React from 'react';
import styled from 'styled-components';
import ProductImages from './ProductImages';
import Menu from './Menu';
import { ProductMenu } from '@/interfaces';

interface Iprops {
  productMenu: ProductMenu;
  clickMenu: (id: string) => void;
  clickContact: () => void;
}

const ProductMaualLayout = styled.div``;

const ProductImagesLayout = styled.div`
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  background: #ffffff;
  border-radius: 12px;
  width: 440px;
  height: 440px;
  margin-bottom: 16px;

  @media (max-width: 1365px) {
    width: 100%;
    min-height: 262px;
  }

  @media (max-width: 1365px) {
    width: 100%;
    height: 360px;
  }
`;

const ProductManual: React.FC<Iprops> = ({
  productMenu,
  clickMenu,
  clickContact,
}) => {
  return (
    <ProductMaualLayout>
      <ProductImagesLayout>
        <ProductImages detailImages={productMenu?.detailImages ?? []} />
      </ProductImagesLayout>
      <Menu
        productMenu={productMenu}
        clickMenu={clickMenu}
        clickContact={clickContact}
      />
    </ProductMaualLayout>
  );
};

export default ProductManual;
