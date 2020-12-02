import { useParams } from "react-router-dom";
import {
  Details,
  DescriptionColumn,
  ListColumn,
  PosterColumn,
} from "../../components";
import DescritpionHeader from "../../components/description-header";
import useFetch from "../../hooks/useFetchData";
import { getGenres } from "../../utils/utils";

export default function DetailsContainer() {
  const location = useParams();

  const { list, loading } = useFetch(["movie"], location.slug, [
    { append_to_response: "credits,recommendations,images,videos,reviews" },
  ]);

  console.log(list);

  return list ? (
    <Details>
      <Details.BackgroundContainer>
        <Details.BackgroundImage src={list.backdrop_path} />
      </Details.BackgroundContainer>
      <PosterColumn>
        <PosterColumn.Poster src={list.poster_path} />
      </PosterColumn>
      <DescriptionColumn>
        <DescritpionHeader>
          <DescritpionHeader.Title>{list.title}</DescritpionHeader.Title>
          <DescritpionHeader.SubTitle>
            {list.tagline}
          </DescritpionHeader.SubTitle>
          <DescritpionHeader.Overview>
            {list.overview}
          </DescritpionHeader.Overview>
        </DescritpionHeader>
        <DescriptionColumn.ContentWrapper>
          <DescriptionColumn.Title>About film</DescriptionColumn.Title>
          <DescriptionColumn.Row>
            <DescriptionColumn.DarkTitle>Genres</DescriptionColumn.DarkTitle>
            <DescriptionColumn.LightTitle>
              {getGenres(list.genres)}
            </DescriptionColumn.LightTitle>
          </DescriptionColumn.Row>
        </DescriptionColumn.ContentWrapper>
      </DescriptionColumn>
      <ListColumn>
        <ListColumn.Title>Credits list</ListColumn.Title>
        {list.credits.cast.slice(0, 10).map((item) => {
          return (
            <ListColumn.ItemContainer key={item.id}>
              <ListColumn.MiniatureName>{item.name}</ListColumn.MiniatureName>
            </ListColumn.ItemContainer>
          );
        })}
      </ListColumn>
    </Details>
  ) : null;
}
