import { useState, useEffect } from "react";
import { fetchBaseUrl } from "../constants/constants";
import { getQuerry } from "../utils/utils";

export default function useFetch(paths, searchParam, ...rest) {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);

  const path = paths.join("/");
  const querry = getQuerry(...rest);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${fetchBaseUrl}${path}/${searchParam}?api_key=${process.env.REACT_APP_API_KEY}${querry}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      });
  }, [searchParam, path, querry]);
  return { list, loading };
}
