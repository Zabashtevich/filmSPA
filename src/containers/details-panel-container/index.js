import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsPanel } from "../../components";

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
  return (
    list && (
      <DetailsPanel>
        <DetailsPanel.Wrapper>
          <DetailsPanel.Title>Overview</DetailsPanel.Title>
          <DetailsPanel.Overview>{list.overview}</DetailsPanel.Overview>
        </DetailsPanel.Wrapper>
        <DetailsPanel.Rating>
          <DetailsPanel.Votes></DetailsPanel.Votes>
          <DetailsPanel.Average></DetailsPanel.Average>
        </DetailsPanel.Rating>
        <DetailsPanel.Wrapper>
          <DetailsPanel.Star />
        </DetailsPanel.Wrapper>
        <DetailsPanel.Wrapper>
          <DetailsPanel.Title>Reviews</DetailsPanel.Title>
        </DetailsPanel.Wrapper>
      </DetailsPanel>
    )
  );
}
