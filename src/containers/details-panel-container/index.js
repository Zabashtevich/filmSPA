import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAuthListener from "../../hooks/useAuthListener";
import useFetch from "../../hooks/useFetchData";
import useFirestore from "../../hooks/useFirestore";

import { offsetListener } from "../../utils/utils";

export default function CardDetailsPanelContainer() {
  const location = useParams();

  const [user, userLoading] = useAuthListener();
  const [reviewLoading, reviewData] = useFirestore("Reviews", location.slug);

  const [list] = useFetch(location.direction, location.slug, [
    {
      append_to_response:
        "credits,recommendations,images,videos,reviews,account_states",
    },
  ]);

  useEffect(() => {
    window.addEventListener("scroll", offsetListener);
    return () => window.removeEventListener("scroll", offsetListener);
  }, []);

  return null;
}
