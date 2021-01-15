import React from "react";

import {
  Container,
  Nickname,
  Wrapper,
  RatedContainer,
  RatedItemWrapper,
} from "./styles/account";

export default function Account({ Children, ...rest }) {
  return <Container {...rest}>{Children}</Container>;
}

Account.Nickname = function AccountNickname({ Children, ...rest }) {
  return <Nickname {...rest}>{Children}</Nickname>;
};

Account.Wrapper = function AccountWrapper({ Children, ...rest }) {
  return <Wrapper {...rest}>{Children}</Wrapper>;
};

Account.RatedContainer = function AccountRatedContainer({ Children, ...rest }) {
  return <RatedContainer {...rest}>{Children}</RatedContainer>;
};

Account.RatedItemWrapper = function AccountRatedItemWrapper({
  Children,
  ...rest
}) {
  return <RatedItemWrapper {...rest}>{Children}</RatedItemWrapper>;
};
