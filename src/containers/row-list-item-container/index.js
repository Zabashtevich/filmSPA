import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { RowListItem } from "../../components";
import { getRightReleasedDate } from "../../utils/utils";

import { VotePopupContainer } from "./auxillary";

export default function RowListItemContainer({ item, index, user, userData }) {
  const [rated, setRated] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (userData.length === 0) return;
    setRated(
      userData.find((data) => {
        if (data.id === item.id) {
          return { id: data.id, value: data.value, title: data.title };
        }
      }),
    );
  }, [item, userData]);

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
        rated={userData.find((card) => card.id === item.id)}
      >
        <RowListItem.Numerator>{index + 1}</RowListItem.Numerator>
        <RowListItem.Wrapper>
          <RowListItem.Name>{item.title}</RowListItem.Name>
          <RowListItem.Character>{item.character}</RowListItem.Character>
        </RowListItem.Wrapper>
        <RowListItem.Date>
          {getRightReleasedDate(item.release_date)}
        </RowListItem.Date>
        {rated && (
          <VotePopupContainer rated={rated} userData={userData} user={user} />
        )}
      </RowListItem>
    </CSSTransition>
  );
}
