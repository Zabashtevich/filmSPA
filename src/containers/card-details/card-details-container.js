import { useParams } from "react-router-dom";
import { CardDetails } from "../../components";
import useFetch from "../../hooks/useFetchData";

export default function CardDetailsContainer() {
  const location = useParams();

  const { list, loading } = useFetch(["movie"], location.slug, [
    { append_to_response: "credits,recommendations,images,videos,reviews" },
  ]);

  return (
    <CardDetails>
      <CardDetails.BackgroundImage />
      <CardDetails.Column>
        <CardDetails.Poster />
      </CardDetails.Column>
      <CardDetails.Column>
        <CardDetails.DescriptionHeader>
          <CardDetails.MainTitle></CardDetails.MainTitle>
          <CardDetails.SubTitle></CardDetails.SubTitle>
          <CardDetails.ShortReview></CardDetails.ShortReview>
        </CardDetails.DescriptionHeader>
        <CardDetails.DescriptionContent>
          <CardDetails.SubTitle></CardDetails.SubTitle>
          <CardDetails.Row>
            <CardDetails.DescriptionDarkTitle></CardDetails.DescriptionDarkTitle>
            <CardDetails.DescriptionLightTitle></CardDetails.DescriptionLightTitle>
          </CardDetails.Row>
        </CardDetails.DescriptionContent>
      </CardDetails.Column>
      <CardDetails.Column>
        <CardDetails.CreditsList>
          <CardDetails.CreditsListItem></CardDetails.CreditsListItem>
        </CardDetails.CreditsList>
      </CardDetails.Column>
    </CardDetails>
  );
}
