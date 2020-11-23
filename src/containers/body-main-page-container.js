import React, { useEffect, useState } from "react";

import { BodyMain, Slider } from "../components";
import Data from "./data.json";

export default function BodyMainContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [animationRight, setAnimationRight] = useState(false);

  useEffect(() => {
    if (!animationRight) return;

    setAnimationRight(false);
  }, [animationRight]);
  return (
    <BodyMain>
      <BodyMain.Section>
        <Slider
          setIndex={setSliderIndex}
          sliderIndex={sliderIndex}
          slidesLength={Data.length}
          setAnimationRight={setAnimationRight}
        >
          <Slider.Body
            data={Data[sliderIndex]}
            animationRight={animationRight}
          />
          <Slider.Dots data={Data} sliderIndex={sliderIndex} />
        </Slider>
      </BodyMain.Section>
    </BodyMain>
  );
}
