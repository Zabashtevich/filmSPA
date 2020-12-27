import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Slider } from "../../components";

export default function SliderBodyContainer({ data }) {
  return (
    <TransitionGroup component={<Slider.ContentContainer />}>
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
                <Slider.Img src={`./assets/images/slider/${item.image}.jpg`} />
                <SliderGradient color={item.color} />
                <SliderColor color={item.color} />
              </Slider.Thumbnail>
              <SliderMetaData>
                <SliderTitle to={"/"}>{item.film}</SliderTitle>
                <SliderTagWrapper>
                  {item.genres.map((item, _) => (
                    <SliderTagItem key={_}>{item}</SliderTagItem>
                  ))}
                </SliderTagWrapper>
                <SliderDescription>{item.description}</SliderDescription>
              </SliderMetaData>
              <SliderLinkButton to={"/"}>
                <SliderLinkButtonIcon />
              </SliderLinkButton>
            </Slider.Item>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}
