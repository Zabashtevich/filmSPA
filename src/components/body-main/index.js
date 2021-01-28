import React from "react";

import { Main, Section, BodyWrapper, Inner, Wrapper } from "./styles/body-main";

export default function BodyMain({ children, ...rest }) {
  return (
    <BodyWrapper {...rest}>
      <Main>{children}</Main>
    </BodyWrapper>
  );
}

BodyMain.Section = function BodyMainSection({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
};

BodyMain.Wrapper = function BodyMainWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

BodyMain.Inner = function BodyMainInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};
