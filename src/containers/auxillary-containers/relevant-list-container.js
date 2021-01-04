import React from "react";
import { RelevantList } from "../../components";

export default function RelevantListContainer({ recommendations, slug }) {
  const setWindowOffset = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <RelevantList overflow={recommendations.lenght > 0 ? "scroll" : "auto"}>
      <RelevantList.ListContainer>
        {recommendations.length > 0 ? (
          recommendations.map((item) => {
            console.log(item);
            return (
              <RelevantList.ItemContainer
                key={item.id}
                to={`/details/${slug}/${item.id}`}
                onClick={setWindowOffset}
              >
                <RelevantList.Miniature src={item.backdrop_path} />
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
              We cant create reccomendations on this movie
            </RelevantList.Error>
          </RelevantList.ErrorWrapper>
        )}
      </RelevantList.ListContainer>
    </RelevantList>
  );
}
