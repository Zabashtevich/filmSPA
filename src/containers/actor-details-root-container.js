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
import { getKnownFor } from "../utils/utils";
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
        <ReviewsList.Title>Known for</ReviewsList.Title>
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
        <ActorMainColumn.CreditsWrapper>
          <ActorMainColumn.CreditsRow>
            <ActorMainColumn.Date>123</ActorMainColumn.Date>
            <ActorMainColumn.ItemName>fsdfdsf</ActorMainColumn.ItemName>
          </ActorMainColumn.CreditsRow>
        </ActorMainColumn.CreditsWrapper>
      </ActorMainColumn>
    </DetailsHeader>
  ) : null;
}
