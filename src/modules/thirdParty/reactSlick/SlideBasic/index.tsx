import React from 'react';
import AppCard from '@crema/components/AppCard';
import Slider from 'react-slick';
import MediaSlider from './MediaSlider';
import { StyledSlickBasicContainer, StyledSlickWrapper } from '../index.styled';
import { SlideBasicType } from '@crema/types/models/thirdParty/reactSlick';
import Image from 'next/image';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type Props = {
  slideBasic: SlideBasicType[];
};

const SlideBasic = ({ slideBasic }: Props) => {
  return (
    <AppCard>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasic.map((slide, index) => (
            <StyledSlickBasicContainer key={index}>
              <StyledSlickWrapper>
                <Image
                  src={slide.srcImg}
                  alt={slide.title}
                  width={698}
                  height={310}
                />
              </StyledSlickWrapper>
            </StyledSlickBasicContainer>
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasic;
