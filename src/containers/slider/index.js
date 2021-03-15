import React, { useState } from "react";

import { Slider } from "../../components";
import data from "./../../constants/data.json";

export default function SliderContainer() {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <Slider>
      {data.map((movies, index) => (
        <Slider.Slide
          key={index}
          active={activeSlide}
          visible={activeSlide + 1 === index ? 1 : 0}
        >
          {movies.map((item) => (
            <Slider.Item key={item.id}>
              <Slider.Poster src={item.image} />
              <Slider.Gradient />
              <Slider.Info>
                <Slider.Title></Slider.Title>
                <Slider.Genres></Slider.Genres>
                <Slider.Overview></Slider.Overview>
              </Slider.Info>
            </Slider.Item>
          ))}
        </Slider.Slide>
      ))}
      <Slider.Left />
      <Slider.Right />
      <Slider.Wrapper>
        <Slider.Dot />
      </Slider.Wrapper>
    </Slider>
  );
}
