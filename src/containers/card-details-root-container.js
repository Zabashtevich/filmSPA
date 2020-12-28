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

export default function CardDetailsRootContainer() {
  const [visibleGallery, setVisibleGallery] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

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
      e.target.classList[0].search("Backdrop") > 0 ||
      e.target.classList[0].search("Close") > 0
    ) {
      document.body.style.overflow = "auto";
      setVisibleGallery(false);
    }
  };

  return list ? (
    <DetailsHeader background={"dark"}>
      <DetailsHeader.BackgroundContainer>
        <DetailsHeader.BackgroundImage src={list.backdrop_path} />
      </DetailsHeader.BackgroundContainer>
      <PosterColumn>
        <PosterColumn.Poster src={list.poster_path} />
        {visibleGallery ? (
          <ModalGallery.Backdrop onClick={(e) => hideModal(e)}>
            <ModalGallery.Photo
              src={activeImage ? activeImage : list.images.posters[0].file_path}
            >
              <ModalGallery.CloseIcon onClick={(e) => hideModal(e)} />
              <ModalGallery.ListContainer>
                {list.images.posters.slice(0, 5).map((item, i) => {
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
            </ModalGallery.Photo>
          </ModalGallery.Backdrop>
        ) : null}
        {list.images ? (
          <ModalGallery onClick={showModal}>
            <ModalGallery.Icon />
          </ModalGallery>
        ) : null}
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
