import React, { useState } from "react";

import { Slider } from "../../components";
import data from "./../../constants/data.json";

export default function SliderContainer() {
  const [activeSlide, setActiveSlide] = useState(1);

  function nextSlide() {
    setActiveSlide((prev) => prev + 1);
  }

  function prevSlide() {
    setActiveSlide((prev) => prev - 1);
  }

  return (
    <Slider>
      {data.map((movies, index) => (
        <Slider.Slide
          key={index}
          active={activeSlide}
          visible={activeSlide + 1 === index ? 1 : 0}
        >
          {movies.map((item) => {
            return (
              <Slider.Item key={item.id}>
                <Slider.Poster src={item.image} />
                <Slider.Gradient color={item.color} />
                <Slider.Info>
                  <Slider.Title>{item.film}</Slider.Title>
                  <Slider.Genres>
                    {item.genres.map((item) => item).join(", ")}
                  </Slider.Genres>
                  <Slider.Overview>{item.description}</Slider.Overview>
                </Slider.Info>
              </Slider.Item>
            );
          })}
        </Slider.Slide>
      ))}
      <Slider.Left onClick={prevSlide} disabled={activeSlide === -1 && 1}>
        <Slider.ArrowLeft />
      </Slider.Left>
      <Slider.Right onClick={nextSlide} disabled={activeSlide === 1 && 1}>
        <Slider.ArrowRight />
      </Slider.Right>
      <Slider.Wrapper>
        <Slider.Dot />
      </Slider.Wrapper>
    </Slider>
  );
}
