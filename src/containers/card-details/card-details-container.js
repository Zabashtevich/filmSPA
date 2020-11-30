import { useParams } from "react-router-dom";
import { CardDetails } from "../../components";

export default function CardDetailsContainer() {
  const location = useParams();

  return <CardDetails />;
}
