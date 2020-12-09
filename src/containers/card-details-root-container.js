import React from "react";
import { useParams } from "react-router-dom";
import {
  DetailsHeader,
  CardDescriptionColumn,
  ListColumn,
  PosterColumn,
  DescriptionHeader,
  Votes,
} from "../components";
import useFetch from "../hooks/useFetchData";
import CardRows from "./auxillary-containers/card-rows";

export default function CardDetailsRootContainer() {
  const location = useParams();

  const { list, loading } = useFetch(["movie"], location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  return list ? (
    <DetailsHeader background={"gradient"}>
      <DetailsHeader.BackgroundContainer>
        <DetailsHeader.BackgroundImage src={list.backdrop_path} />
      </DetailsHeader.BackgroundContainer>
      <PosterColumn>
        <PosterColumn.Poster src={list.poster_path} />
      </PosterColumn>
      <CardDescriptionColumn>
        <DescriptionHeader>
          <DescriptionHeader.Title>{list.title}</DescriptionHeader.Title>
          <DescriptionHeader.SubTitle>
            {list.tagline}
          </DescriptionHeader.SubTitle>
        </DescriptionHeader>
        <CardRows list={list} />
      </CardDescriptionColumn>
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
