import styled, { css } from "styled-components/macro";

import { FcGallery } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const Thumbnail = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
`;

export const Placeholder = styled(FcGallery)``;

export const Backdrop = styled.div`
  background: ${({ theme }) => theme.colors.backdrop};
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: white;
  position: relative;
  display: flex;
`;

export const Active = styled.img`
  width: 1000px;
`;

export const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  width: 100%;
  top: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 20%;
  padding: 0.2rem 0.3rem;
  outline: none;
  display: flex;
  cursor: pointer;
  &:enabled:active {
    transform: scale(0.95);
  }
  &:disabled {
    visibility: hidden;
  }
`;

export const Left = styled(BsChevronLeft)``;

export const Right = styled(BsChevronRight)``;

export const Inner = styled.div`
  margin: 0.4rem 0.2rem;
  align-items: center;
  position: relative;
  width: 100px;
  height: 56px;
  display: flex;
`;

export const Miniature = styled.img`
  border: 2px solid transparent;
  border-radius: 0.4rem;
  position: absolute;
  cursor: pointer;
  width: 100px;
  &:hover {
    transform: translateY(-5%);
    transition: 50ms;
  }
  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid white;
    `};
`;
