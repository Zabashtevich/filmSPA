import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useParams } from "react-router-dom";

import { DetailsPoster } from "../../components";
import DetailsPosterRows from "./items/details-poster-rows";
import {
  CastListSkeleton,
  PosterDetailsRowsSkeleton,
  PosterDetailsSkeleton,
} from "../../components/skeleton";

export default function DetailsPosterContainer({ data, dataLoading }) {
  const { direction } = useParams();

  return (
    <DetailsPoster>
      <DetailsPoster.Inner visible={!dataLoading}>
        <DetailsPoster.Wallpaper
          src={data?.backdrop_path}
          data-testid="details-wallpaper"
        />
      </DetailsPoster.Inner>

      <SwitchTransition mode="out-in">
        <CSSTransition key={dataLoading} classNames="fade" timeout={500}>
          <DetailsPoster.Column type={"poster"}>
            {dataLoading && <PosterDetailsSkeleton />}
            {!dataLoading && (
              <DetailsPoster.Poster
                src={data?.poster_path}
                data-testid="details-poster"
              />
            )}
          </DetailsPoster.Column>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition mode="out-in">
        <CSSTransition key={dataLoading} classNames="fade" timeout={500}>
          <DetailsPoster.Column type={"content"}>
            {dataLoading && <PosterDetailsRowsSkeleton />}
            {!dataLoading && (
              <DetailsPosterRows data={data} direction={direction} />
            )}
          </DetailsPoster.Column>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition mode="out-in">
        <CSSTransition key={dataLoading} classNames="fade" timeout={500}>
          <DetailsPoster.Column type={"cast"}>
            <DetailsPoster.Subtitle>Cast:</DetailsPoster.Subtitle>
            {dataLoading && <CastListSkeleton />}
            {!dataLoading &&
              data.credits.cast.slice(0, 10).map(({ name, id }) => (
                <DetailsPoster.Link key={id} to={`/actor/${id}`}>
                  {name}
                </DetailsPoster.Link>
              ))}
          </DetailsPoster.Column>
        </CSSTransition>
      </SwitchTransition>
    </DetailsPoster>
  );
}
