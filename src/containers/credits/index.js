import React from "react";
import { Credits } from "../../components";
import { Item } from "../../components/credits/styles/credits";

export default function CreditsContainer({ list }) {
  return (
    <Credits>
      {list.map((item) => {
        console.log(item);
        return (
          <Credits.Item>
            <Credits.Year></Credits.Year>
            <Credits.Icon />
            <Credits.Wrapper>
              <Credits.Title></Credits.Title>
              <Credits.Role></Credits.Role>
            </Credits.Wrapper>
            <Credits.Meta>
              <Credits.Average></Credits.Average>
              <Credits.Amount></Credits.Amount>
            </Credits.Meta>
            <Credits.Rating>
              <Credits.Value></Credits.Value>
              <Credits.Star />
            </Credits.Rating>
          </Credits.Item>
        );
      })}
    </Credits>
  );
}
