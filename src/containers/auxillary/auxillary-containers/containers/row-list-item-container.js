import React from "react";

import { RowListItem } from "../../../../components";
import { getRightReleasedDate } from "./../../../../utils/utils";

export default function RowListItemContainer({
  item,
  index,
  history,
  userData,
}) {
  return (
    <RowListItem
      onClick={() => history.push(`/details/movie/${item.id}`)}
      backgroundcolor={userData.find((card) => card.id === item.id)}
    >
      <RowListItem.Number>{index + 1}</RowListItem.Number>
      <RowListItem.Wrapper>
        <RowListItem.Name>{item.title}</RowListItem.Name>
        <RowListItem.Character>{item.character}</RowListItem.Character>
      </RowListItem.Wrapper>
      <RowListItem.Date>
        {getRightReleasedDate(item.release_date)}
      </RowListItem.Date>
    </RowListItem>
  );
}
