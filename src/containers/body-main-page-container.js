import React, { useState } from "react";

import useFetch from "../hooks/useFetchData";
import { anchorListType, anchorListPeriod } from "../constants/constants";
import { range } from "../utils/utils";

import { BodyMain, Slider, Tab, CardList, Pagination } from "../components";
import Data from "./data.json";

export default function BodyMainContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [typeTabByPopular, setTypeTabByPopularActive] = useState("day");
  const [tabListType, setTabListTypeActive] = useState("all");
  const list = useFetch(typeTabByPopular, tabListType);
  const pagesAmount = range(1, 10);
  console.log(list.results);
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
      <BodyMain.Section>
        <Tab>
          <Tab.Title>Popular by:</Tab.Title>
          <Tab.Selector>
            {anchorListPeriod.map((item) => {
              return (
                <Tab.Anchor
                  selected={typeTabByPopular === item.id ? true : false}
                  onClick={() => setTypeTabByPopularActive(item.id)}
                  side={item.side}
                  key={item.name}
                >
                  {item.name}
                </Tab.Anchor>
              );
            })}
          </Tab.Selector>
          <Tab.Title>List type:</Tab.Title>
          <Tab.Selector>
            {anchorListType.map((item) => {
              return (
                <Tab.Anchor
                  key={item.name}
                  side={item.side}
                  selected={tabListType === item.id ? true : false}
                  onClick={() => setTabListTypeActive(item.id)}
                >
                  {item.name}
                </Tab.Anchor>
              );
            })}
          </Tab.Selector>
        </Tab>
        <CardList>
          {list &&
            list.results.map((item) => {
              return (
                <CardList.ItemContainer key={item.id}>
                  <CardList.ItemContent
                    src={item.poster_path}
                    title={item.title || item.name}
                    date={item.release_date || item.first_air_date}
                    voteAverage={item.vote_average}
                    voteCount={item.vote_count}
                  />
                </CardList.ItemContainer>
              );
            })}
        </CardList>
        <Pagination>
          <Pagination.List>
            {pagesAmount.map((item) => (
              <Pagination.Item>{item}</Pagination.Item>
            ))}
          </Pagination.List>
        </Pagination>
      </BodyMain.Section>
    </BodyMain>
  );
}
