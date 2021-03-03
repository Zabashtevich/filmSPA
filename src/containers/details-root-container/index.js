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
import { GalleryContainer, TrailerContainer, WidgetContainer } from "../";
import { useGalleryContext, useItemContext } from "../../context";

export default function CardDetailsRootContainer() {
  const [, { setImages }] = useGalleryContext();
  const [, setItem] = useItemContext();
  const location = useParams();

  const [list, loading] = useFetch(location.direction, location.slug);

  useEffect(() => {
    if (!loading) {
      setItem({ fetching: false, item: list });
      setImages(list.images.backdrops);
    }
    return () => setItem({ fetching: true, item: null });
  }, [list, loading]);
  return (
    <>
      {list && (
        // <DetailsHeader background={"dark"}>
        //   <DetailsHeader.BackgroundContainer>
        //     <DetailsHeader.BackgroundImage src={list.backdrop_path} />
        //   </DetailsHeader.BackgroundContainer>
        //   <PosterColumn>
        //     <PosterColumn.Poster src={list.poster_path} cardPage={true} />
        //     <GalleryContainer />
        //     <TrailerContainer list={list} />
        //   </PosterColumn>
        //   <CardDescriptionColumn>
        //     <DescriptionHeader>
        //       <DescriptionHeader.Title>{list.title}</DescriptionHeader.Title>
        //       <DescriptionHeader.SubTitle>
        //         {list.tagline}
        //       </DescriptionHeader.SubTitle>
        //     </DescriptionHeader>
        //     <CardRowsContainer list={list} />
        //   </CardDescriptionColumn>
        //   <ListColumn>
        //     <ListColumn.Title>Credits list</ListColumn.Title>
        //     {list.credits &&
        //       list.credits.cast
        //         .slice(
        //           0,
        //           list.credits.cast.length >= 10
        //             ? 10
        //             : list.credits.cast.length - 1,
        //         )
        //         .map((item) => {
        //           return (
        //             <ListColumn.ItemContainer
        //               key={item.id}
        //               to={`/actor/${item.id}`}
        //             >
        //               {item.name}
        //             </ListColumn.ItemContainer>
        //           );
        //         })}
        //     <WidgetContainer />
        //   </ListColumn>
        // </DetailsHeader>
      )}
    </>
  );
}
