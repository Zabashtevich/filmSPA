import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  Header,
  Title,
  Select,
  Popup,
  Value,
  Arrow,
  List,
  Item,
  Year,
  Icon,
  Wrapper,
  Subtitle,
  Role,
  Meta,
  Rating,
  Average,
  Amount,
  Button,
} from "./styles/credits";

export default function Credits({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Credits.Header = function CreditsHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Credits.Title = function CreditsTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Credits.Select = function CreditsSelect({ children, ...rest }) {
  return <Select {...rest}>{children}</Select>;
};

Credits.Popup = function CreditsPopup({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      timeout={500}
      classNames="slide"
      appear={true}
      mountOnEnter
      unmountOnExit
    >
      <Popup {...rest} onClick={(e) => e.stopPropagation()}>
        {children}
      </Popup>
    </CSSTransition>
  );
};

Credits.Value = function CreditsValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Credits.Arrow = function CreditsArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Credits.List = function CreditsList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Credits.Item = function CreditsItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Credits.Year = function CreditsYear({ children, ...rest }) {
  return <Year {...rest}>{children}</Year>;
};

Credits.Icon = function CreditsIcon({ ...rest }) {
  return <Icon {...rest} />;
};

Credits.Wrapper = function CreditsWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Credits.Subtitle = function CreditsSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
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

Credits.Button = function CreditsButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
