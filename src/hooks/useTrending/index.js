import { useState, useEffect } from "react";

export default function useTrending(type, period, page) {
  const [{ loading, list }, setData] = useState({
    loading: true,
    list: null,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setData((prev) => ({ ...prev, loading: true }));
      fetch(
        `https://api.themoviedb.org/3/trending/${type}/${period}?api_key=${process.env.REACT_APP_API_KEY}&&page=${page}`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success === false) {
          } else {
            setData((prev) => ({ ...prev, loading: false, list: data }));
          }
        });
    }
    return () => {
      mounted = false;
    };
  }, [type, period, page]);

  return [list, loading];
}
