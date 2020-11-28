import React from "react";

import { Container, Section, Item, ItemLink } from "./styles/footer";

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}

Footer.Section = function FooterSection({ children }) {
  return <Section>{children}</Section>;
};

Footer.SectionItem = function FooterSectionItem() {
  return (
    <Item>
      <ItemLink>{children}</ItemLink>
    </Item>
  );
};
