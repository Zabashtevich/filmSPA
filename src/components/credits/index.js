import React from "react";

import {
  Container,
  Header,
  Title,
  Select,
  Value,
  Arrow,
  Wrapper,
  Option,
  List,
  Item,
  Year,
  Icon,
  Description,
  Name,
  Role,
  Meta,
  Average,
  Count,
  Highscore,
  Rating,
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

Credits.Value = function CreditsValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Credits.Arrow = function CreditsArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Credits.Wrapper = function CreditsWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Credits.Option = function CreditsOption({ children, ...rest }) {
  return <Option {...rest}>{children}</Option>;
};

Credits.List = function CreditsList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

//ITEM

Credits.Item = function CreditsItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Credits.Year = function CreditsYear({ children, ...rest }) {
  return <Year {...rest}>{children}</Year>;
};

Credits.Icon = function CreditsIcon({ ...rest }) {
  return <Icon {...rest} />;
};

Credits.Description = function CreditsDescription({ children, ...rest }) {
  return <Description {...rest}>{children}</Description>;
};

Credits.Name = function CreditsName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
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

Credits.Count = function CreditsCount({ children, ...rest }) {
  return <Count {...rest}>{children}</Count>;
};

//RATING

Credits.Highscore = function CreditsHighscore({ children, ...rest }) {
  return <Highscore {...rest}>{children}</Highscore>;
};

Credits.Rating = function CreditsRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
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
