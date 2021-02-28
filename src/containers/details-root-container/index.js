import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  DetailsHeader,
  CardDescriptionColumn,
  ListColumn,
  PosterColumn,
  DescriptionHeader,
  ModalGallery,
} from "../../components";
import { useFetch } from "../../hooks";
import { CardRowsContainer } from "./auxillary";
import { ModalGalleryContainer, WidgetContainer } from "../";

export default function CardDetailsRootContainer() {
  const userProfile = useSelector((state) => state.userProfile);
  const [visibleGallery, setVisibleGallery] = useState(false);
  const location = useParams();

  const [list, loading, error] = useFetch(location.direction, location.slug);

  const showModal = () => {
    document.body.style.overflow = "hidden";
    setVisibleGallery(true);
  };

  const { profile } = userProfile;

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
            <WidgetContainer item={list} nickname={profile?.displayName} />
          </ListColumn>
        </DetailsHeader>
      )}
    </>
  );
}
