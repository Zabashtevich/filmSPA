import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  ActorMainColumn,
  ActorPosterDescription,
  DetailsHeader,
  ModalGallery,
  PosterColumn,
} from "../../components";
import {
  ModalGalleryContainer,
  RelevantListContainer,
  RowListItemContainer,
} from "../";
import useFetch from "../../hooks/useFetchData";
import { getArrayOfMovies, getKnownFor } from "../../utils/utils";
import { ActorRowsContainer } from "./auxillary";
import useAuthListener from "../../hooks/useAuthListener";
import useFirestore from "../../hooks/useFirestore";
import { LoadMoreContainer } from "../";

export default function ActorRootContainer() {
  const location = useParams();

  const [knownForList, setKnownForList] = useState({
    list: null,
    loading: true,
  });
  const [visibleGallery, setVisibleGallery] = useState(false);
  const [itemsCount, setItemsCount] = useState(10);
  const [creditsRow, setCreditsRow] = useState({ loading: true, list: null });

  const [user, userLoading] = useAuthListener();
  const [list, loading, error] = useFetch("person", location.slug, [
    { append_to_response: "credits,images" },
  ]);

  const [userDataLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  useEffect(() => {
    if (!list) return;
    setKnownForList({ list: getKnownFor(list.credits.cast), loading: false });
  }, [list]);

  const showModal = () => {
    document.body.style.overflow = "hidden";
    setVisibleGallery(true);
  };

  return (
    !loading &&
    !userLoading &&
    !knownForList.loading && (
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
            <ActorRowsContainer list={list} />
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
          {!loading && !userDataLoading && (
            <>
              <ActorMainColumn.CreditsWrapper>
                {getArrayOfMovies(list.credits.cast)
                  .slice(0, itemsCount)
                  .map((item, index) => {
                    return (
                      <RowListItemContainer
                        key={item.credit_id}
                        item={item}
                        index={index}
                        user={user}
                        userData={userData}
                      />
                    );
                  })}
              </ActorMainColumn.CreditsWrapper>
              <LoadMoreContainer />
            </>
          )}
        </ActorMainColumn>
      </DetailsHeader>
    )
  );
}
