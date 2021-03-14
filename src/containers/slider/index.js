import React from "react";
import { Slider } from "../../components";

export default function SliderContainer() {
  return (
    <Slider>
      {[].map((item) => (
        <Slider.Item key={item.id}>
          <Slider.Poster />
          <Slider.Gradient />
          <Slider.Info>
            <Slider.Title></Slider.Title>
            <Slider.Genres></Slider.Genres>
            <Slider.Overview></Slider.Overview>
          </Slider.Info>
        </Slider.Item>
      ))}
      <Slider.Left />
      <Slider.Right />
      <Slider.Wrapper>
        <Slider.Dot />
      </Slider.Wrapper>
    </Slider>
  );
}
