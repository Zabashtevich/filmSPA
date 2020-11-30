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
      <CardDetails.Header>
        <CardDetails.HeaderImg />
        <CardDetails.HeaderDescription>
          <CardDetails.HeaderTitle>123</CardDetails.HeaderTitle>
          <CardDetails.HeaderTagsContainer>
            <CardDetails.HeaderTag />
          </CardDetails.HeaderTagsContainer>
          <CardDetails.HeaderSubtitle>123</CardDetails.HeaderSubtitle>
          <CardDetails.HeaderReview>123</CardDetails.HeaderReview>
          <CardDetails.HeaderDirector>123</CardDetails.HeaderDirector>
        </CardDetails.HeaderDescription>
      </CardDetails.Header>
      <CardDetails.Content></CardDetails.Content>
    </CardDetails>
  );
}
