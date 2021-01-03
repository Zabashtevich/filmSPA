import React from "react";
import { RelevantList } from "../../components";

export default function RelevantListContainer({ recommendations }) {
  const setWindowOffset = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <RelevantList>
      <RelevantList.ListContainer>
        {recommendations ? (
          recommendations.map((item) => {
            return (
              <RelevantList.ItemContainer
                key={item.id}
                to={`/details/movie/${item.id}`}
                onClick={setWindowOffset}
              >
                <RelevantList.Miniature src={item.poster_path} />
                <RelevantList.Name>{item.title}</RelevantList.Name>
                <RelevantList.VoteScore>
                  {item.vote_average}
                </RelevantList.VoteScore>
              </RelevantList.ItemContainer>
            );
          })
        ) : (
          <RelevantList.ErrorWrapper>
            <RelevantList.Error>
              We cant create reccomendation on this movie
            </RelevantList.Error>
          </RelevantList.ErrorWrapper>
        )}
      </RelevantList.ListContainer>
    </RelevantList>
  );
}
