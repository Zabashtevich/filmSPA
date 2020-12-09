import React from "react";
import { ActorPosterDescription } from "../../components";

export default function ActorRows({ list }) {
  return (
    <ActorPosterDescription.ContentWrapper>
      <ActorPosterDescription.RowContainer>
        <ActorPosterDescription.Subtitle>
          Known for
        </ActorPosterDescription.Subtitle>
        <ActorPosterDescription.SubtitleValue>
          {list.known_for_department}
        </ActorPosterDescription.SubtitleValue>
      </ActorPosterDescription.RowContainer>
      <ActorPosterDescription.RowContainer>
        <ActorPosterDescription.Subtitle>
          Credits
        </ActorPosterDescription.Subtitle>
        <ActorPosterDescription.SubtitleValue>
          {list.credits.cast.length}
        </ActorPosterDescription.SubtitleValue>
      </ActorPosterDescription.RowContainer>
      <ActorPosterDescription.RowContainer>
        <ActorPosterDescription.Subtitle>
          Birthday
        </ActorPosterDescription.Subtitle>
        <ActorPosterDescription.SubtitleValue>
          {list.birthday}
        </ActorPosterDescription.SubtitleValue>
      </ActorPosterDescription.RowContainer>
      {list.deathday ? (
        <ActorPosterDescription.RowContainer>
          <ActorPosterDescription.Subtitle>
            Deathday
          </ActorPosterDescription.Subtitle>
          <ActorPosterDescription.SubtitleValue>
            {list.deathday}
          </ActorPosterDescription.SubtitleValue>
        </ActorPosterDescription.RowContainer>
      ) : null}
      <ActorPosterDescription.RowContainer>
        <ActorPosterDescription.Subtitle>
          Gender
        </ActorPosterDescription.Subtitle>
        <ActorPosterDescription.SubtitleValue>
          {list.gender === 1 ? "Female" : "Male"}
        </ActorPosterDescription.SubtitleValue>
      </ActorPosterDescription.RowContainer>
      <ActorPosterDescription.RowContainer>
        <ActorPosterDescription.Subtitle>
          Place of birth
        </ActorPosterDescription.Subtitle>
        <ActorPosterDescription.SubtitleValue>
          {list.place_of_birth}
        </ActorPosterDescription.SubtitleValue>
      </ActorPosterDescription.RowContainer>
    </ActorPosterDescription.ContentWrapper>
  );
}
