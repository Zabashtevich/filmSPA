import { useState, useEffect } from "react";

export default function useDoFetch(type = 1) {
  const [list, setList] = useState("");

  const periodType = type === 1 ? "day" : "week";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/${periodType}?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, [periodType]);
  return list;
}
