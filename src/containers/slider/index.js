import React, { useState } from "react";

import slider from "./../../constants/data.json";
import { Slider } from "../../components";

export default function SliderContainer() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Slider>
      <Slider.Container>
        {slider.map((slide, index) => (
          <Slider.Inner slide={activeSlide} key={index}>
            {slide.map((item) => (
              <Slider.Item color={item.color} to={`/details/${item.id}`}>
                <Slider.Poster
                  src={`./assets/images/slider/${item.image}.jpg`}
                />
                <Slider.Wrapper>
                  <Slider.Title>{item.film}</Slider.Title>
                  <Slider.Row>
                    {item.genres.map((item) => (
                      <Slider.Value key={item}>{item}</Slider.Value>
                    ))}
                  </Slider.Row>
                  <Slider.Info>{item.description}</Slider.Info>
                </Slider.Wrapper>
              </Slider.Item>
            ))}
          </Slider.Inner>
        ))}
      </Slider.Container>
      <Slider.ArrowLeft
        limited={activeSlide === 0 && 1}
        onClick={() => setActiveSlide((prev) => prev - 1)}
      />
      <Slider.ArrowRight
        onClick={() => setActiveSlide((prev) => prev + 1)}
        limited={activeSlide === 2 && 1}
      />
      <Slider.Footer>
        {slider.map((_, index) => (
          <Slider.Dot
            key={index}
            selected={index === activeSlide && 1}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </Slider.Footer>
    </Slider>
  );
}
