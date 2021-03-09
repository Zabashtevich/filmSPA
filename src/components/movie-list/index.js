import React from "react";

import {
  Container,
  Wrapper,
  Item,
  Poster,
  Title,
  Placeholder,
  Error,
} from "./styles/movie-list";

export default function MovieList({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

MovieList.Wrapper = function MovieListWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

MovieList.Item = function MovieListItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

MovieList.Poster = function MovieListPoster({ children, ...rest }) {
  return <Poster {...rest}>{children}</Poster>;
};

MovieList.Title = function MovieListTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

MovieList.Placeholder = function MovieListPlaceholder({ ...rest }) {
  return <Placeholder {...rest} />;
};

MovieList.Error = function MovieListError({ children, ...rest }) {
  return <Error {...rest}>{children}</Error>;
};
