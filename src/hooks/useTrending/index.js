import { useState, useEffect } from "react";

export default function useTrending(type, period, page) {
  const [data, setData] = useState({
    loading: true,
    result: null,
    error: false,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetch(
        `https://api.themoviedb.org/3/trending/${type}/${period}?api_key=${process.env.REACT_APP_API_KEY}page=${page}`,
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
      mounted = false;
    };
  }, [type, period, page]);

  const { loading, result, error } = data;
  return [loading, result, error];
}
