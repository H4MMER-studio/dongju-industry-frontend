import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Product } from '@/components';

const ProductDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const renderProduct = (id: string) => {
    switch (id) {
      case 'airConditioner':
        return <Product.AirConditioner />;
      case 'damperCoil':
        return <Product.DamperCoilDetail />;
    }
  };
  return <>{renderProduct(id)}</>;
};

export default ProductDetailPage;
