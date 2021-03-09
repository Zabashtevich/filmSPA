import React from "react";

import {
  Container,
  Title,
  Item,
  Year,
  Icon,
  Wrapper,
  Meta,
  Average,
  Amount,
  Rating,
  Value,
  Star,
} from "./styles/credits";

export default function Credits({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Credits.Title = function CreditsTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Credits.Item = function CreditsItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Credits.Year = function CreditsYear({ children, ...rest }) {
  return <Year {...rest}>{children}</Year>;
};

Credits.Icon = function CreditsIcon({ children, ...rest }) {
  return <Icon {...rest}>{children}</Icon>;
};

Credits.Wrapper = function CreditsWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Credits.Title = function CreditsTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Credits.Role = function CreditsRole({ children, ...rest }) {
  return <Role {...rest}>{children}</Role>;
};

Credits.Meta = function CreditsMeta({ children, ...rest }) {
  return <Meta {...rest}>{children}</Meta>;
};

Credits.Average = function CreditsAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

Credits.Amount = function CreditsAmount({ children, ...rest }) {
  return <Amount {...rest}>{children}</Amount>;
};

Credits.Rating = function CreditsRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

Credits.Value = function CreditsValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Credits.Star = function CreditsStar({ children, ...rest }) {
  return <Star {...rest}>{children}</Star>;
};
