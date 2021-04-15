import React, { useState } from "react";

import slider from "./../../constants/data.json";
import { Slider } from "../../components";

export default function SliderContainer() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Slider>
      <Slider.Container>
        {slider.map((slide, index) => (
          <Slider.Inner
            key={index}
            slide={activeSlide}
            data-testid="slider-slide"
          >
            {slide.map((item) => (
              <Slider.Item
                key={item.image}
                color={item.color}
                to={`/details/${item.id}`}
              >
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
        onClick={() => setActiveSlide((prev) => prev - 1)}
        disabled={activeSlide === 0 && 1}
        data-testid="slider-left-arrow"
      />
      <Slider.ArrowRight
        onClick={() => setActiveSlide((prev) => prev + 1)}
        disabled={activeSlide === 2 && 1}
        data-testid="slider-right-arrow"
      />
      <Slider.Footer>
        {slider.map((_, index) => (
          <Slider.Dot
            key={index}
            selected={index === activeSlide && 1}
            onClick={() => setActiveSlide(index)}
            data-testid="slider-dot"
          />
        ))}
      </Slider.Footer>
    </Slider>
  );
}
