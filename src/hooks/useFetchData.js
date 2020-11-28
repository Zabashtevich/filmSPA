import { useState, useEffect } from "react";

export default function useFetch(typeTabByPopular, tabListType, currentPage) {
  const [list, setList] = useState("");
  const [page, setPage] = useState(currentPage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/trending/${tabListType}/${typeTabByPopular}?api_key=${process.env.REACT_APP_API_KEY}&&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      });
  }, [tabListType, typeTabByPopular, page]);
  return { list, setPage, loading };
}
