import React from "react";
import { useSelector } from "react-redux";
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
  const { userDataLoading, lists, loggedIn } = useSelector(
    (state) => state.userData,
  );
  const { direction, slug } = useParams();

  const [data, dataLoading] = useFetch({
    type: direction,
    target: slug,
    querries: true,
  });

  return (
    <>
      {/* <HeaderContainer />
      <ProcessContainer />
      <ModalContainer /> */}
      {/* <DetailsPosterContainer
        data={data}
        loading={dataLoading || userDataLoading}
        lists={lists}
        loggedIn={loggedIn}
      /> */}
      <DetailsPanelContainer data={data} dataLoading={dataLoading} />
      {/* <FooterContainer /> */}
    </>
  );
}
