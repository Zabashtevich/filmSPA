import React from "react";

import {
  Inner,
  Container,
  Wrapper,
  Form,
  Submit,
  Input,
  Header,
  Trending,
  Title,
  List,
  Item,
  Content,
  Name,
  Search,
  Movie,
  Person,
  Refresh,
  Nodata,
  Subtitle,
} from "./styles/bar";

export default function Bar({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
}

Bar.Container = function BarContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Bar.Wrapper = function BarWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Bar.Form = function BarForm({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
};

Bar.Submit = function BarSubmit({ ...rest }) {
  return <Submit {...rest} />;
};

Bar.Input = function BarInput({ ...rest }) {
  return <Input {...rest} />;
};

Bar.Header = function BarHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Bar.Trending = function BarTrending({ ...rest }) {
  return <Trending {...rest} />;
};

Bar.Title = function BarTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Bar.List = function BarList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Bar.Item = function BarItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Bar.Content = function BarContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};

Bar.Name = function BarName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Bar.Search = function BarSearch({ ...rest }) {
  return <Search {...rest} />;
};

Bar.Movie = function BarMovie({ ...rest }) {
  return <Movie {...rest} />;
};

Bar.Person = function BarPerson({ ...rest }) {
  return <Person {...rest} />;
};

Bar.Refresh = function BarRefresh({ ...rest }) {
  return <Refresh {...rest} />;
};

Bar.Nodata = function BarNodata({ children, ...rest }) {
  return <Nodata {...rest}>{children}</Nodata>;
};

Bar.Subtitle = function BarSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};
