import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  ActorMainColumn,
  ActorPosterDescription,
  DetailsHeader,
  LoadMore,
  ModalGallery,
  PosterColumn,
  RelevantList,
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

  const [itemsCount, setItemsCount] = useState(10);
  const [knownForList, setKnownForList] = useState(null);
  const [visibleGallery, setVisibleGallery] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const { list, loading } = useFetch(["person"], location.slug, [
    { append_to_response: "credits,images" },
  ]);

  useEffect(() => {
    if (!list) return;
    getKnownFor(list.credits.cast, setKnownForList);
  }, [list]);

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
    <DetailsHeader background={"light"}>
      <PosterColumn>
        <PosterColumn.Poster src={list.profile_path} />
        {visibleGallery ? (
          <ModalGallery.Backdrop onClick={(e) => hideModal(e)}>
            <ModalGallery.Photo
              src={
                activeImage ? activeImage : list.images.profiles[0].file_path
              }
            >
              <ModalGallery.CloseIcon onClick={(e) => hideModal(e)} />
              <ModalGallery.ListContainer>
                {list.images.profiles.slice(0, 5).map((item, i) => {
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
            {knownForList
              ? knownForList.map((item) => {
                  return (
                    <RelevantList.ItemContainer key={item.id}>
                      <RelevantList.Miniature src={item.poster_path} />
                      <RelevantList.Name>{item.title}</RelevantList.Name>
                      <RelevantList.VoteScore>
                        {item.vote_average}
                      </RelevantList.VoteScore>
                    </RelevantList.ItemContainer>
                  );
                })
              : null}
          </RelevantList.ListContainer>
        </RelevantList>
        <ActorMainColumn.Title>Credits list</ActorMainColumn.Title>
        <ActorMainColumn.CreditsWrapper>
          {getArrayOfMovies(list.credits.cast)
            .slice(0, itemsCount)
            .map((item, index) => {
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
          <LoadMore>
            <LoadMore.Wrapper>
              {itemsCount < list.credits.cast.length ? (
                <LoadMore.Button setItemsCount={setItemsCount}>
                  Load more
                </LoadMore.Button>
              ) : null}
            </LoadMore.Wrapper>
          </LoadMore>
        </ActorMainColumn.CreditsWrapper>
      </ActorMainColumn>
    </DetailsHeader>
  ) : null;
}
