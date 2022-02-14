import React from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

interface Iprops {
  detailImages: string[];
}

const ProductImagesLayout = styled.div`
  width: 100%;
  height: 100%;

  .slick-dots {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 25px;
    left: 50%;
    transform: translate(-50%, 0);

    li {
      &:nth-last-child(1) {
        margin-right: 0px;
      }
    }
  }

  .custom-dot-layout {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custom-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #c8c8c8;
    margin-right: 8px;
    cursor: pointer;
  }

  .slick-active .custom-dot-layout .custom-dot {
    background-color: #2979ff;
  }
`;

const ImageLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const DetailImage = styled.img`
  width: 286px;
  height: 286px;
  object-fit: contain;

  @media (max-width: 1365px) {
    width: auto;
    height: 260px;
  }
`;

const DetailImageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 448px;
`;

const ProductImages: React.FC<Iprops> = ({ detailImages }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: () => (
      <div className="custom-dot-layout">
        <div className="custom-dot" />
      </div>
    ),
  };

  return (
    <ProductImagesLayout>
      <Slider {...settings}>
        {detailImages?.map((src) => {
          return (
            <ImageLayout key={src}>
              <DetailImageLayout>
                <DetailImage src={src} />
              </DetailImageLayout>
            </ImageLayout>
          );
        })}
      </Slider>
    </ProductImagesLayout>
  );
};

export default ProductImages;
