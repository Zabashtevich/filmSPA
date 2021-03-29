import { useState, useEffect } from "react";

export default function useFetch(direction, type, value, page) {
  const [data, setData] = useState({
    loading: true,
    list: null,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setData((prev) => ({ ...prev, loading: true }));
      fetch()
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
  }, [direction, type, value, page]);

  const { list, loading } = data;
  return [list, loading];
}
