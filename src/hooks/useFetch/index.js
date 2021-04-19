import { useState, useEffect } from "react";

export default function useFetch(type, target, querries = false) {
  const [{ loading, list }, setData] = useState({
    loading: true,
    list: null,
  });

  const querryParams = {
    tv: "credits,recommendations,images,videos,reviews,account_states",
    movie: "credits,recommendations,images,videos,reviews,account_states",
    person: "combined_credits,images",
  };

  const appendToResponse =
    (querries && `&&append_to_response=${querryParams[type]}`) || "";

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setData((prev) => ({ ...prev, loading: true }));
      fetch(
        `https://api.themoviedb.org/3/${type}/${target}?api_key=${process.env.REACT_APP_API_KEY}${appendToResponse}`,
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
  }, [type, target]);

  return [list, loading];
}
