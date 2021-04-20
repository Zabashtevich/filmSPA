import React from "react";
import { useParams } from "react-router";

import {
  FooterContainer,
  DetailsPosterContainer,
  DetailsPanelContainer,
  HeaderContainer,
} from "../containers";
import { useFetch } from "../hooks";

export default function DetailsPage() {
  const { direction, slug } = useParams();

  const [data, loading] = useFetch(direction, slug, true);

  return (
    <>
      <HeaderContainer />
      <DetailsPosterContainer data={data} loading={loading} />
      <DetailsPanelContainer data={data} loading={loading} />
      <FooterContainer />
    </>
  );
}
