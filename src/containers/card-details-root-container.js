import React from "react";
import { useParams } from "react-router-dom";
import {
  DetailsHeader,
  DescriptionColumn,
  ListColumn,
  PosterColumn,
  DescriptionHeader,
  Votes,
} from "../components";
import useFetch from "../hooks/useFetchData";
import { getBudgetFormat, getRowFormat } from "../utils/utils";

export default function CardDetailsRootContainer() {
  const location = useParams();

  const { list, loading } = useFetch(["movie"], location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  return list ? (
    <DetailsHeader>
      <DetailsHeader.BackgroundContainer>
        <DetailsHeader.BackgroundImage src={list.backdrop_path} />
      </DetailsHeader.BackgroundContainer>
      <PosterColumn>
        <PosterColumn.Poster src={list.poster_path} />
      </PosterColumn>
      <DescriptionColumn>
        <DescriptionHeader>
          <DescriptionHeader.Title>{list.title}</DescriptionHeader.Title>
          <DescriptionHeader.SubTitle>
            {list.tagline}
          </DescriptionHeader.SubTitle>
        </DescriptionHeader>
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
      </DescriptionColumn>
      <ListColumn>
        <ListColumn.Title>Credits list</ListColumn.Title>
        {list.credits.cast.slice(0, 10).map((item) => {
          return (
            <ListColumn.ItemContainer key={item.id}>
              {item.name}
            </ListColumn.ItemContainer>
          );
        })}
        <Votes margin={true}>
          <Votes.Wrapper>
            <Votes.VotesScore>{list.vote_average} /</Votes.VotesScore>
          </Votes.Wrapper>
          <Votes.Wrapper>
            <Votes.VotesAmount>{list.vote_count}</Votes.VotesAmount>
          </Votes.Wrapper>
        </Votes>
      </ListColumn>
    </DetailsHeader>
  ) : null;
}
