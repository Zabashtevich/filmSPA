import { useState, useEffect } from "react";
import { fetchBaseUrl } from "../constants/constants";
import { getQuerry } from "../utils/utils";

export default function useFetch(paths, searchParam, ...rest) {
  const [list, setList] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const querry = getQuerry(...rest);
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setLoading(true);
      fetch(
        `${fetchBaseUrl}${paths}/${searchParam}?api_key=${process.env.REACT_APP_API_KEY}${querry}`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success === false) {
            setError(true);
          } else {
            setList(data);
            setLoading(false);
          }
        });
    }

    return () => {
      setLoading(false);
      isMounted = false;
    };
  }, [searchParam, paths, querry]);
  return { list, loading, error };
}
