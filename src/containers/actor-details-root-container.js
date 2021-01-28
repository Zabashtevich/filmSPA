import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import {
  ActorMainColumn,
  ActorPosterDescription,
  DetailsHeader,
  LoadMore,
  ModalGallery,
  PosterColumn,
} from "../components";
import useFetch from "../hooks/useFetchData";
import {
  getArrayOfMovies,
  getKnownFor,
  getRightReleasedDate,
} from "../utils/utils";

import {
  ModalGalleryContainer,
  RelevantListContainer,
  RowListItemContainer,
} from "./auxillary/auxillary-containers";

import { ActorRows } from "./auxillary/auxillary-items";

import useFirestore from "../hooks/useFirestore";
import useAuthListener from "../hooks/useAuthListener";

export default function ActorDetailsRootContainer() {
  const location = useParams();
  const history = useHistory();

  const [itemsCount, setItemsCount] = useState(10);
  const [knownForList, setKnownForList] = useState(null);
  const [visibleGallery, setVisibleGallery] = useState(false);

  const { user } = useAuthListener();

  const [userLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  const { list, loading } = useFetch("person", location.slug, [
    { append_to_response: "credits,images" },
  ]);
  useEffect(() => {
    if (!list) return;

    setKnownForList(getKnownFor(list.credits.cast));
  }, [list]);

  const showModal = () => {
    document.body.style.overflow = "hidden";
    setVisibleGallery(true);
  };
  return list ? (
    <DetailsHeader background={"light"}>
      <PosterColumn>
        <PosterColumn.Poster src={list.profile_path} />
        {visibleGallery && (
          <ModalGalleryContainer
            items={list.images.profiles}
            setVisibleGallery={setVisibleGallery}
            visibleGallery={visibleGallery}
          />
        )}

        {list.images && list.images.profiles.length !== 1 ? (
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
        <RelevantListContainer
          recommendations={knownForList ? knownForList : []}
          slug={"movie"}
        />
        <ActorMainColumn.Title>Credits list</ActorMainColumn.Title>
        <ActorMainColumn.CreditsWrapper>
          {!userLoading &&
            getArrayOfMovies(list.credits.cast)
              .slice(0, itemsCount)
              .map((item, index) => {
                console.log(item.id);
                return <RowListItemContainer />;
              })}
          <LoadMore>
            <LoadMore.Wrapper>
              {itemsCount < list.credits.cast.length ? (
                <LoadMore.Button
                  onClick={() => setItemsCount((prev) => prev + 10)}
                >
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
