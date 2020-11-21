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
  SliderGenreWrapper,
  SliderGenreItem,
  SliderDotsWrapper,
  SliderDot,
} from "./styles/body-main";

export default function Slider({ children, ...rest }) {
  return (
    <Container {...rest}>
      <SliderButtonPrev />
      {children}
      <SliderButtonNext />
    </Container>
  );
}

Slider.Body = function SliderBody({ children, ...rest }) {
  return (
    <SliderItem>
      <SliderThumbnail>
        <SliderImg />
        <SliderGradient />
      </SliderThumbnail>
      <SliderMetaData>
        <SliderTitle>123</SliderTitle>
        <SliderGenreWrapper>
          <SliderGenreItem>123</SliderGenreItem>
        </SliderGenreWrapper>
        <SliderDescription>sdfsdf</SliderDescription>
      </SliderMetaData>
    </SliderItem>
  );
};

Slider.Dots = function SliderDots({ ...rest }) {
  return (
    <SliderDotsWrapper>
      <SliderDot />
    </SliderDotsWrapper>
  );
};
