import React from "react";

import {
  Container,
  Item,
  Thumbnail,
  Img,
  Gradient,
  SliderMetaData,
  SliderTitle,
  SliderTagWrapper,
  SliderTagItem,
  SliderDotsWrapper,
  SliderDot,
  SliderDescription,
  Wrapper,
  Color,
  ContentContainer,
  SliderLinkButton,
  SliderLinkButtonIcon,
  Button,
} from "./styles/slider";

export default function Slider({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Slider.Button = function SliderButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Slider.ContentWrapper = function SliderContentWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Slider.ContentContainer = function SliderContentContainer({ children }) {
  return <ContentContainer>{children}</ContentContainer>;
};

Slider.Item = function SliderItem({ children }) {
  return <Item>{children}</Item>;
};

Slider.Thumbnail = function SliderThumbnail({ children }) {
  return <Thumbnail>{children}</Thumbnail>;
};

Slider.Img = function SliderImg({ ...rest }) {
  <Img {...rest} />;
};

Slider.Gradient = function SliderGradient({ ...rest }) {
  <Gradient {...rest} />;
};

Slider.Color = function SliderColor({ ...rest }) {
  <Color {...rest} />;
};

Slider.Body = function SliderBody({ data, children, ...rest }) {
  return (
    <>
      <SliderMetaData>
        <SliderTitle to={"/"}>{item.film}</SliderTitle>
        <SliderTagWrapper>
          {item.genres.map((item, _) => (
            <SliderTagItem key={_}>{item}</SliderTagItem>
          ))}
        </SliderTagWrapper>
        <SliderDescription>{item.description}</SliderDescription>
      </SliderMetaData>
      <SliderLinkButton to={"/"}>
        <SliderLinkButtonIcon />
      </SliderLinkButton>
    </>
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
