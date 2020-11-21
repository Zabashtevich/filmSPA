import React from "react";

import { Main, Section, BodyWrapper } from "./styles/body-main";

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
