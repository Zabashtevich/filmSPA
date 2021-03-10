import React from "react";

import { Credits } from "../../components";

export default function CreditsContainer() {
  return (
    <Credits>
      <Credits.Header>
        <Credits.Title></Credits.Title>
        <Credits.Select>
          <Credits.Arrow />
          <Credits.Wrapper>
            <Credits.Option></Credits.Option>
          </Credits.Wrapper>
        </Credits.Select>
      </Credits.Header>
      <Credits.List>
        <Credits.Item>
          <Credits.Year></Credits.Year>
          <Credits.Icon />
          <Credits.Description>
            <Credits.Name></Credits.Name>
            <Credits.Role></Credits.Role>
          </Credits.Description>
          <Credits.Meta>
            <Credits.Average></Credits.Average>
            <Credits.Count></Credits.Count>
          </Credits.Meta>
          <Credits.Highscore></Credits.Highscore>
          <Credits.Rating>
            <Credits.Star />
            <Credits.Popup>
              <Credits.Close />
              {range(1, 10).map((item) => (
                <Credits.Star key={item} />
              ))}
            </Credits.Popup>
          </Credits.Rating>
        </Credits.Item>
      </Credits.List>
    </Credits>
  );
}
