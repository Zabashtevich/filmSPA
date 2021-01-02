import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  DetailsHeader,
  CardDescriptionColumn,
  ListColumn,
  PosterColumn,
  DescriptionHeader,
  Votes,
  ModalGallery,
} from "../components";
import useFetch from "../hooks/useFetchData";
import CardRows from "./auxillary-containers/card-rows";
import ModalGalleryContainer from "./auxillary-containers/modal-gallery";

export default function CardDetailsRootContainer() {
  const [visibleGallery, setVisibleGallery] = useState(false);

  const location = useParams();

  const { list, loading } = useFetch(["movie"], location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  const showModal = () => {
    document.body.style.overflow = "hidden";
    setVisibleGallery(true);
  };

  return !loading ? (
    <DetailsHeader background={"dark"}>
      <DetailsHeader.BackgroundContainer>
        <DetailsHeader.BackgroundImage src={list.backdrop_path} />
      </DetailsHeader.BackgroundContainer>
      <PosterColumn>
        <PosterColumn.Poster src={list.poster_path} cardPage={true} />
        {visibleGallery ? (
          <ModalGalleryContainer
            items={list.images.posters}
            setVisibleGallery={setVisibleGallery}
          />
        ) : null}
        {list.images.posters.length > 1 && (
          <ModalGallery onClick={showModal} cardPage={true}>
            <ModalGallery.Icon />
          </ModalGallery>
        )}
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
        {list.credits &&
          list.credits.cast
            .slice(
              0,
              list.credits.cast.length >= 10
                ? 10
                : list.credits.cast.length - 1,
            )
            .map((item) => {
              return (
                <ListColumn.ItemContainer
                  key={item.id}
                  to={`/actor/${item.id}`}
                >
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
