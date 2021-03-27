import styled, { css } from "styled-components/macro";

import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export const Container = styled.div`
  justify-content: center;
  flex-direction: row;
  position: relative;
  padding-top: 5rem;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  width: 1800px;
  z-index: 500;
`;

export const Slide = styled.div`
  ${({ active }) => active && `transform: translateX(${active * -1500}px)`};
  justify-content: center;
  visibility: hidden;
  transition: 1000ms;
  display: flex;
  opacity: 0;
  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

export const Info = styled.div`
  transform: translateY(200%);
  flex-direction: column;
  align-items: center;
  visibility: hidden;
  position: absolute;
  padding: 0 0.4rem;
  transition: 500ms;
  overflow: hidden;
  color: white;
  opacity: 0;
  top: 50%;
`;

export const Item = styled.div`
  position: relative;
  transition: 500ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    z-index: 1000;
    ${Info} {
      transform: translateY(0);
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Poster = styled.img`
  width: 300px;
`;

export const Gradient = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  transition: all 3s linear;
  ${({ color }) =>
    color &&
    css`
      background: linear-gradient(
        15deg,
        hsla(${color}, 50%, 40%, 1) 5%,
        hsla(50, 50%, 40%, 0) 75%
      );
    `}
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
`;

export const Genres = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  margin-top: 0.3rem;
`;

export const Overview = styled.div`
  margin-top: 1rem;
`;

export const Wrapper = styled.div``;

export const Dot = styled.div``;

export const Left = styled.button`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  outline: none;
  display: flex;
  color: black;
  height: 50px;
  width: 50px;
  top: 50%;
  left: 5%;
  &:hover {
    background-color: black;
    transition: 300ms;
    color: white;
  }
  &:disabled {
    background-color: rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }
`;

export const ArrowLeft = styled(FiChevronsLeft)`
  border-radius: 50%;
`;

export const Right = styled.button`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: white;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  outline: none;
  display: flex;
  color: black;
  height: 50px;
  width: 50px;
  right: 5%;
  top: 50%;
  &:hover {
    background-color: black;
    transition: 300ms;
    color: white;
  }
  &:disabled {
    background-color: rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }
`;

export const ArrowRight = styled(FiChevronsRight)``;
