import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { BodyMain, Slider, CardList, CardListSkeleton } from "../components";
import { range, getPaginator, getRightReleasedDate } from "../utils/utils";
import Data from "../constants/data.json";
import useFetch from "../hooks/useFetchData";
import TabsMainPageCotainer from "./tabs-main-page-container";
import PaginationMainPageContainer from "./pagination-main-page-container";
import SliderBodyContainer from "./auxillary-containers/slider-body-container";

export default function BodyMainContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [typeTabByPopular, setTypeTabByPopularActive] = useState("day");
  const [tabListType, setTabListTypeActive] = useState("all");
  const location = useLocation();
  const skeletonAmount = range(1, 20);
  const currentPage = getPaginator(location);
  const { list, loading } = useFetch(
    ["trending", `${tabListType}`],
    typeTabByPopular,
    [{ page: currentPage }],
  );

  return (
    <BodyMain>
      <BodyMain.Section>
        <SliderBodyContainer
          data={Data[sliderIndex]}
          setSliderIndex={setSliderIndex}
          sliderIndex={sliderIndex}
          Data={Data}
        />
      </BodyMain.Section>
      <BodyMain.Section padding="1rem" background="#fff">
        <TabsMainPageCotainer
          typeTabByPopular={typeTabByPopular}
          tabListType={tabListType}
          setTabListTypeActive={setTabListTypeActive}
          setTypeTabByPopularActive={setTypeTabByPopularActive}
        />
        <CardList>
          {loading
            ? skeletonAmount.map((_) => <CardListSkeleton key={_} />)
            : list.results.map((item) => {
                return (
                  <CardList.ItemContainer key={item.id}>
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
