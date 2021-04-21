import React from "react";
import { useParams } from "react-router";

import {
  FooterContainer,
  DetailsPosterContainer,
  DetailsPanelContainer,
  HeaderContainer,
  ProcessContainer,
  ModalContainer,
} from "../containers";
import { useFetch } from "../hooks";

export default function DetailsPage() {
  const { direction, slug } = useParams();

  const [data, loading] = useFetch({
    type: direction,
    target: slug,
    querries: true,
  });

  return (
    <>
      <HeaderContainer />
      <ProcessContainer />
      <ModalContainer />
      <DetailsPosterContainer data={data} dataLoading={loading} />
      <DetailsPanelContainer data={data} dataLoading={loading} />
      <FooterContainer />
    </>
  );
}
