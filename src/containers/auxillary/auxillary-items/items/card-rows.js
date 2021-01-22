import React from "react";
import { CardDescriptionColumn } from "../../../../components";
import {
  getBudgetFormat,
  getRowFormat,
  getRightReleasedDate,
} from "../../../../utils/utils";

export default function CardRows({ list }) {
  return (
    <CardDescriptionColumn.ContentWrapper>
      <CardDescriptionColumn.Title>About film</CardDescriptionColumn.Title>
      <CardDescriptionColumn.Row>
        <CardDescriptionColumn.DarkTitle>
          Genres
        </CardDescriptionColumn.DarkTitle>
        <CardDescriptionColumn.LightTitle>
          {getRowFormat(list.genres)}
        </CardDescriptionColumn.LightTitle>
      </CardDescriptionColumn.Row>
      <CardDescriptionColumn.Row>
        <CardDescriptionColumn.DarkTitle>
          Budget
        </CardDescriptionColumn.DarkTitle>
        <CardDescriptionColumn.LightTitle>
          {getBudgetFormat(list.budget)}
        </CardDescriptionColumn.LightTitle>
      </CardDescriptionColumn.Row>
      <CardDescriptionColumn.Row>
        <CardDescriptionColumn.DarkTitle>
          Countries
        </CardDescriptionColumn.DarkTitle>
        <CardDescriptionColumn.LightTitle>
          {getRowFormat(list.production_countries)}
        </CardDescriptionColumn.LightTitle>
      </CardDescriptionColumn.Row>
      <CardDescriptionColumn.Row>
        <CardDescriptionColumn.DarkTitle>
          Companies
        </CardDescriptionColumn.DarkTitle>
        <CardDescriptionColumn.LightTitle>
          {getRowFormat(list.production_companies)}
        </CardDescriptionColumn.LightTitle>
      </CardDescriptionColumn.Row>
      <CardDescriptionColumn.Row>
        <CardDescriptionColumn.DarkTitle>Date</CardDescriptionColumn.DarkTitle>
        <CardDescriptionColumn.LightTitle>
          {getRightReleasedDate(list.release_date)}
        </CardDescriptionColumn.LightTitle>
      </CardDescriptionColumn.Row>
      <CardDescriptionColumn.Row>
        <CardDescriptionColumn.DarkTitle>
          Language
        </CardDescriptionColumn.DarkTitle>
        <CardDescriptionColumn.LightTitle>
          {list.original_language}
        </CardDescriptionColumn.LightTitle>
      </CardDescriptionColumn.Row>
      <CardDescriptionColumn.Row>
        <CardDescriptionColumn.DarkTitle>Date</CardDescriptionColumn.DarkTitle>
        <CardDescriptionColumn.LightTitle>
          {getBudgetFormat(list.revenue)}
        </CardDescriptionColumn.LightTitle>
      </CardDescriptionColumn.Row>
      <CardDescriptionColumn.Row>
        <CardDescriptionColumn.DarkTitle>
          Runtime
        </CardDescriptionColumn.DarkTitle>
        <CardDescriptionColumn.LightTitle>
          {list.runtime || "Unknown"}
        </CardDescriptionColumn.LightTitle>
      </CardDescriptionColumn.Row>
    </CardDescriptionColumn.ContentWrapper>
  );
}
