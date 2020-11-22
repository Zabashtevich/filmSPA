import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import {
  Container,
  SliderButton,
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
  SliderColor,
  SliderItemContainer,
} from "./styles/slider";

export default function Slider({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Wrapper>
        <SliderButton direction={"left"}>
          <FaAngleLeft />
        </SliderButton>
        {children}
        <SliderButton direction={"right"}>
          <FaAngleRight />
        </SliderButton>
      </Wrapper>
    </Container>
  );
}

Slider.Body = function SliderBody({ children, ...rest }) {
  return (
    <SliderItemContainer>
      <SliderItem>
        <SliderThumbnail>
          <SliderImg src={"./assets/images/slider/1.jpg"} />
          <SliderGradient />
          <SliderColor />
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
    </SliderItemContainer>
  );
};

Slider.Dots = function SliderDots({ ...rest }) {
  return (
    <SliderDotsWrapper>
      <SliderDot active={true} />
      <SliderDot />
      <SliderDot />
      <SliderDot />
      <SliderDot />
    </SliderDotsWrapper>
  );
};
