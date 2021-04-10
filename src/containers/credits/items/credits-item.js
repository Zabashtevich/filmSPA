import React from "react";
import { Credits } from "../../../components";

export default function CreditsItem({ item }) {
  console.log(item);
  return (
    <Credits.Item>
      <Credits.Year>{item.release_date || "-"}</Credits.Year>
      <Credits.Devider />
      <Credits.Description>
        <Credits.Title></Credits.Title>
        <Credits.Subtitle></Credits.Subtitle>
      </Credits.Description>
      <Credits.Meta>
        <Credits.Average></Credits.Average>
        <Credits.Count></Credits.Count>
      </Credits.Meta>
      <Credits.Highscore></Credits.Highscore>
      <Credits.Rating>
        <Credits.Star />
        <Credits.Container>
          <Credits.Close />
          <Credits.Star />
        </Credits.Container>
      </Credits.Rating>
    </Credits.Item>
  );
}
