import React from "react";

import {
  Container,
  Slide,
  Item,
  Poster,
  Gradient,
  Info,
  Title,
  Genres,
  Overview,
  Wrapper,
  Dot,
  Left,
  Right,
} from "./styles/slider";

export default function Slider({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Slider.Slide = function SliderSlide({ children, ...rest }) {
  return <Slide {...rest}>{children}</Slide>;
};

Slider.Item = function SliderItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Slider.Poster = function SliderPoster({ src, ...rest }) {
  return <Poster {...rest} src={`./assets/images/slider/${src}.jpg`} />;
};

Slider.Gradient = function SliderGradient({ children, ...rest }) {
  return <Gradient {...rest}>{children}</Gradient>;
};

Slider.Info = function SliderInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Slider.Title = function SliderTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Slider.Genres = function SliderGenres({ children, ...rest }) {
  return <Genres {...rest}>{children}</Genres>;
};

Slider.Overview = function SliderOverview({ children, ...rest }) {
  return <Overview {...rest}>{children}</Overview>;
};

Slider.Wrapper = function SliderWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Slider.Dot = function SliderDot({ children, ...rest }) {
  return <Dot {...rest}>{children}</Dot>;
};

Slider.Left = function SliderLeft({ children, ...rest }) {
  return <Left {...rest}>{children}</Left>;
};

Slider.Right = function SliderRight({ children, ...rest }) {
  return <Right {...rest}>{children}</Right>;
};
