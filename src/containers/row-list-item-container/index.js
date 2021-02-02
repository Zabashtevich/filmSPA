import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { LoadMore, RowListItem } from "../../components";
import { getRightReleasedDate } from "../../utils/utils";
import useFirestore from "../../hooks/useFirestore";

import { getArrayOfMovies, checkMovieRated } from "../../utils/utils";
import { VotePopupContainer } from "./auxillary";

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
      <TransitionGroup>
        {checkMovieRated(getArrayOfMovies(array), userData)
          .slice(0, itemsCount)
          .map((item, index) => {
            return (
              <CSSTransition
                classNames="fade"
                appear={true}
                timeout={{ enter: 1000, exit: 2000, appear: 1000 }}
                mountOnEnter
                unmountOnExit
                key={item.id + index}
                in={!userLoading}
              >
                <RowListItem
                  onClick={(e) => handleRedirect(e, item.id)}
                  backgroundsecondary={index % 2 === 1 ? 1 : 0}
                  rated={userData.find((card) => card.id === item.id)}
                >
                  <RowListItem.Numerator>{index + 1}</RowListItem.Numerator>
                  <RowListItem.Wrapper>
                    <RowListItem.Name>{item.title}</RowListItem.Name>
                    <RowListItem.Character>
                      {item.character}
                    </RowListItem.Character>
                  </RowListItem.Wrapper>
                  <RowListItem.Date>
                    {getRightReleasedDate(item.release_date)}
                  </RowListItem.Date>
                  {item.rated && (
                    <VotePopupContainer
                      item={item}
                      userData={userData}
                      user={user}
                    />
                  )}
                </RowListItem>
              </CSSTransition>
            );
          })}
      </TransitionGroup>
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
