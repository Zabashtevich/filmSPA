import React from "react";
import { useParams } from "react-router";
import { useFetch } from "../../hooks";

import { DetailsPoster } from "../../components";
import { getCharacterByRole } from "../../utils";

export default function DetailsPosterContainer() {
  const { direction, slug } = useParams();
  const [data, loading] = useFetch(direction, slug);
  console.log(getCharacterByRole(data?.credits.crew || [], "Story"));
  return (
    !loading && (
      <DetailsPoster>
        <DetailsPoster.Wallpaper src={data.backdrop_path} />
        <DetailsPoster.Column>
          <DetailsPoster.Poster src={data.poster_path} />
        </DetailsPoster.Column>
        <DetailsPoster.Column>
          <DetailsPoster.Title>{data.title}</DetailsPoster.Title>
          <DetailsPoster.Overview>{data.overview}</DetailsPoster.Overview>
          <DetailsPoster.Subtitle>About {direction}</DetailsPoster.Subtitle>
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Year</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>
              {data.release_date}
            </DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
          {/* <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Language</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>
              {data.spoken_languages}
            </DetailsPoster.Fieldvalue>
          </DetailsPoster.Row> */}
          {/* <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Genres</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>{data.genres}</DetailsPoster.Fieldvalue>
          </DetailsPoster.Row> */}
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Tagline</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>{data.tagline}</DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
          {/* <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Director</DetailsPoster.Fieldname> */}
          {/* <DetailsPoster.Fieldvalue>
              {getCharacterByRole(data?.credits?.crew || [], "director").join()}
            </DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Story</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>
              {getCharacterByRole(data?.credits?.crew || [], "story").join()}
            </DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Producer</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>
              {getCharacterByRole(data?.credits?.crew || [], "producer").join()}
            </DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Designer</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>
              {getCharacterByRole(data?.credits?.crew || [], "designer").join()}
            </DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Composer</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>
              {getCharacterByRole(data?.credits?.crew || [], "composer").join()}
            </DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Editor</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>
              {getCharacterByRole(data?.credits?.crew || [], "editor").join()}
            </DetailsPoster.Fieldvalue> */}
          {/* </DetailsPoster.Row> */}
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Budget</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>{data.budget}</DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Revenue</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>{data.revenue}</DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
          <DetailsPoster.Row>
            <DetailsPoster.Fieldname>Runtime</DetailsPoster.Fieldname>
            <DetailsPoster.Fieldvalue>{data.runtime}</DetailsPoster.Fieldvalue>
          </DetailsPoster.Row>
        </DetailsPoster.Column>
        <DetailsPoster.Column>
          <DetailsPoster.Credits>
            <DetailsPoster.Wrapper>
              <DetailsPoster.Average>{data.vote_average}</DetailsPoster.Average>
              <DetailsPoster.Count>{data.vote_count}</DetailsPoster.Count>
            </DetailsPoster.Wrapper>
            <DetailsPoster.Link />
          </DetailsPoster.Credits>
        </DetailsPoster.Column>
      </DetailsPoster>
    )
  );
}
