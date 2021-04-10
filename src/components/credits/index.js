import React from "react";

import {
  Section,
  Item,
  Year,
  Title,
  Meta,
  Average,
  Count,
  Highscore,
  Rating,
  Star,
  Container,
  Close,
} from "./styles/credits";

export default function Credits({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
}

Credits.Item = function CreditsItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Credits.Year = function CreditsYear({ children, ...rest }) {
  return <Year {...rest}>{children}</Year>;
};

Credits.Title = function CreditsTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Credits.Meta = function CreditsMeta({ children, ...rest }) {
  return <Meta {...rest}>{children}</Meta>;
};

Credits.Average = function CreditsAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

Credits.Count = function CreditsCount({ children, ...rest }) {
  return <Count {...rest}>{children}</Count>;
};

Credits.Highscore = function CreditsHighscore({ children, ...rest }) {
  return <Highscore {...rest}>{children}</Highscore>;
};

Credits.Rating = function CreditsRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

Credits.Star = function CreditsStar({ children, ...rest }) {
  return <Star {...rest} />;
};

Credits.Container = function CreditsContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Credits.Close = function CreditsClose({ children, ...rest }) {
  return <Close {...rest} />;
};
