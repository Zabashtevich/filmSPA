import { useState, useEffect } from "react";
import { useModalContext } from "../../context";
import { getFetchUrl } from "../../utils";

export default function useFetch(type, value, page = null) {
  const [, { showModal }] = useModalContext();

  const [data, setData] = useState({
    loading: true,
    list: null,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetch(getFetchUrl(type, value, page))
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
  }, [type, value, page]);

  const { list, loading } = data;
  return [list, loading];
}
