import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import { Icon } from 'public/image';
import { ICertificationMenuType, ICertification } from '@/interfaces';

interface Iprops {
  type: ICertificationMenuType;
  certificationList: ICertification[];
}

const ContentsSliderLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  text-align: center;
  color: #e8e8e8;
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  margin-bottom: 20px;
`;

const SliderLayout = styled.div`
  width: 356px;
  height: 503px;
  margin: 0 auto;

  .slick-prev {
    position: absolute;
    left: -44%;
    bottom: 50%;
    z-index: 10;
  }

  .slick-next {
    position: absolute;
    right: -44%;
    bottom: 50%;
    z-index: 10;
  }
`;

const SlideIconLayout = styled.div`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 72px;
  height: 72px;
`;

const CertificationImage = styled.img`
  width: 356px;
  height: 503px;
  background-color: red;
  margin: 0 auto;
`;

const PrevArrowLayout = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
`;

const InfoLayout = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  margin-top: 20px;
  margin-bottom: 34px;

  .title {
    font-size: 20px;
    color: #e8e8e8;
    font-weight: 600;
  }

  .contents {
    font-size: 20px;
    color: #e8e8e8;
  }
`;

const ListScrollLayout = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ContentsSlider: React.VFC<Iprops> = ({ type, certificationList }) => {
  // const [certificationInfo, setCertificationInfo] = useState<ICertification>();

  // console.log(certificationList, '아 왜');

  // useEffect(() => {
  //   if (certificationList?.length > 0) {
  //     setCertificationInfo(certificationList[0]);
  //   }
  // }, [type]);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: () => (
      <div className="custom-dot-layout">
        <div className="custom-dot" />
      </div>
    ),
    prevArrow: (
      <PrevArrowLayout>
        <SlideIconLayout>
          <Icon.LargeLeftArrow />
        </SlideIconLayout>
      </PrevArrowLayout>
    ),
    nextArrow: (
      <SlideIconLayout>
        <Icon.LargeRightArrow />
      </SlideIconLayout>
    ),
  };

  return (
    <ContentsSliderLayout>
      <Slider {...settings}>
        {certificationList.map((certification) => {
          return (
            <Layout key={certification._id}>
              <Title>{certification.certification_title}</Title>
              <CertificationImage
                src={certification.certification_images[0]?.url}
                alt={'인증서 사진'}
              />
            </Layout>
          );
        })}
      </Slider>
      {/* <div>
        <Title>{certificationInfo?.certification_title}</Title>
        <SliderLayout>
          <Slider {...settings}>
            {certificationInfo?.certification_images.map((image) => (
              <CertificationImage
                src={image.url}
                id={image.url}
                alt={'인증서 사진'}
              />
            ))}
          </Slider>
        </SliderLayout>
        <InfoLayout>
          <span className="title">시험기간: </span>
          <span className="contents">(주)한국필터시험원</span>
          <br />
          <span className="title">시험기관: </span>
          <span className="contents">(주)한국필터시험원</span>
        </InfoLayout>
        <ListScrollLayout></ListScrollLayout>
      </div> */}
    </ContentsSliderLayout>
  );
};

export default ContentsSlider;
