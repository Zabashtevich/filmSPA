import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
  Container,
  Item,
  Year,
  Number,
  Title,
  Meta,
  Average,
  Amount,
  Value,
  Wrapper,
  Rating,
  Star,
  Popup,
  Close,
  Widget,
  Arrow,
  Name,
  Favorite,
  Subtitle,
  Userlist,
} from "./styles/credits";

export default function Credits({ children, ...rest }) {
  return (
    <TransitionGroup component={Container} {...rest}>
      {children}
    </TransitionGroup>
  );
}

Credits.Item = function CreditsItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Credits.Number = function CreditsNumber({ children, ...rest }) {
  return <Number {...rest}>{children}</Number>;
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

Credits.Amount = function CreditsAmount({ children, ...rest }) {
  return <Amount {...rest}>{children}</Amount>;
};

Credits.Value = function CreditsValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Credits.Wrapper = function CreditsWrapper({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      timeout={500}
      appear={true}
      mountOnEnter
      unmountOnExit
    >
      <Wrapper {...rest}>{children}</Wrapper>
    </CSSTransition>
  );
};

Credits.Rating = function CreditsRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

Credits.Star = function CreditsStar({ ...rest }) {
  return <Star {...rest} />;
};

Credits.Popup = function CreditsPopup({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="slide"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Popup {...rest}>{children}</Popup>
    </CSSTransition>
  );
};

Credits.Close = function CreditsClose({ ...rest }) {
  return <Close {...rest} />;
};

Credits.Widget = function CreditsWidget({ children, ...rest }) {
  return <Widget {...rest}>{children}</Widget>;
};

Credits.Arrow = function CreditsArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Credits.Name = function CreditsName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Credits.Favorite = function CreditsFavorite({ children, ...rest }) {
  return <Favorite {...rest}>{children}</Favorite>;
};

Credits.Subtitle = function CreditsSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Credits.Userlist = function CreditsUserlist({ children, ...rest }) {
  return <Userlist {...rest}>{children}</Userlist>;
};
