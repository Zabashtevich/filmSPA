import React from "react";

import { useParams } from "react-router-dom";
import {
  ActorMainColumn,
  ActorPosterDescription,
  DetailsHeader,
  PosterColumn,
  RelevantList,
  ReviewsList,
} from "../components";
import useFetch from "../hooks/useFetchData";
import {
  getArrayOfMovies,
  getKnownFor,
  getRightReleasedDate,
} from "../utils/utils";
import ActorRows from "./auxillary-containers/actor-rows";

export default function ActorDetailsRootContainer() {
  const location = useParams();

  const { list, loading } = useFetch(["person"], location.slug, [
    { append_to_response: "credits" },
  ]);

  console.log(list);

  return list ? (
    <DetailsHeader>
      <PosterColumn>
        <PosterColumn.Poster src={list.profile_path} />
        <ActorPosterDescription>
          <ActorPosterDescription.Title>
            Personal information
          </ActorPosterDescription.Title>
          <ActorRows list={list} />
        </ActorPosterDescription>
      </PosterColumn>
      <ActorMainColumn>
        <ActorMainColumn.Name>{list.name}</ActorMainColumn.Name>
        <ActorMainColumn.Title>Overview</ActorMainColumn.Title>
        <ActorMainColumn.Overview>{list.biography}</ActorMainColumn.Overview>
        <ActorMainColumn.Title>Known for</ActorMainColumn.Title>
        <RelevantList>
          <RelevantList.ListContainer>
            {getKnownFor(list.credits.cast).map((item) => {
              return (
                <RelevantList.ItemContainer key={item.id}>
                  <RelevantList.Miniature src={item.poster_path} />
                  <RelevantList.Name>{item.title}</RelevantList.Name>
                  <RelevantList.VoteScore>
                    {item.vote_average}
                  </RelevantList.VoteScore>
                </RelevantList.ItemContainer>
              );
            })}
          </RelevantList.ListContainer>
        </RelevantList>
        <ActorMainColumn.Title>Credits list</ActorMainColumn.Title>
        <ActorMainColumn.CreditsWrapper>
          {getArrayOfMovies(list.credits.cast).map((item, index) => {
            return (
              <ActorMainColumn.CreditsRow key={item.id}>
                <ActorMainColumn.Number>{index + 1}</ActorMainColumn.Number>
                <ActorMainColumn.DescriptionWrapper>
                  <ActorMainColumn.ItemName>
                    {item.title}
                  </ActorMainColumn.ItemName>
                  <ActorMainColumn.Character>
                    {item.character}
                  </ActorMainColumn.Character>
                </ActorMainColumn.DescriptionWrapper>
                <ActorMainColumn.Date>
                  {getRightReleasedDate(item.release_date)}
                </ActorMainColumn.Date>
              </ActorMainColumn.CreditsRow>
            );
          })}
        </ActorMainColumn.CreditsWrapper>
      </ActorMainColumn>
    </DetailsHeader>
  ) : null;
}
