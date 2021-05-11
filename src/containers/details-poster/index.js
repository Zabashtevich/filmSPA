import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useParams } from "react-router-dom";

import { DetailsPoster } from "../../components";
import DetailsPosterRows from "./items/details-poster-rows";
import { WidgetContainer } from "../";
import DetailsColumnSkeleton from "./skeletons/details-column-skeleton";
import DetailsContentSkeleton from "./skeletons/details-content-skeleton";

export default function DetailsPosterContainer({
  data,
  loading,
  lists,
  loggedId,
}) {
  const { direction } = useParams();

  return (
    <DetailsPoster>
      <DetailsPoster.Inner visible={!loading}>
        <DetailsPoster.Wallpaper
          src={data?.backdrop_path}
          data-testid="details-wallpaper"
        />
      </DetailsPoster.Inner>

      <SwitchTransition mode="out-in">
        <CSSTransition key={loading} classNames="fade" timeout={500}>
          <DetailsPoster.Column type={"poster"}>
            {loading && <DetailsColumnSkeleton />}
            {!loading && (
              <>
                <DetailsPoster.Poster
                  src={data?.poster_path}
                  data-testid="details-poster"
                />
                {loggedId && <WidgetContainer lists={lists} data={data} />}
              </>
            )}
          </DetailsPoster.Column>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition mode="out-in">
        <CSSTransition key={loading} classNames="fade" timeout={500}>
          <DetailsPoster.Column type={"content"}>
            {loading && <DetailsContentSkeleton />}
            {!loading && (
              <DetailsPosterRows data={data} direction={direction} />
            )}
          </DetailsPoster.Column>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition mode="out-in">
        <CSSTransition key={loading} classNames="fade" timeout={500}>
          <DetailsPoster.Column type={"cast"}>
            <DetailsPoster.Subtitle>Cast:</DetailsPoster.Subtitle>
            {/* {loading && <CastListSkeleton />} */}
            {!loading &&
              data?.credits?.cast.slice(0, 10).map(({ name, id }) => (
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
