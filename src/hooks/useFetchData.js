import { useState, useEffect } from "react";
import { fetchBaseUrl } from "../constants/constants";
import { getQuerry } from "../utils/utils";

export default function useFetch(paths, searchParam, ...rest) {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);

  const path = paths.join("/");
  const querry = getQuerry(...rest);

  useEffect(() => {
    setFetchingData(false);
    setLoading(true);
    if (!fetchingData) {
      fetch(
        `${fetchBaseUrl}${path}/${searchParam}?api_key=${process.env.REACT_APP_API_KEY}${querry}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setList(data);
          setLoading(false);
        });
    }

    return () => {
      setLoading(false);
      setFetchingData(true);
    };
  }, [searchParam, path, querry]);
  return { list, loading };
}
