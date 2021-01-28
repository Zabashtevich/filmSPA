import React, { useEffect, useState } from "react";

import { RowListItem } from "../../../../components";
import { getRightReleasedDate } from "./../../../../utils/utils";
import useFirestore from "../../../../hooks/useFirestore";

export default function RowListItemContainer({ array, user }) {
  const [voteVisible, setVoteVisible] = useState(false);

  const [userLoading, userData] = useFirestore(
    user && `${user.displayName}`,
    `moviesrated`,
  );

  useEffect(() => {
    userData.find(({ id }) => {
      if (id === item.id) setVoteVisible(true);
    });
  }, []);

  return (
    <>
      {getArrayOfMovies(list.credits.cast)
        .slice(0, itemsCount)
        .map((item, index) => {
          return (
            <RowListItem
              onClick={() => history.push(`/details/movie/${item.id}`)}
              backgroundsecondary={index % 2 === 1 ? 1 : 0}
              rated={userData.find((card) => card.id === item.id)}
            >
              <RowListItem.Number>{index + 1}</RowListItem.Number>
              <RowListItem.Wrapper>
                <RowListItem.Name>{item.title}</RowListItem.Name>
                <RowListItem.Character>{item.character}</RowListItem.Character>
              </RowListItem.Wrapper>
              <RowListItem.Date>
                {getRightReleasedDate(item.release_date)}
              </RowListItem.Date>
              {voteVisible && (
                <RowListItem.Vote>
                  <RowListItem.Star />
                  <RowListItem.Highscore>
                    {userData.find((card) => card.id === item.id).value}
                  </RowListItem.Highscore>
                </RowListItem.Vote>
              )}
            </RowListItem>
          );
        })}
    </>
  );
}
