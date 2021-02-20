import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  DetailsHeader,
  CardDescriptionColumn,
  ListColumn,
  PosterColumn,
  DescriptionHeader,
  ModalGallery,
} from "../../components";
import useFetch from "../../hooks/useFetchData";
import { CardRowsContainer } from "./auxillary";
import { ModalGalleryContainer } from "../";

export default function CardDetailsRootContainer() {
  const [visibleGallery, setVisibleGallery] = useState(false);
  const history = useHistory();
  const location = useParams();

  const [list, loading, error] = useFetch(location.direction, location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  const showModal = () => {
    document.body.style.overflow = "hidden";
    setVisibleGallery(true);
  };

  return (
    <>
      {list && (
        <DetailsHeader background={"dark"}>
          <DetailsHeader.BackgroundContainer>
            <DetailsHeader.BackgroundImage src={list.backdrop_path} />
          </DetailsHeader.BackgroundContainer>
          <PosterColumn>
            <PosterColumn.Poster src={list.poster_path} cardPage={true} />
            {visibleGallery && list.images ? (
              <ModalGalleryContainer
                items={list.images.posters}
                setVisibleGallery={setVisibleGallery}
                visibleGallery={visibleGallery}
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
            <CardRowsContainer list={list} />
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
          </ListColumn>
        </DetailsHeader>
      )}
    </>
  );
}
