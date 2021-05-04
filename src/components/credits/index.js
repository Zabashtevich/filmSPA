import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Section,
  Title,
  Inner,
  Item,
  Year,
  Subtitle,
  Meta,
  Average,
  Count,
  Highscore,
  Rating,
  Star,
  Container,
  Close,
  Placeholder,
} from "./styles/credits";

export default function Credits({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
}

Credits.Title = function CreditsTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Credits.Inner = function CreditsInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Credits.Item = function CreditsItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Credits.Year = function CreditsYear({ children, ...rest }) {
  return <Year {...rest}>{children}</Year>;
};

Credits.Subtitle = function CreditsSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
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

Credits.Container = function CreditsContainer({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="slide"
      timeout={500}
      appear={true}
      mountOnEnter
      unmountOnExit
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
};

Credits.Close = function CreditsClose({ children, ...rest }) {
  return <Close {...rest} />;
};

Credits.Placeholder = function CreditsPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};
