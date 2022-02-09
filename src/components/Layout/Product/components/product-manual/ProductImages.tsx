import React from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

const ProductImagesLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductImages: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
  };

  return (
    <ProductImagesLayout>
      <Slider {...settings}>
        {['Test', 'test2', 'test3', 'test4', 'test5'].map((v) => {
          return <ImageLayout>{v}</ImageLayout>;
        })}
      </Slider>
    </ProductImagesLayout>
  );
};

export default ProductImages;
