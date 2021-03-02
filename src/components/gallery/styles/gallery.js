import styled, { css } from "styled-components/macro";

import { BsFillImageFill } from "react-icons/bs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

export const Face = styled.div``;

export const Icon = styled(BsFillImageFill)``;

export const Backdrop = styled.div`
  ${({ theme }) => theme.animations.fade};
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.auxillary};
  position: relative;
  border-radius: 0.4rem;
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
  cursor: pointer;
  height: 85px;
  width: 150px;
`;

export const Loading = styled.div``;

export const Miniature = styled.img`
  border-radius: 0.5rem;
  user-select: none;
  width: inherit;
`;
