import React from "react";

import { Credits } from "./../../components";

export default function CreditsContainer() {
  return (
    <Credits>
      <Credits.Item>
        <Credits.Number></Credits.Number>
        <Credits.Devider />
        <Credits.Year></Credits.Year>
        <Credits.Title></Credits.Title>
        <Credits.Meta>
          <Credits.Average></Credits.Average>
          <Credits.Amount></Credits.Amount>
        </Credits.Meta>
        <Credits.Value></Credits.Value>
        <Credits.Rating>
          <Credits.Star />
          <Credits.Popup>
            <Credits.Star />
          </Credits.Popup>
        </Credits.Rating>
        <Credits.Widget>
          <Credits.Arrow />
          <Credits.Popup>
            <Credits.Name></Credits.Name>
            <Credits.Favorite></Credits.Favorite>
            <Credits.Subtitle></Credits.Subtitle>
            <Credits.Userlist></Credits.Userlist>
          </Credits.Popup>
        </Credits.Widget>
      </Credits.Item>
    </Credits>
  );
}
