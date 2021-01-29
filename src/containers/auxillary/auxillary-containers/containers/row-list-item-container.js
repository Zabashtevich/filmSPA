import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { LoadMore, RowListItem } from "../../../../components";
import { getRightReleasedDate } from "./../../../../utils/utils";
import useFirestore from "../../../../hooks/useFirestore";

import { getArrayOfMovies, checkMovieRated } from "../../../../utils/utils";
import { RowListPopup } from "../../auxillary-items";

export default function RowListItemContainer({ array, user }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [itemsCount, setItemsCount] = useState(10);
  const history = useHistory();

  const [userLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  const handleRedirect = (event, slug) => {
    if (
      event.target.classList.value.includes("Number") ||
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
              <RowListItem.Number>{index + 1}</RowListItem.Number>
              <RowListItem.Wrapper>
                <RowListItem.Name>{item.title}</RowListItem.Name>
                <RowListItem.Character>{item.character}</RowListItem.Character>
              </RowListItem.Wrapper>
              <RowListItem.Date>
                {getRightReleasedDate(item.release_date)}
              </RowListItem.Date>
              {item.rated && (
                <RowListItem.Vote
                  onClick={() => setPopupVisible((prev) => !prev)}
                >
                  <RowListItem.Star votestar={1} />
                  <RowListItem.Highscore>
                    {item.highscore}
                  </RowListItem.Highscore>
                  <RowListItem.Icon />
                  {popupVisible && <RowListPopup />}
                </RowListItem.Vote>
              )}
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
