import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Wallpaper = styled.img`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  &::after {
    background-image: linear-gradient(180deg, transparent 36%, #000 96%),
      linear-gradient(90deg, transparent 87%, #000),
      linear-gradient(270deg, transparent 87%, #000);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Poster = styled.img``;

export const Title = styled.div``;

export const Overview = styled.div``;

export const Subtitle = styled.div``;

export const Row = styled.div``;

export const Fieldname = styled.div``;

export const Fieldvalue = styled.div``;

export const Credits = styled.div``;

export const Link = styled.div``;

export const Wrapper = styled.div``;

export const Average = styled.div``;

export const Count = styled.div``;
