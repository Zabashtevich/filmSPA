import styled from "styled-components/macro";

import { GrClose } from "react-icons/gr";

export const Backdrop = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  background: ${({ theme }) => theme.colors.backdrop};
  position: fixed;
  z-index: 2000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Close = styled(GrClose)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  position: absolute;
  top: 5%;
  right: 3%;
  & > * {
    stroke: gray;
  }
`;

export const Container = styled.div`
  background-color: #000;
  width: 1500px;
  height: 850px;
  display: flex;
  align-items: center;
`;

export const Videoplayer = styled.iframe``;

export const Wrapper = styled.div`
  background-color: #333;
  margin-left: auto;
  height: 100%;
  width: 360px;
`;

export const Info = styled.div``;

export const Poster = styled.img``;

export const Meta = styled.div``;

export const Title = styled.span``;

export const Description = styled.span``;

export const Row = styled.div``;

export const Average = styled.span``;

export const Amount = styled.span``;

export const List = styled.div``;

export const Item = styled.div``;

export const Preview = styled.img``;

export const Subtitle = styled.span``;
