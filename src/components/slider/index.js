import React from "react";
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group";

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
    <TransitionGroup component={SliderItemContainer}>
      {data.map((item) => {
        return (
          <CSSTransition
            classNames="fade"
            timeout={250}
            appear={true}
            in={!!data}
            key={item.image}
          >
            <SliderItem>
              <SliderThumbnail>
                <SliderImg src={`./assets/images/slider/${item.image}.jpg`} />
                <SliderGradient color={item.color} />
                <SliderColor color={item.color} />
              </SliderThumbnail>
              <SliderMetaData>
                <SliderTitle to={"/"}>{item.film}</SliderTitle>
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
    </TransitionGroup>
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
