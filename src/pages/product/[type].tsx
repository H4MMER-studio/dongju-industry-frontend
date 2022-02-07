import React from 'react';
import Router from 'next/router';
import { Product } from '@/components';

const ProductView: React.FC = () => {
  const route = Router;

  return <Product.Container />;
};

export default ProductView;
