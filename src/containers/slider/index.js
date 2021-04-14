import React, { useState } from "react";

import slider from "./../../constants/data.json";
import { Slider } from "../../components";

export default function SliderContainer() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Slider>
      <Slider.Container>
        {slider.map((slide, index) => (
          <Slider.Inner slide={activeSlide}>
            {slide.map((item) => (
              <Slider.Item>
                <Slider.Poster
                  src={`./assets/images/slider/${item.image}.jpg`}
                />
                <Slider.Wrapper>
                  <Slider.Title></Slider.Title>
                  <Slider.Row>
                    <Slider.Value></Slider.Value>
                  </Slider.Row>
                  <Slider.Info></Slider.Info>
                </Slider.Wrapper>
              </Slider.Item>
            ))}
          </Slider.Inner>
        ))}
      </Slider.Container>
      <Slider.ArrowLeft />
      <Slider.ArrowRight />
      <Slider.Footer>
        {slider.map((_, index) => (
          <Slider.Dot key={index} />
        ))}
      </Slider.Footer>
    </Slider>
  );
}
