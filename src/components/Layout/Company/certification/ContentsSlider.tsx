import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import { Icon } from 'public/image';
import { mixins } from '@/styles';
import { ICertificationMenuType, ICertification } from '@/interfaces';
import useResize from '@/hooks/useResize';

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

  @media (max-width: 768px) {
    font-size: 20px;
  }
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

const SlideIconLayout = styled.div<{ getPadding: 'LEFT' | 'RIGHT' }>`
  ${mixins.flexSet()}
  cursor: pointer;
  width: 72px;
  height: 72px;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    padding-right: ${(props) => (props.getPadding === 'RIGHT' ? 2 : 0)}px;
    padding-left: ${(props) => (props.getPadding === 'LEFT' ? 2 : 0)}px;
  }
`;

const CertificationImage = styled.img`
  width: 356px;
  height: 503px;
  background-color: gray;
  margin: 0 auto;
`;

const PrevArrowLayout = styled.div<{ isDisplay: boolean }>`
  ${mixins.flexSet()}
  position: absolute;
  left: 0px;
  top: 50%;
  z-index: 10000;
  width: 72px;
  height: 72px;
  transform: translateY(-50%);
  display: ${(props) => (props.isDisplay ? 'block' : 'none')};

  @media (max-width: 1154px) {
    left: 85px;
    background: rgba(85, 85, 85, 0.2);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    left: 21px;
  }
`;

const NextArrowLayout = styled.div`
  ${mixins.flexSet()}
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  width: 72px;
  height: 72px;

  @media (max-width: 1154px) {
    right: 85px;
    top: 49.8%;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    right: 21px;
    z-index: 10000;
    background: rgba(85, 85, 85, 0.2);
  }
`;

const InfoLayout = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  margin-top: 20px;
  margin-bottom: 34px;
  min-height: 51px;

  .title {
    font-size: 20px;
    color: #e8e8e8;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  .contents {
    font-size: 20px;
    color: #e8e8e8;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CertificationListScrollLayout = styled.div`
  width: 100%;
  padding: 0 25px;
  overflow-x: scroll;
`;

const CertificationListLayout = styled.div<{ width: number }>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width}px;
  /* flex-wrap: nowrap; */
`;

const CertificationSmllImage = styled.img<{ selected: boolean }>`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 24px;
  border-radius: 12px;
  border: ${(props) => (props.selected ? '3px solid #2979FF' : 'none')};
  cursor: pointer;

  &:nth-last-child(1) {
    margin-right: 0px;
  }
`;

const LoadingLayout = styled.div`
  height: 100%;
  width: 951px;
  height: 656px;
`;

const ContentsSlider: React.VFC<Iprops> = ({ type, certificationList }) => {
  const [slide, setSlide] = useState<Slider>();
  const [slideNumber, setSlideNumber] = useState(0);
  const [initRender, setInitRender] = useState(false);
  const { width } = useResize();

  useEffect(() => {
    if (slide) {
      slide.slickGoTo(0);
    }

    if (!initRender) {
      setInitRender(true);

      setTimeout(() => {
        setInitRender(false);
      }, 300);
    }

    setSlideNumber(0);
  }, [type]);

  const setDate = (date: string) => {
    const yearMonthDay = date.substring(0, 10);

    return yearMonthDay.replaceAll('-', '.');
  };

  const clickCertification = (index: number) => {
    slide.slickGoTo(index);
    setSlideNumber(index);
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    customPaging: () => (
      <div className="custom-dot-layout">
        <div className="custom-dot" />
      </div>
    ),
    afterChange: (currentSlider) => {
      setSlideNumber(currentSlider);
    },
    prevArrow: (
      <PrevArrowLayout isDisplay={slideNumber > 0}>
        <SlideIconLayout getPadding="RIGHT">
          {width > 768 ? <Icon.LargeLeftArrow /> : <Icon.SmallLeftArrow />}
        </SlideIconLayout>
      </PrevArrowLayout>
    ),

    nextArrow: (
      <NextArrowLayout>
        <SlideIconLayout getPadding="LEFT">
          {width > 768 ? <Icon.LargeRightArrow /> : <Icon.SmallRightArrow />}
        </SlideIconLayout>
      </NextArrowLayout>
    ),
  };

  return (
    <ContentsSliderLayout>
      <Slider {...settings} ref={(slider) => setSlide(slider)}>
        {certificationList.map((certification) => {
          return !initRender ? (
            <Layout key={certification._id}>
              <Title>{certification.certification_title}</Title>
              <CertificationImage
                src={certification.certification_images[0]?.url}
                alt={'인증서 사진'}
              />
              <InfoLayout>
                {certification.certification_organization && (
                  <>
                    <span className="title">시험기관: </span>
                    <span className="contents">
                      {certification.certification_organization}
                    </span>
                  </>
                )}
                <br />
                {certification.certification_start_date && (
                  <>
                    <span className="title">시험기간: </span>
                    <span className="contents">
                      {setDate(certification.certification_start_date)}
                    </span>
                  </>
                )}
              </InfoLayout>
            </Layout>
          ) : (
            <LoadingLayout />
          );
        })}
      </Slider>
      <CertificationListScrollLayout>
        {
          <CertificationListLayout width={certificationList.length * 144 - 24}>
            {certificationList.map((certification, index) => (
              <>
                <CertificationSmllImage
                  src={certification.certification_images[0]?.url}
                  alt={'인증서 리스트에 보여지는 사진'}
                  key={certification._id}
                  selected={slideNumber === index}
                  onClick={() => clickCertification(index)}
                />
              </>
            ))}
          </CertificationListLayout>
        }
      </CertificationListScrollLayout>
    </ContentsSliderLayout>
  );
};

export default ContentsSlider;
