import React from "react";
import { CSSTransition } from "react-transition-group";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  SliderLinkButton,
  SliderLinkButtonIcon,
} from "./styles/slider";

export default function Slider({
  slidesLength,
  sliderIndex,
  setSliderIndex,
  children,
  setAnimationSide,
  ...rest
}) {
  return (
    <Container {...rest}>
      <Wrapper>
        {sliderIndex !== 0 ? (
          <SliderButton
            direction={"left"}
            onClick={() => setSliderIndex((prev) => --prev)}
          >
            <FaChevronLeft />
          </SliderButton>
        ) : null}
        {children}
        {sliderIndex !== slidesLength - 1 ? (
          <SliderButton
            direction={"right"}
            onClick={() => setSliderIndex((prev) => ++prev)}
          >
            <FaChevronRight />
          </SliderButton>
        ) : null}
      </Wrapper>
    </Container>
  );
}

Slider.Body = function SliderBody({ data, children, ...rest }) {
  return (
    <SliderItemContainer {...rest}>
      {data.map((item) => {
        return (
          <CSSTransition
            in={!!data}
            appear={true}
            key={item.image}
            timeout={100}
            classNames="fade"
          >
            <SliderItem>
              <SliderThumbnail>
                <SliderImg src={`./assets/images/slider/${item.image}.jpg`} />
                <SliderGradient color={item.color} />
                <SliderColor color={item.color} />
              </SliderThumbnail>
              <SliderMetaData>
                <SliderTitle>{item.film}</SliderTitle>
                <SliderTagWrapper>
                  {item.genres.map((item, _) => (
                    <SliderTagItem key={_}>{item}</SliderTagItem>
                  ))}
                </SliderTagWrapper>
                <SliderDescription>{item.description}</SliderDescription>
              </SliderMetaData>
              <SliderLinkButton>
                <SliderLinkButtonIcon />
              </SliderLinkButton>
            </SliderItem>
          </CSSTransition>
        );
      })}
    </SliderItemContainer>
  );
};

Slider.Dots = function SliderDots({
  setSliderIndex,
  sliderIndex,
  data,
  ...rest
}) {
  return (
    <SliderDotsWrapper {...rest}>
      {data.map((_, index) => (
        <SliderDot
          onClick={() => setSliderIndex(index)}
          active={sliderIndex === index ? true : null}
          key={index}
        />
      ))}
    </SliderDotsWrapper>
  );
};
