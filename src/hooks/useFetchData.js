import { useState, useEffect } from "react";

export default function useFetch(
  typeTabByPopular = "day",
  tabListType = "all",
) {
  const [list, setList] = useState("");
  const [page, setPage] = useState("1");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${tabListType}/${typeTabByPopular}?api_key=${process.env.REACT_APP_API_KEY}&&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, [tabListType, typeTabByPopular, page]);
  return { list, setPage };
}
