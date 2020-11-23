import React, { useEffect, useState } from "react";

import { BodyMain, Slider } from "../components";
import Data from "./data.json";

export default function BodyMainContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);

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
    </BodyMain>
  );
}
