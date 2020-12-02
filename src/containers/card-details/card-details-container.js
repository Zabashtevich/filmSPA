import { useParams } from "react-router-dom";
import { CardDetails } from "../../components";
import useFetch from "../../hooks/useFetchData";

export default function CardDetailsContainer() {
  const location = useParams();

  const { list, loading } = useFetch(["movie"], location.slug, [
    { append_to_response: "credits,recommendations,images,videos,reviews" },
  ]);

  console.log(list);

  return list ? <CardDetails></CardDetails> : null;
}
