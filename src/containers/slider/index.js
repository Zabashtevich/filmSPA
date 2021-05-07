import React, { useEffect, useState } from "react";

import slider from "./../../constants/data.json";
import { Slider } from "../../components";

export default function SliderContainer() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [amount, setAmount] = useState(5);

  const mql = window.matchMedia("(max-width: 800px)");

  function resizeScreen(e) {
    const mobileView = e.matches;
    if (mobileView) {
      setAmount(3);
    } else {
      setAmount(5);
    }
  }

  useEffect(() => {
    mql.addEventListener("change", resizeScreen);
    return () => mql.removeEventListener("change", resizeScreen);
  }, [mql]);

  return (
    <Slider>
      <Slider.Container>
        {slider.map((slide, index) => (
          <Slider.Inner
            key={index}
            slide={activeSlide}
            data-testid="slider-slide"
          >
            {slide.slice(0, amount).map((item) => (
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
        limited={activeSlide === 0 ? 1 : 0}
        data-testid="slider-left-arrow"
      />
      <Slider.ArrowRight
        onClick={() => setActiveSlide((prev) => prev + 1)}
        limited={activeSlide === 2 ? 1 : 0}
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
