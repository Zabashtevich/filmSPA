import { useState, useEffect } from "react";
import { getFetchUrl } from "../../utils";

export default function useFetch({ target, type, period, page, querries }) {
  const [{ loading, data }, setData] = useState({
    loading: true,
    list: null,
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setData((prev) => ({ ...prev, loading: true }));
      fetch(getFetchUrl(target, type, period, page, querries))
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
  }, [target, type, period, page, querries]);

  return [data, loading];
}
