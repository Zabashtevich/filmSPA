import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { bodyFirstTab, bodySecondaryTab } from "./../constants/constants";
import { BodyMain, CardList, CardListSkeleton } from "../components";
import { range, getPaginator, getRightReleasedDate } from "../utils/utils";
import Data from "../constants/data.json";
import useFetch from "../hooks/useFetchData";
import TabContainer from "./tab-container";
import {
  SliderContainer,
  PaginationMainPageContainer,
} from "./auxillary/auxillary-containers";

export default function BodyMainContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [activeTabFirst, setActiveTabFirst] = useState("day");
  const [activeTabSecondary, setActiveTabSecondary] = useState("all");
  const history = useHistory();
  const location = useLocation();
  const skeletonAmount = range(1, 20);
  const currentPage = getPaginator(location);
  const { list, loading } = useFetch(
    `trending/${activeTabSecondary}`,
    activeTabFirst,
    [{ page: currentPage }],
  );
  return (
    <BodyMain>
      <BodyMain.Section>
        <SliderContainer
          data={Data[sliderIndex]}
          setSliderIndex={setSliderIndex}
          sliderIndex={sliderIndex}
          Data={Data}
        />
      </BodyMain.Section>
      <BodyMain.Section padding="1rem" background="#fff">
        <BodyMain.Wrapper>
          <BodyMain.Inner>
            <TabContainer
              title={"Popular by:"}
              tabList={bodyFirstTab}
              setActiveType={setActiveTabFirst}
              activeType={activeTabFirst}
            />
          </BodyMain.Inner>
          <BodyMain.Inner>
            <TabContainer
              title={"Type:"}
              tabList={bodySecondaryTab}
              setActiveType={setActiveTabSecondary}
              activeType={activeTabSecondary}
            />
          </BodyMain.Inner>
        </BodyMain.Wrapper>
        <CardList>
          {loading
            ? skeletonAmount.map((_) => <CardListSkeleton key={_} />)
            : list.results.map((item) => {
                return (
                  <CardList.ItemContainer
                    key={item.id}
                    onClick={() =>
                      history.push(`/details/${item.media_type}/${item.id}`)
                    }
                  >
                    {item.poster_path === null ? console.log(item.id) : null}
                    <CardList.ItemContentWrapper>
                      <CardList.ItemImage src={item.poster_path} />
                      <CardList.ItemDescriptionInner
                        title={item.title || item.name}
                        date={getRightReleasedDate(item.release_date)}
                      />
                    </CardList.ItemContentWrapper>
                    <CardList.MetaScore error={item.poster_path ? null : true}>
                      {item.vote_average}
                    </CardList.MetaScore>
                  </CardList.ItemContainer>
                );
              })}
        </CardList>
        <PaginationMainPageContainer currentPage={currentPage} />
      </BodyMain.Section>
    </BodyMain>
  );
}
