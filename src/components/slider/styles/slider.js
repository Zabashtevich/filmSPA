import styled from "styled-components/macro";

export const Container = styled.div`
  width: 1800px;
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SliderButtonPrev = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  border: none;
`;
export const SliderButtonNext = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  border: none;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const SliderItem = styled.div`
  position: relative;
  width: 360px;
  height: 540px;
`;
export const SliderThumbnail = styled.div`
  width: inherit;
  position: absolute;
  display: flex;
  flex-direction: row;
  width: inherit;
  flex-wrap: nowrap;
`;
export const SliderImg = styled.img`
  width: 360px;
  height: 540px;
`;
export const SliderGradient = styled.div``;
export const SliderMetaData = styled.div`
  position: absolute;
`;
export const SliderTitle = styled.div``;
export const SliderTagWrapper = styled.div``;
export const SliderTagItem = styled.div``;
export const SliderDotsWrapper = styled.div``;
export const SliderDot = styled.div``;
export const SliderDescription = styled.div``;
