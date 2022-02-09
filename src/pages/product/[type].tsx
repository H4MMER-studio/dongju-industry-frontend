import React from 'react';
import Router, { useRouter } from 'next/router';
import { Product } from '@/components';
import { ProductType } from '@/interfaces';

const ProductView: React.FC = () => {
  const query = useRouter().query as { type: ProductType['type'] };

  return <Product.Container productType={query.type} />;
};

export default ProductView;
