import styled, { css } from "styled-components/macro";

import { BsFillImageFill } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

export const Icon = styled(BsFillImageFill)`
  font-size: 6rem;
  fill: gray;
`;

export const Face = styled.div`
  background-color: white;
  justify-content: center;
  border-radius: 0.4rem;
  align-items: center;
  width: 150px;
  height: 100px;
  display: flex;
  cursor: pointer;
  &:hover {
    ${Icon} {
      fill: black;
      transition: 300ms;
    }
  }
`;

export const Backdrop = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  background-color: ${({ theme }) => theme.colors.backdrop};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2000;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0.4rem;
  width: 1200px;
  height: 675px;
`;

export const Close = styled(CgClose)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  background-color: white;
  border-radius: 0.4rem;
  position: absolute;
  color: black;
  top: 1%;
  right: 1%;
  &:hover {
    transform: scale(0.95);
    transition: 300ms;
  }
`;

export const Active = styled.img`
  border-radius: 0.4rem 0.4rem 0 0;
  user-select: none;
  max-width: 1200px;
`;

export const Footer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  bottom: 10%;
  left: 50%;
  width: 100%;
`;

export const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.4);
  justify-content: center;
  border-radius: 0.4rem;
  align-items: center;
  display: flex;
  outline: none;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    pointer-events: none;
  }
`;

export const Arrow = styled(BsChevronLeft)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  ${({ dir }) =>
    dir === "right" &&
    css`
      transform: rotate(180deg);
    `};
`;

export const Inner = styled.div`
  margin: 0.4rem 0.2rem;
  position: relative;
  cursor: pointer;
  height: 85px;
  width: 150px;
  box-sizing: content-box;
`;

export const Miniature = styled.img`
  border-radius: 0.5rem;
  user-select: none;
  width: inherit;
  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid white;
      transition: 300ms;
    `};
  &:hover {
    transform: translateY(-1%);
    transition: 300ms;
  }
`;
