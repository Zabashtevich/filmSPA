import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { LoadMore, RowListItem } from "../../../../components";
import { getRightReleasedDate } from "./../../../../utils/utils";
import useFirestore from "../../../../hooks/useFirestore";

import { getArrayOfMovies, checkMovieRated } from "../../../../utils/utils";
import VotePopupContainer from "./vote-popup-container";

export default function RowListItemContainer({ array, user }) {
  const [itemsCount, setItemsCount] = useState(10);
  const history = useHistory();

  const [userLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  const handleRedirect = (event, slug) => {
    if (
      event.target.classList.value.includes("Numerator") ||
      event.target.classList.value.includes("Container") ||
      event.target.classList.value.includes("Name") ||
      event.target.classList.value.includes("Character") ||
      event.target.classList.value.includes("Date")
    ) {
      history.push(`/details/movie/${slug}`);
    }
  };

  return (
    <>
      {checkMovieRated(getArrayOfMovies(array), userData)
        .slice(0, itemsCount)
        .map((item, index) => {
          return (
            <RowListItem
              onClick={(e) => handleRedirect(e, item.id)}
              backgroundsecondary={index % 2 === 1 ? 1 : 0}
              rated={userData.find((card) => card.id === item.id)}
              key={item.id}
            >
              <RowListItem.Numerator>{index + 1}</RowListItem.Numerator>
              <RowListItem.Wrapper>
                <RowListItem.Name>{item.title}</RowListItem.Name>
                <RowListItem.Character>{item.character}</RowListItem.Character>
              </RowListItem.Wrapper>
              <RowListItem.Date>
                {getRightReleasedDate(item.release_date)}
              </RowListItem.Date>
              {item.rated && <VotePopupContainer item={item} index={index} />}
            </RowListItem>
          );
        })}
      <LoadMore>
        <LoadMore.Wrapper>
          {itemsCount < array.length ? (
            <LoadMore.Button onClick={() => setItemsCount((prev) => prev + 10)}>
              Load more
            </LoadMore.Button>
          ) : null}
        </LoadMore.Wrapper>
      </LoadMore>
    </>
  );
}
