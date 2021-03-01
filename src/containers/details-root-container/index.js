import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  DetailsHeader,
  CardDescriptionColumn,
  ListColumn,
  PosterColumn,
  DescriptionHeader,
} from "../../components";
import { useFetch } from "../../hooks";
import { CardRowsContainer } from "./auxillary";
import { GalleryContainer, WidgetContainer } from "../";
import { useItemContext } from "../../context";

export default function CardDetailsRootContainer() {
  const [, setItem] = useItemContext();
  const location = useParams();

  const [list, loading] = useFetch(location.direction, location.slug);

  useEffect(() => {
    if (!loading) {
      setItem(list);
    }
    return () => setItem(null);
  }, [list, loading]);

  console.log(list);

  return (
    <>
      {list && (
        <DetailsHeader background={"dark"}>
          <GalleryContainer images={list.images.backdrops} />
          <DetailsHeader.BackgroundContainer>
            <DetailsHeader.BackgroundImage src={list.backdrop_path} />
          </DetailsHeader.BackgroundContainer>
          <PosterColumn>
            <PosterColumn.Poster src={list.poster_path} cardPage={true} />
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
            <WidgetContainer />
          </ListColumn>
        </DetailsHeader>
      )}
    </>
  );
}
