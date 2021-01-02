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
import { CSSTransition } from "react-transition-group";

export default function CardDetailsRootContainer() {
  const [visibleGallery, setVisibleGallery] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [firstIndexImagesOffset, setFirstIndexImagesOffset] = useState(0);
  const [lastIndexImagesOffset, setLastIndexImagesOffset] = useState(5);

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

  const hideModal = (e) => {
    if (
      e.target.classList.value.includes("Backdrop") > 0 ||
      e.target.classList.value.includes("Close") > 0 ||
      e.target.classList.value === ""
    ) {
      document.body.style.overflow = "auto";
      setVisibleGallery(false);
      setActiveImage(null);
    }
  };
  {
    console.log(firstIndexImagesOffset, lastIndexImagesOffset);
  }
  const handleSlideLeft = () => {
    if (firstIndexImagesOffset - 5 < 0 && firstIndexImagesOffset > 0) {
      console.log("hi");
      setFirstIndexImagesOffset(0);
      setLastIndexImagesOffset((prev) => prev - firstIndexImagesOffset);
    } else {
      setFirstIndexImagesOffset((prev) => prev - 5);
      setLastIndexImagesOffset((prev) => prev - 5);
    }
  };

  const handleSlideRight = () => {
    const offset = list.images.posters.length - lastIndexImagesOffset;
    if (offset > 0 && lastIndexImagesOffset + 5 > list.images.posters.length) {
      setFirstIndexImagesOffset((prev) => prev + offset);
      setLastIndexImagesOffset((prev) => prev + offset);
    } else if (lastIndexImagesOffset + 5 > list.images.posters.length) {
      return;
    } else {
      setFirstIndexImagesOffset((prev) => prev + 5);
      setLastIndexImagesOffset((prev) => prev + 5);
    }
  };

  return !loading ? (
    <DetailsHeader background={"dark"}>
      <DetailsHeader.BackgroundContainer>
        <DetailsHeader.BackgroundImage src={list.backdrop_path} />
      </DetailsHeader.BackgroundContainer>
      <PosterColumn>
        <PosterColumn.Poster src={list.poster_path} cardPage={true} />
        {visibleGallery ? (
          <ModalGallery.Backdrop onClick={(e) => hideModal(e)}>
            <ModalGallery.Photo
              src={activeImage ? activeImage : list.images.posters[0].file_path}
            >
              <ModalGallery.CloseIcon onClick={(e) => hideModal(e)} />
              <ModalGallery.BottomWrapper>
                <ModalGallery.Button
                  onClick={handleSlideLeft}
                  disabled={firstIndexImagesOffset === 0}
                >
                  <ModalGallery.IconSlider />
                </ModalGallery.Button>
                <ModalGallery.ListContainer>
                  {list.images.posters
                    .slice(firstIndexImagesOffset, lastIndexImagesOffset)
                    .map((item, i) => {
                      return (
                        <ModalGallery.ListItem
                          key={i}
                          src={item.file_path}
                          active={
                            activeImage === item.file_path ||
                            (i === 0 && activeImage === null)
                              ? "true"
                              : null
                          }
                          onClick={() => setActiveImage(item.file_path)}
                        />
                      );
                    })}
                </ModalGallery.ListContainer>
                <ModalGallery.Button
                  disabled={
                    list.images.posters.length - lastIndexImagesOffset === 0
                      ? "disabled"
                      : null
                  }
                >
                  <ModalGallery.IconSlider
                    rightdirection={true}
                    onClick={handleSlideRight}
                  />
                </ModalGallery.Button>
              </ModalGallery.BottomWrapper>
            </ModalGallery.Photo>
          </ModalGallery.Backdrop>
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
