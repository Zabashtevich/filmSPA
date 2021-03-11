import React from "react";
import { w200miniature } from "../../constants/constants";

import {
  Container,
  Wrapper,
  Item,
  Poster,
  Title,
  Placeholder,
  Error,
  Inner,
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

MovieList.Inner = function MovieListInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

MovieList.Poster = function MovieListPoster({ src, children, ...rest }) {
  return (
    <Poster {...rest} src={`${w200miniature + src}`}>
      {children}
    </Poster>
  );
};

MovieList.Title = function MovieListTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

MovieList.Placeholder = function MovieListPlaceholder({ ...rest }) {
  return (
    <Placeholder {...rest} src={`https://dummyimage.com/200x110/aaa/aaa`} />
  );
};

MovieList.Error = function MovieListError({ children, ...rest }) {
  return <Error {...rest}>{children}</Error>;
};
