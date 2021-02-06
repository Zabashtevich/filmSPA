import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { RowListItem } from "../../components";
import { getRightReleasedDate } from "../../utils/utils";

import { VotePopupContainer } from "./auxillary";

export default function RowListItemContainer({
  item,
  index,
  user,
  userData = [],
  accountPanelRow = false,
  favoriteRow = false,
}) {
  const [rated, setRated] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (favoriteRow) return;
    if (userData.length === 0 && !accountPanelRow) return;
    setRated(
      userData.find((data) => {
        if (data.id === item.id) {
          return { id: data.id, value: data.value, title: data.title };
        }
      }),
    );
  }, [item, userData]);

  useEffect(() => {
    if (!accountPanelRow) return;
    if (favoriteRow) return;
    setRated(item);
  });

  const handleRedirect = (event, slug) => {
    if (
      event.target.classList.value.includes("item__Numerator") ||
      event.target.classList.value.includes("item__Container") ||
      event.target.classList.value.includes("item__Name") ||
      event.target.classList.value.includes("item__Character") ||
      event.target.classList.value.includes("item__Date")
    ) {
      history.push(`/details/movie/${slug}`);
    }
  };

  return (
    <CSSTransition
      classNames="fade"
      appear={true}
      timeout={{ enter: 1000, exit: 2000, appear: 1000 }}
      mountOnEnter
      unmountOnExit
      key={item.id + index}
      in={!!item}
    >
      <RowListItem
        onClick={(e) => handleRedirect(e, item.id)}
        backgroundsecondary={index % 2 === 1 ? 1 : 0}
        rated={accountPanelRow ? 0 : rated ? 1 : 0}
      >
        <RowListItem.Numerator>{index + 1}</RowListItem.Numerator>
        <RowListItem.Wrapper>
          <RowListItem.Name>{item.title}</RowListItem.Name>
          <RowListItem.Inner>
            <RowListItem.Character>{item.character}</RowListItem.Character>
            <RowListItem.VoteAverage>
              {item.vote_average}
            </RowListItem.VoteAverage>
            <RowListItem.VoteAmount>({item.vote_count})</RowListItem.VoteAmount>
          </RowListItem.Inner>
        </RowListItem.Wrapper>
        <RowListItem.Date>
          {accountPanelRow && new Date(item.time).toLocaleString() || favoriteRow && new Date(item.time).toLocaleString()}
        </RowListItem.Date>
        <RowListItem.Date>
          {!accountPanelRow &&
            !favoriteRow &&
            getRightReleasedDate(item.release_date)}
        </RowListItem.Date>
        {rated && (
          <VotePopupContainer rated={rated} userData={userData} user={user} />
        )}
      </RowListItem>
    </CSSTransition>
  );
}
