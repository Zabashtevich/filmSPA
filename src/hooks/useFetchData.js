import { useState, useEffect } from "react";

export default function useFetch(
  typeTabByPopular = "day",
  tabListType = "all",
) {
  const [list, setList] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${tabListType}/${typeTabByPopular}?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, [tabListType, typeTabByPopular]);
  return list;
}
