import styled, { css } from "styled-components/macro";

import { GrClose } from "react-icons/gr";

export const Backdrop = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
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
  cursor: pointer;
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
  position: relative;
`;

export const Videoplayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Wrapper = styled.div`
  background-color: #333;
  margin-left: auto;
  height: 100%;
  width: 360px;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
`;

export const Poster = styled.img`
  border-radius: 4px;
  height: 120px;
  width: 80px;
  margin: 1.5rem 1.5rem 0;
`;

export const Meta = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  margin-top: 0.5rem;
`;

export const Row = styled.div`
  margin-top: 1rem;
`;

export const Average = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  ${({ average }) =>
    average > 5 &&
    css`
      color: #3bb33b;
    `};
  ${({ average }) =>
    average < 5 &&
    css`
      color: red;
    `};
  ${({ average }) =>
    average === 5 &&
    css`
      color: hsla(0, 0%, 100%, 0.4);
    `};
`;
export const Amount = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  color: hsla(0, 0%, 100%, 0.4);
  margin-left: 0.4rem;
`;

export const List = styled.div`
  height: 80%;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transition: 300ms;
  }
`;

export const Preview = styled.img`
  width: 140px;
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  margin-left: 0.4rem;
  color: white;
`;
