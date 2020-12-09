import React from "react";
import { DescriptionColumn } from "../../components";
import { getBudgetFormat, getRowFormat } from "../../utils/utils";

export default function CardRows({ list }) {
  return (
    <DescriptionColumn.ContentWrapper>
      <DescriptionColumn.Title>About film</DescriptionColumn.Title>
      <DescriptionColumn.Row>
        <DescriptionColumn.DarkTitle>Genres</DescriptionColumn.DarkTitle>
        <DescriptionColumn.LightTitle>
          {getRowFormat(list.genres)}
        </DescriptionColumn.LightTitle>
      </DescriptionColumn.Row>
      <DescriptionColumn.Row>
        <DescriptionColumn.DarkTitle>Budget</DescriptionColumn.DarkTitle>
        <DescriptionColumn.LightTitle>
          {getBudgetFormat(list.budget)}
        </DescriptionColumn.LightTitle>
      </DescriptionColumn.Row>
      <DescriptionColumn.Row>
        <DescriptionColumn.DarkTitle>Countries</DescriptionColumn.DarkTitle>
        <DescriptionColumn.LightTitle>
          {getRowFormat(list.production_countries)}
        </DescriptionColumn.LightTitle>
      </DescriptionColumn.Row>
      <DescriptionColumn.Row>
        <DescriptionColumn.DarkTitle>Companies</DescriptionColumn.DarkTitle>
        <DescriptionColumn.LightTitle>
          {getRowFormat(list.production_companies)}
        </DescriptionColumn.LightTitle>
      </DescriptionColumn.Row>
      <DescriptionColumn.Row>
        <DescriptionColumn.DarkTitle>Date</DescriptionColumn.DarkTitle>
        <DescriptionColumn.LightTitle>
          {list.release_date}
        </DescriptionColumn.LightTitle>
      </DescriptionColumn.Row>
      <DescriptionColumn.Row>
        <DescriptionColumn.DarkTitle>Language</DescriptionColumn.DarkTitle>
        <DescriptionColumn.LightTitle>
          {list.original_language}
        </DescriptionColumn.LightTitle>
      </DescriptionColumn.Row>
      <DescriptionColumn.Row>
        <DescriptionColumn.DarkTitle>Date</DescriptionColumn.DarkTitle>
        <DescriptionColumn.LightTitle>
          {getBudgetFormat(list.revenue)}
        </DescriptionColumn.LightTitle>
      </DescriptionColumn.Row>
      <DescriptionColumn.Row>
        <DescriptionColumn.DarkTitle>Runtime</DescriptionColumn.DarkTitle>
        <DescriptionColumn.LightTitle>
          {list.runtime}
        </DescriptionColumn.LightTitle>
      </DescriptionColumn.Row>
    </DescriptionColumn.ContentWrapper>
  );
}
