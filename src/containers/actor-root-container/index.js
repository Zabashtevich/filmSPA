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
  RecommendationContainer,
  RowListItemContainer,
} from "../";
import { getArrayOfMovies, getKnownFor } from "../../utils/utils";
import { ActorRowsContainer } from "./auxillary";
import { useFirestore, useFetch, useAuthListener } from "../../hooks";
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
  const [list, loading, error] = useFetch("person", location.slug);

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
          <RecommendationContainer
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
              <LoadMoreContainer
                setItemsCount={setItemsCount}
                visible={list.credits.cast.length > itemsCount}
                offset={10}
              />
            </>
          )}
        </ActorMainColumn>
      </DetailsHeader>
    )
  );
}
