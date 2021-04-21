import { useState, useEffect } from "react";
import { querryParams } from "../../constants/constants";

export default function useFetch({
  type,
  target,
  period = "",
  querries = false,
}) {
  const [{ loading, data }, setData] = useState({
    loading: true,
    list: null,
  });

  const url = `https://api.themoviedb.org/3/${type}/${target}/${period}?${
    querries ? querryParams[type] : ""
  }&api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    let mounted = true;
    if (mounted && url) {
      setData((prev) => ({ ...prev, loading: true }));
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.success === false) {
          } else {
            setData((prev) => ({ ...prev, loading: false, data }));
          }
        });
    }
    return () => {
      mounted = false;
    };
  }, [type, target, period, querries]);

  return [
    { data, loading },
    { getDetails, getTrendings },
  ];
}
