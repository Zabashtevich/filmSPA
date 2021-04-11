import { useState, useEffect } from "react";

export default function useFetch(direction, target) {
  const [{ loading, list }, setData] = useState({
    loading: true,
    list: null,
  });

  const querryParams = {
    details: "credits,recommendations,images,videos,reviews,account_states",
    person: "combined_credits,images",
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setData((prev) => ({ ...prev, loading: true }));
      fetch(
        `https://api.themoviedb.org/3/${direction}/${target}?api_key=${process.env.REACT_APP_API_KEY}&&append_to_response=${querryParams[direction]}`,
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
  }, [direction, target]);

  return [list, loading];
}
