import React, { useState } from "react";

import useDoFetch from "../hooks/useFetchData";

import { BodyMain, Slider, Tab, CardList } from "../components";
import Data from "./data.json";

export default function BodyMainContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [typeTabByPopular, setTypeTabByPopularActive] = useState("Day");
  const [tabListType, setTabListTypeActive] = useState("Movie");
  const list = useDoFetch();

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
      <BodyMain.Section container>
        <Tab>
          <Tab.Title>Popular by:</Tab.Title>
          <Tab.Selector>
            <Tab.Anchor
              color={typeTabByPopular === "Day" ? true : false}
              onClick={() => setTypeTabByPopularActive("Day")}
              side={"left"}
            >
              Day
            </Tab.Anchor>
            <Tab.Anchor
              color={typeTabByPopular === "Week" ? true : false}
              onClick={() => setTypeTabByPopularActive("Week")}
              side={"right"}
            >
              Week
            </Tab.Anchor>
          </Tab.Selector>
          <Tab.Title>List type:</Tab.Title>
          <Tab.Selector>
            <Tab.Anchor
              side={"left"}
              color={tabListType === "Movie" ? true : false}
              onClick={() => setTabListTypeActive("Movie")}
            >
              Movie
            </Tab.Anchor>
            <Tab.Anchor
              side={"middle"}
              color={tabListType === "Siries" ? true : false}
              onClick={() => setTabListTypeActive("Siries")}
            >
              Siries
            </Tab.Anchor>
            <Tab.Anchor
              side={"right"}
              color={tabListType === "TV" ? true : false}
              onClick={() => setTabListTypeActive("TV")}
            >
              TV
            </Tab.Anchor>
          </Tab.Selector>
        </Tab>
        <CardList>
          <CardList.ItemContainer>
            <CardList.ItemContent></CardList.ItemContent>
          </CardList.ItemContainer>
        </CardList>
      </BodyMain.Section>
    </BodyMain>
  );
}
