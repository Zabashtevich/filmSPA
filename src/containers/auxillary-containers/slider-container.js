import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Slider } from "../../components";

export default function SliderContainer({
  setSliderIndex,
  sliderIndex,
  data,
  Data,
}) {
  return (
    <Slider>
      <Slider.ContentWrapper>
        {sliderIndex !== 0 && (
          <Slider.Button
            direction={"left"}
            onClick={() => setSliderIndex((prev) => --prev)}
          >
            <FaChevronLeft />
          </Slider.Button>
        )}
        <Slider.ContentContainer>
          {data.map((item) => {
            return (
              <CSSTransition
                classNames="fade"
                timeout={250}
                appear={true}
                in={!!data}
                key={item.image}
                c
              >
                <Slider.Item>
                  <Slider.Thumbnail>
                    <Slider.Img
                      src={`./assets/images/slider/${item.image}.jpg`}
                    />
                    <Slider.Gradient color={item.color} />
                    <Slider.Color color={item.color} />
                  </Slider.Thumbnail>
                  <Slider.Metadata>
                    <Slider.Title to={"/"}>{item.film}</Slider.Title>
                    <Slider.TagWrapper>
                      {item.genres.map((item, _) => (
                        <Slider.TagItem key={_}>{item}</Slider.TagItem>
                      ))}
                    </Slider.TagWrapper>
                    <Slider.Description>{item.description}</Slider.Description>
                  </Slider.Metadata>
                  <Slider.LinkButton to={`/details/movie/${item.id}`}>
                    <Slider.ButtonIcon />
                  </Slider.LinkButton>
                </Slider.Item>
              </CSSTransition>
            );
          })}
        </Slider.ContentContainer>
        <Slider.Dots>
          {Data.map((_, index) => (
            <Slider.Dot
              onClick={() => setSliderIndex(index)}
              active={sliderIndex === index ? true : null}
              key={index}
            />
          ))}
        </Slider.Dots>
        {sliderIndex !== Data.length - 1 && (
          <Slider.Button
            direction={"right"}
            onClick={() => setSliderIndex((prev) => ++prev)}
          >
            <FaChevronRight />
          </Slider.Button>
        )}
      </Slider.ContentWrapper>
    </Slider>
  );
}
