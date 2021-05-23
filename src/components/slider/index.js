import React from "react";

import {
  Section,
  Container,
  Inner,
  Item,
  Poster,
  Wrapper,
  Title,
  Row,
  Value,
  Info,
  Button,
  ArrowLeft,
  ArrowRight,
  Footer,
  Dot,
} from "./styles/slider";

export default function Slider({ children, rest }) {
  return <Section {...rest}>{children}</Section>;
}

Slider.Container = function SliderContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Slider.Inner = function SliderInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Slider.Item = function SliderItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Slider.Poster = function SliderPoster({ ...rest }) {
  return <Poster {...rest} />;
};

Slider.Wrapper = function SliderWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Slider.Title = function SliderTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Slider.Row = function SliderRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Slider.Value = function SliderValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Slider.Info = function SliderInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Slider.Button = function SliderButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Slider.ArrowLeft = function SliderArrowLeft({ children, ...rest }) {
  return <ArrowLeft {...rest} />;
};

Slider.ArrowRight = function SliderArrowRight({ children, ...rest }) {
  return <ArrowRight {...rest} />;
};

Slider.Footer = function SliderFooter({ children, ...rest }) {
  return <Footer {...rest}>{children}</Footer>;
};

Slider.Dot = function SliderDot({ children, ...rest }) {
  return <Dot {...rest} />;
};
