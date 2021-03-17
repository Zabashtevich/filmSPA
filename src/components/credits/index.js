import React from "react";

import {
  Container,
  Header,
  Title,
  Select,
  Option,
  List,
  Item,
  Year,
  Icon,
  Info,
  Subtitle,
  Role,
  Meta,
  Average,
  Amount,
  Uservalue,
  Wrapper,
  Star,
  Popup,
  Close,
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

Credits.Option = function CreditsOption({ children, ...rest }) {
  return <Option {...rest}>{children}</Option>;
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

Credits.Icon = function CreditsIcon({ children, ...rest }) {
  return <Icon {...rest} />;
};

Credits.Info = function CreditsInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
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

Credits.Uservalue = function CreditsUservalue({ children, ...rest }) {
  return <Uservalue {...rest}>{children}</Uservalue>;
};

Credits.Wrapper = function CreditsWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Credits.Star = function CreditsStar({ ...rest }) {
  return <Star {...rest} />;
};

Credits.Popup = function CreditsPopup({ children, ...rest }) {
  return <Popup {...rest}>{children}</Popup>;
};

Credits.Close = function CreditsClose({ ...rest }) {
  return <Close {...rest} />;
};
