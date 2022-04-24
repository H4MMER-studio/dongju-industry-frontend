import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductType } from '@/interfaces';
import * as ProductComponents from './components';
import { Product } from '@/components';
import { mixins } from '@/styles';
import { PRODUCT_MANUAL_DATA } from '@/utils';
import { useDispatch } from 'react-redux';
import { customerServiceActions } from '@/store';
import { IForm } from '@/interfaces';
import { useRouter } from 'next/router';
import { useGetStore } from '@/hooks';

interface Iprops {
  productType: ProductType['type'];
}

const ProductContainerLayout = styled.div`
  ${mixins.flexSet('space-between', 'unset')}
  width: 100%;
  min-width: 0;
  height: 100%;
  padding-right: 8px;

  @media (max-width: 1365px) {
    display: block;
    overflow-y: auto;
  }

  @media (max-width: 1024px) {
    padding: 0 16px 0;
  }
`;

const ProductManualLayout = styled.div`
  padding: 24px 24px 0 0;

  @media (max-width: 1365px) {
    padding-right: 0px;
    margin-bottom: 48px;
  }
`;

const TableLocation = styled.section`
  width: 100%;
  min-width: 0;
  margin-right: 16px;

  @media (max-width: 1365px) {
    margin-right: 0px;
  }
`;

const ProductContainer: React.FC<Iprops> = ({ productType }) => {
  const [selectedProductManual, setSelectedProductManual] = useState(
    PRODUCT_MANUAL_DATA[productType ?? 'air-conditioner']
  );

  const [openContact, setOpenContact] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const { isSubmitSuccess } = useGetStore.customerService();

  useEffect(() => {
    if (Boolean(isSubmitSuccess)) {
      setOpenContact(false);
      dispatch(customerServiceActions.setIsSubmitSuccess(''));
    }
  }, [isSubmitSuccess]);

  useEffect(() => {
    setSelectedProductManual(PRODUCT_MANUAL_DATA[productType]);
  }, [productType]);

  const renderProduct = (type: ProductType['type']) => {
    switch (type) {
      case 'air-conditioner':
        return <Product.AirConditioner />;
      case 'freeze-protection-damper-coil':
        return <Product.DamperCoilDetail />;
      case 'exhaust-unit':
        return <Product.ExhaustUnit />;
      case 'bubble-damper':
        return <Product.BubbleDamper />;
      case 'fully-sealed-door':
        return <Product.FullySealedDoor />;
      case 'air-blower':
        return <Product.AirBlower />;
    }
  };

  const clickContact = () => {
    setOpenContact(true);
  };

  const clickSubmit = (form: IForm) => {
    dispatch(customerServiceActions.postInquiryProduct(form));
  };

  return (
    <>
      <ProductContainerLayout>
        <ProductManualLayout>
          <ProductComponents.ProductManual
            productMenu={selectedProductManual}
            clickContact={clickContact}
          />
        </ProductManualLayout>
        <TableLocation>{renderProduct(productType)}</TableLocation>
      </ProductContainerLayout>
      {openContact && (
        <ProductComponents.FormModal
          selectedProduct={productType}
          closeForm={() => setOpenContact(false)}
          clickSubmit={clickSubmit}
        />
      )}
    </>
  );
};

export default ProductContainer;
