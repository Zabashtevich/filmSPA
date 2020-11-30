import { useState, useEffect } from "react";
import { fetchBaseUrl } from "../constants/constants";

export default function useFetch(typeTabByPopular, tabListType, page) {
  const [list, setList] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      `${fetchBaseUrl}trending/${tabListType}/${typeTabByPopular}?api_key=${process.env.REACT_APP_API_KEY}&&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      });
  }, [tabListType, typeTabByPopular, page]);
  return { list, loading };
}
