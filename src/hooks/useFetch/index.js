import { useState, useEffect } from "react";
import { useModalContext } from "../../context";
import { getQuerries } from "../../utils";

export default function useFetch(type, id) {
  const [, { showModal }] = useModalContext();

  const [data, setData] = useState({
    loading: true,
    list: null,
  });

  const querries = getQuerries(type);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&&append_to_response=${querries}`,
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
