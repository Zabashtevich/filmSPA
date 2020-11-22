import React from "react";

import {
  Container,
  SliderButtonPrev,
  SliderButtonNext,
  SliderItem,
  SliderThumbnail,
  SliderImg,
  SliderGradient,
  SliderMetaData,
  SliderTitle,
  SliderTagWrapper,
  SliderTagItem,
  SliderDotsWrapper,
  SliderDot,
  SliderDescription,
  Wrapper,
} from "./styles/slider";

export default function Slider({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Wrapper>
        <SliderButtonPrev />
        {children}
        <SliderButtonNext />
      </Wrapper>
    </Container>
  );
}

Slider.Body = function SliderBody({ children, ...rest }) {
  return (
    <>
      <SliderItem>
        <SliderThumbnail>
          <SliderImg src={"./assets/images/slider/1.jpg"} />
          <SliderGradient />
        </SliderThumbnail>
        <SliderMetaData>
          <SliderTitle>Once Upon a Time... in Hollywood</SliderTitle>
          <SliderTagWrapper>
            <SliderTagItem>Commedy</SliderTagItem>
            <SliderTagItem>Drama</SliderTagItem>
            <SliderTagItem>2019</SliderTagItem>
          </SliderTagWrapper>
          <SliderDescription>
            In 1969 Los Angeles, a former Western star and his longtime stunt
            double struggle to find success in a Hollywood that they don't
            recognize ...
          </SliderDescription>
        </SliderMetaData>
      </SliderItem>
      <SliderItem>
        <SliderThumbnail>
          <SliderImg src={"./assets/images/slider/2.jpg"} />
          <SliderGradient />
        </SliderThumbnail>
        <SliderMetaData>
          <SliderTitle>123</SliderTitle>
          <SliderTagWrapper>
            <SliderTagItem>123</SliderTagItem>
          </SliderTagWrapper>
          <SliderDescription>sdfsdf</SliderDescription>
        </SliderMetaData>
      </SliderItem>
      <SliderItem>
        <SliderThumbnail>
          <SliderImg src={"./assets/images/slider/3.jpg"} />
          <SliderGradient />
        </SliderThumbnail>
        <SliderMetaData>
          <SliderTitle>123</SliderTitle>
          <SliderTagWrapper>
            <SliderTagItem>123</SliderTagItem>
          </SliderTagWrapper>
          <SliderDescription>sdfsdf</SliderDescription>
        </SliderMetaData>
      </SliderItem>
      <SliderItem>
        <SliderThumbnail>
          <SliderImg src={"./assets/images/slider/4.jpg"} />
          <SliderGradient />
        </SliderThumbnail>
        <SliderMetaData>
          <SliderTitle>123</SliderTitle>
          <SliderTagWrapper>
            <SliderTagItem>123</SliderTagItem>
          </SliderTagWrapper>
          <SliderDescription>sdfsdf</SliderDescription>
        </SliderMetaData>
      </SliderItem>
      <SliderItem>
        <SliderThumbnail>
          <SliderImg src={"./assets/images/slider/5.jpg"} />
          <SliderGradient />
        </SliderThumbnail>
        <SliderMetaData>
          <SliderTitle>123</SliderTitle>
          <SliderTagWrapper>
            <SliderTagItem>123</SliderTagItem>
          </SliderTagWrapper>
          <SliderDescription>sdfsdf</SliderDescription>
        </SliderMetaData>
      </SliderItem>
    </>
  );
};

Slider.Dots = function SliderDots({ ...rest }) {
  return (
    <SliderDotsWrapper>
      <SliderDot />
    </SliderDotsWrapper>
  );
};
