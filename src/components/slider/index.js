import React from "react";
import { TransitionGroup } from "react-transition-group";

import {
  Container,
  Item,
  Thumbnail,
  Img,
  Gradient,
  Metadata,
  Title,
  TagWrapper,
  TagItem,
  Dots,
  Dot,
  Description,
  Wrapper,
  Color,
  ContentContainer,
  LinkButton,
  ButtonIcon,
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
  return (
    <TransitionGroup component={ContentContainer}>{children}</TransitionGroup>
  );
};

Slider.Item = function SliderItem({ children }) {
  return <Item>{children}</Item>;
};

Slider.Thumbnail = function SliderThumbnail({ children }) {
  return <Thumbnail>{children}</Thumbnail>;
};

Slider.Img = function SliderImg({ ...rest }) {
  return <Img {...rest} />;
};

Slider.Gradient = function SliderGradient({ ...rest }) {
  return <Gradient {...rest} />;
};

Slider.Color = function SliderColor({ ...rest }) {
  return <Color {...rest} />;
};

Slider.Metadata = function SliderMetadata({ children, ...rest }) {
  return <Metadata {...rest}>{children}</Metadata>;
};

Slider.Metadata = function SliderMetadata({ children, ...rest }) {
  return <Metadata {...rest}>{children}</Metadata>;
};

Slider.Title = function SliderTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Slider.TagWrapper = function SliderTagWrapper({ children, ...rest }) {
  return <TagWrapper {...rest}>{children}</TagWrapper>;
};

Slider.TagItem = function SliderTagItem({ children, ...rest }) {
  return <TagItem {...rest}>{children}</TagItem>;
};

Slider.Description = function SliderDescription({ children, ...rest }) {
  return <Description {...rest}>{children}</Description>;
};

Slider.LinkButton = function SliderLinkButton({ children, ...rest }) {
  return <LinkButton {...rest}>{children}</LinkButton>;
};

Slider.ButtonIcon = function SliderButtonIcon() {
  return <ButtonIcon />;
};

Slider.Dots = function SliderDots({ children, ...rest }) {
  return <Dots {...rest}>{children}</Dots>;
};

Slider.Dot = function SliderDot({ ...rest }) {
  return <Dot {...rest} />;
};
