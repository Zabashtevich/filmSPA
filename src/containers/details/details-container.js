import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Details,
  DescriptionColumn,
  ListColumn,
  PosterColumn,
} from "../../components";
import DescritpionHeader from "../../components/description-header";
import StarRating from "../../components/star-rating";
import useFetch from "../../hooks/useFetchData";
import { getBudgetFormat, getRowFormat } from "../../utils/utils";

export default function DetailsContainer() {
  const location = useParams();
  const [starValue, setStarValue] = useState(0);

  const { list, loading } = useFetch(["movie"], location.slug, [
    { append_to_response: "credits,recommendations,images,videos,reviews" },
  ]);

  return list ? (
    <Details>
      <Details.BackgroundContainer>
        <Details.BackgroundImage src={list.backdrop_path} />
      </Details.BackgroundContainer>
      <PosterColumn>
        <PosterColumn.Poster src={list.poster_path} />
        <StarRating innerWidth={"40%"}>
          {[...Array(5)].map((_, i) => {
            return (
              <StarRating.Star
                indexValue={i + 1}
                starValue={starValue}
                setStarValue={setStarValue}
              />
            );
          })}
        </StarRating>
      </PosterColumn>
      <DescriptionColumn>
        <DescritpionHeader>
          <DescritpionHeader.Title>{list.title}</DescritpionHeader.Title>
          <DescritpionHeader.SubTitle>
            {list.tagline}
          </DescritpionHeader.SubTitle>
        </DescritpionHeader>
        <DescriptionColumn.ContentWrapper>
          <DescriptionColumn.Title>About film</DescriptionColumn.Title>
          <DescriptionColumn.Row>
            <DescriptionColumn.DarkTitle>Genres</DescriptionColumn.DarkTitle>
            <DescriptionColumn.LightTitle>
              {getRowFormat(list.genres)}
            </DescriptionColumn.LightTitle>
          </DescriptionColumn.Row>
          <DescriptionColumn.Row>
            <DescriptionColumn.DarkTitle>Budget</DescriptionColumn.DarkTitle>
            <DescriptionColumn.LightTitle>
              {getBudgetFormat(list.budget)}
            </DescriptionColumn.LightTitle>
          </DescriptionColumn.Row>
          <DescriptionColumn.Row>
            <DescriptionColumn.DarkTitle>Countries</DescriptionColumn.DarkTitle>
            <DescriptionColumn.LightTitle>
              {getRowFormat(list.production_countries)}
            </DescriptionColumn.LightTitle>
          </DescriptionColumn.Row>
          <DescriptionColumn.Row>
            <DescriptionColumn.DarkTitle>Companies</DescriptionColumn.DarkTitle>
            <DescriptionColumn.LightTitle>
              {getRowFormat(list.production_companies)}
            </DescriptionColumn.LightTitle>
          </DescriptionColumn.Row>
          <DescriptionColumn.Row>
            <DescriptionColumn.DarkTitle>Date</DescriptionColumn.DarkTitle>
            <DescriptionColumn.LightTitle>
              {list.release_date}
            </DescriptionColumn.LightTitle>
          </DescriptionColumn.Row>
          <DescriptionColumn.Row>
            <DescriptionColumn.DarkTitle>Language</DescriptionColumn.DarkTitle>
            <DescriptionColumn.LightTitle>
              {list.original_language}
            </DescriptionColumn.LightTitle>
          </DescriptionColumn.Row>
          <DescriptionColumn.Row>
            <DescriptionColumn.DarkTitle>Date</DescriptionColumn.DarkTitle>
            <DescriptionColumn.LightTitle>
              {getBudgetFormat(list.revenue)}
            </DescriptionColumn.LightTitle>
          </DescriptionColumn.Row>
          <DescriptionColumn.Row>
            <DescriptionColumn.DarkTitle>Runtime</DescriptionColumn.DarkTitle>
            <DescriptionColumn.LightTitle>
              {list.runtime}
            </DescriptionColumn.LightTitle>
          </DescriptionColumn.Row>
        </DescriptionColumn.ContentWrapper>
      </DescriptionColumn>
      <ListColumn>
        <ListColumn.Title>Credits list</ListColumn.Title>
        {list.credits.cast.slice(0, 10).map((item) => {
          return (
            <ListColumn.ItemContainer key={item.id}>
              {item.name}
            </ListColumn.ItemContainer>
          );
        })}
      </ListColumn>
    </Details>
  ) : null;
}
