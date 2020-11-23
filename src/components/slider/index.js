import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
  setIndex,
  children,
  setAnimationRight,
  ...rest
}) {
  return (
    <Container {...rest}>
      <Wrapper>
        {sliderIndex !== 0 ? (
          <SliderButton
            direction={"left"}
            onClick={() => setIndex((prev) => --prev)}
          >
            <FaChevronLeft />
          </SliderButton>
        ) : null}
        {children}
        {sliderIndex !== slidesLength - 1 ? (
          <SliderButton
            direction={"right"}
            onClick={() => {
              setIndex((prev) => ++prev);
              setAnimationRight(true);
            }}
          >
            <FaChevronRight />
          </SliderButton>
        ) : null}
      </Wrapper>
    </Container>
  );
}

Slider.Body = function SliderBody({ animationRight, data, children, ...rest }) {
  return (
    <SliderItemContainer {...rest}>
      {data.map((item) => {
        return (
          <CSSTransition classNames="fade" timeout={3000} key={item.image}>
            <SliderItem animationRight={animationRight}>
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

Slider.Dots = function SliderDots({ sliderIndex, data, ...rest }) {
  return (
    <SliderDotsWrapper {...rest}>
      {data.map((item, _) => (
        <SliderDot active={sliderIndex === _ ? true : null} key={_} />
      ))}
    </SliderDotsWrapper>
  );
};
