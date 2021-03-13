import { useState, useEffect } from "react";
import { useModalContext } from "../../context";

export default function useFetch(type, link) {
  const [, { showModal }] = useModalContext();

  const [data, setData] = useState({
    loading: true,
    list: null,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetch(
        `https://api.themoviedb.org/3/${type}/${link}?api_key=${process.env.REACT_APP_API_KEY}`,
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.success === false) {
            showModal({
              type: "error",
              message: "Something went wrong while loading data",
            });
          } else {
            setData((prev) => ({ ...prev, loading: false, list: data }));
          }
        });
    }
    return () => {
      mounted = false;
    };
  }, [type, id, querries]);

  const { list, loading } = data;
  return [list, loading];
}
