import React from "react";

import { Main, TitleBackground } from "./styles/body-main";

export default function BodyMain({ children, ...rest }) {
  return <Main {...rest}>{children}</Main>;
}

// BodyMain.Section = function BodyMainSection({ children, ...rest }) {
//   return <Section {...rest}>{children}</Section>;
// };

BodyMain.TitleBackground = function BodyMainTitleBackground({ ...rest }) {
  return <TitleBackground {...rest} />;
};
