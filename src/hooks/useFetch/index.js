import { useState, useEffect } from "react";

export default function useFetch(type, id, querries = null) {
  const [data, setData] = useState({
    loading: true,
    list: null,
    error: false,
  });

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${
          process.env.REACT_APP_API_KEY
        }&&append_to_response=${querries.join()}`,
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
  }, [type, id, querries]);

  const { list, loading, error } = data;
  return [list, loading, error];
}
