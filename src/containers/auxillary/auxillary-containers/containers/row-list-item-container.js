import React from "react";

export default function RowListItemContainer() {
  return (
    <ActorMainColumn.CreditsRow
      key={item.credit_id}
      onClick={() => history.push(`/details/movie/${item.id}`)}
      backgroundcolor={userData.find((card) => card.id === item.id)}
    >
      <ActorMainColumn.Number>{index + 1}</ActorMainColumn.Number>
      <ActorMainColumn.DescriptionWrapper>
        <ActorMainColumn.ItemName>{item.title}</ActorMainColumn.ItemName>
        <ActorMainColumn.Character>{item.character}</ActorMainColumn.Character>
      </ActorMainColumn.DescriptionWrapper>
      <ActorMainColumn.Date>
        {getRightReleasedDate(item.release_date)}
      </ActorMainColumn.Date>
    </ActorMainColumn.CreditsRow>
  );
}
