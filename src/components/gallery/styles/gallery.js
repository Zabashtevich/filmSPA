import styled, { css } from "styled-components/macro";

import { BsFillImageFill } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
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
    transform: scale(0.98);
    transition: 300ms;
  }
`;

export const Active = styled.img`
  border-radius: 0.4rem 0.4rem 0 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  align-items: center;
  outline: none;
  border-radius: 20%;
  padding: 0;
  border: none;
  display: flex;
  &:active {
    transform: scale(0.98);
  }
`;

export const Arrow = styled(BsChevronLeft)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20%;
  border: 1px solid rgba(0, 0, 0, 0.6);
  color: white;
  ${({ direction }) =>
    direction === "right" &&
    css`
      transform: rotate(180deg);
    `};
`;

export const Miniature = styled.img`
  width: 50px;
`;
