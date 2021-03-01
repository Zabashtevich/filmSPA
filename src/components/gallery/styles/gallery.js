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
  max-width: 900px;
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
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid black;
  padding: 2rem 0.2rem;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: white;
  display: flex;
  height: 100%;
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background-color: white;
    color: black;
    transition: 300ms;
  }
`;

export const ArrowLeft = styled(BsChevronLeft)``;

export const ArrowRight = styled(BsChevronRight)``;

export const Wrapper = styled.div`
  display: flex;
`;

export const Inner = styled.div`
  border: 1px solid black;
  display: flex;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
  }
  &:hover {
    border: 1px solid gray;
    transition: 400ms;
    &::before {
      visibility: visible;
      opacity: 1;
      transition: 300ms;
    }
  }
  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid white;
    `};
`;

export const Miniature = styled.img`
  width: 150px;
`;
