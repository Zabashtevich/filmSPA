import React from "react";
import { useParams } from "react-router";

import { DetailsPanel } from "../../../components";
import { useEstimate } from "../../../hooks";
import { getCorrectDate } from "../../../utils";

export default function DetailsPanelUservote({ uservote }) {
  const [setEstimate] = useEstimate();
  const { slug } = useParams();

  return (
    <DetailsPanel.Uservote>
      <DetailsPanel.Row>
        <DetailsPanel.Subtitle>Your vote:</DetailsPanel.Subtitle>
        <DetailsPanel.Value>{uservote.value}</DetailsPanel.Value>
        <DetailsPanel.Delete
          onClick={() => setEstimate({ type: "unrate", value: slug })}
        >
          Delete
        </DetailsPanel.Delete>
      </DetailsPanel.Row>
      <DetailsPanel.Row>
        <DetailsPanel.Date>{getCorrectDate(uservote.date)}</DetailsPanel.Date>
      </DetailsPanel.Row>
    </DetailsPanel.Uservote>
  );
}
