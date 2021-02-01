import React from "react";

import { Footer } from "../../components";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Section>
        <Footer.SectionItem>FAQ</Footer.SectionItem>
        <Footer.SectionItem>Contact us</Footer.SectionItem>
        <Footer.SectionItem>Help Centre</Footer.SectionItem>
        <Footer.SectionItem>Corporate Information</Footer.SectionItem>
      </Footer.Section>
      <Footer.Section>
        <Footer.SectionItem>Jobs</Footer.SectionItem>
        <Footer.SectionItem>Terms of Use</Footer.SectionItem>
        <Footer.SectionItem>Account</Footer.SectionItem>
        <Footer.SectionItem>Ways to Watch</Footer.SectionItem>
      </Footer.Section>
      <Footer.Section>
        <Footer.SectionItem>Media Centre</Footer.SectionItem>
        <Footer.SectionItem>Legal Notices</Footer.SectionItem>
        <Footer.SectionItem>Buy gift cards</Footer.SectionItem>
        <Footer.SectionItem>Speed Test</Footer.SectionItem>
      </Footer.Section>
    </Footer>
  );
}
