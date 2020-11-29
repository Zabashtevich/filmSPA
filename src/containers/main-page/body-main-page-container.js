import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { BodyMain, Slider, CardList, CardListSkeleton } from "../../components";
import { range, getPaginator } from "../../utils/utils";
import Data from "../../constants/data.json";
import useFetch from "../../hooks/useFetchData";
import {
  PaginationMainPageContainer,
  TabsMainPageCotainer,
} from "./auxiliary-containers";

export default function BodyMainContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [typeTabByPopular, setTypeTabByPopularActive] = useState("day");
  const [tabListType, setTabListTypeActive] = useState("all");
  const location = useLocation();

  const skeletonAmount = range(1, 20);
  const currentPage = getPaginator(location);
  const { list, setPage, loading } = useFetch(
    typeTabByPopular,
    tabListType,
    currentPage,
  );

  return (
    <BodyMain>
      <BodyMain.Section>
        <Slider
          setSliderIndex={setSliderIndex}
          sliderIndex={sliderIndex}
          slidesLength={Data.length}
        >
          <Slider.Body data={Data[sliderIndex]} />
          <Slider.Dots
            data={Data}
            sliderIndex={sliderIndex}
            setSliderIndex={setSliderIndex}
          />
        </Slider>
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
                    <CardList.ItemContent
                      id={item.id}
                      title={item.title || item.name}
                      date={item.release_date || item.first_air_date}
                      src={item.poster_path}
                    />
                    <CardList.MetaScore error={item.poster_path ? null : true}>
                      {item.vote_average}
                    </CardList.MetaScore>
                  </CardList.ItemContainer>
                );
              })}
        </CardList>
        <PaginationMainPageContainer
          setPage={setPage}
          currentPage={currentPage}
        />
      </BodyMain.Section>
    </BodyMain>
  );
}
