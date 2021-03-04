import { FaWeight } from "react-icons/fa";
import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  background: linear-gradient(180deg, #000 724px, #232323 99%);
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  z-index: 50;
`;

export const Inner = styled.div`
  transform: translateX(-50%);
  position: absolute;
  display: flex;
  z-index: 100;
  left: 50%;
  top: 0;
  &::after {
    background: linear-gradient(180deg, transparent 36%, #000 96%),
      linear-gradient(90deg, transparent 87%, #000),
      linear-gradient(270deg, transparent 87%, #000);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
  }
`;

export const Wallpaper = styled.img`
  width: 675px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
  z-index: 200;
  color: white;
  ${({ type }) =>
    type === "poster" &&
    css`
      width: 300px;
    `};
  ${({ type }) =>
    type === "content" &&
    css`
      width: 600px;
    `};
`;

export const Poster = styled.img`
  border-radius: 0.4rem;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  align-self: flex-start;
`;

export const Overview = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  align-self: flex-start;
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  align-self: flex-start;
`;

export const Row = styled.div`
  display: flex;
  color: white;
`;

export const Fieldname = styled.div``;

export const Fieldvalue = styled.div``;

export const Credits = styled.div``;

export const Link = styled.div``;

export const Wrapper = styled.div``;

export const Average = styled.div``;

export const Count = styled.div``;
