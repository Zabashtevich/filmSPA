import React, { useState } from "react";

import { BodyMain, Slider, Tab } from "../components";
import Data from "./data.json";

export default function BodyMainContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [tabActive, setTabActive] = useState(1);

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
          <Tab.Selector>
            <Tab.Anchor
              color={tabActive === 1 ? true : false}
              onClick={() => setTabActive(1)}
              side={"left"}
            >
              Day
            </Tab.Anchor>
            <Tab.Anchor
              color={tabActive === 2 ? true : false}
              onClick={() => setTabActive(2)}
              side={"right"}
            >
              Week
            </Tab.Anchor>
          </Tab.Selector>
        </Tab>
      </BodyMain.Section>
    </BodyMain>
  );
}
