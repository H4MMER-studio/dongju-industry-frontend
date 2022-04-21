import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getProduct } from '@/utils';
import { Product } from '@/components';
import { ProductType } from '@/interfaces';
import { wrapper } from '@/store';

interface IProps {
  currentType: ProductType['type'];
}

const ProductView: React.FC<IProps> = ({ currentType }) => {
  const router = useRouter();
  const { type } = router.query as { type: ProductType['type'] };
  const currentProduct = getProduct(type ?? currentType);

  return (
    <>
      <Head>
        <title>{currentProduct.name} | 동주산업</title>
        <meta
          property="og:title"
          content={`${currentProduct.name} | 동주산업`}
          key="og:title"
        />
        <meta
          name="twitter:title"
          content={`${currentProduct.name} | 동주산업`}
          key="twitter:title"
        />
        <meta
          content={currentProduct.description}
          name="description"
          key="description"
        />
        <meta
          content={currentProduct.description}
          property="og:description"
          key="og:description"
        />
        <meta
          content={currentProduct.description}
          name="twitter:description"
          key="twitter:description"
        />
      </Head>
      <Product.Container productType={type} />
    </>
  );
};

export default ProductView;

export const getServerSideProps = wrapper.getServerSideProps(
  (_) => async (ctx) => {
    return {
      props: {
        currentType: ctx.params.type,
      },
    };
  }
);

// getServerSideProps 예제
