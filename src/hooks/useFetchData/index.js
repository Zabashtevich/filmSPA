import { useState, useEffect } from "react";
import { fetchBaseUrl } from "../constants/constants";
import { getQuerry } from "../utils/utils";

export default function useFetch(paths, searchParam, ...rest) {
  const [data, setData] = useState({
    loading: true,
    list: null,
    error: false,
  });

  const querry = getQuerry(...rest);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetch(
        `${fetchBaseUrl}${paths}/${searchParam}?api_key=${process.env.REACT_APP_API_KEY}${querry}`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success === false) {
            setData((prev) => ({ ...prev, error: true }));
          } else {
            setData((prev) => ({ ...prev, loading: false, list: data }));
          }
        });
    }
    return () => {
      isMounted = false;
    };
  }, [paths, searchParam, querry]);

  const { list, loading, error } = data;
  return [list, loading, error];
}
