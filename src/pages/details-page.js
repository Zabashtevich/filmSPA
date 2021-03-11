import React from "react";
import { DetailsPanel } from "../components";

import { FooterContainer, DetailsPosterContainer } from "../containers";

export default function DetailsPage() {
  return (
    <>
      <DetailsPosterContainer />
      <DetailsPanel />
      <FooterContainer />
    </>
  );
}
