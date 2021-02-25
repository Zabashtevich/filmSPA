import styled, { css } from "styled-components/macro";

import { AiFillCaretUp } from "react-icons/ai";
import { HiOutlineChevronLeft } from "react-icons/hi";

export const Face = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 0.2rem;
  font-family: ${({ theme }) => theme.font.aux.family};
  cursor: pointer;
  color: black;
  position: relative;
  margin-top: 2rem;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  display: flex;
  align-items: center;
  margin: 0 auto;
  user-select: none;
`;

export const Button = styled.div`
  height: 100%;
  padding: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 1);
  margin-left: auto;
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-left: 1px solid rgba(255, 255, 255, 1);
    color: white;
    transition: 300ms;
  }
`;

export const Arrow = styled(AiFillCaretUp)`
  transition: 300ms;
  ${({ dir }) =>
    dir === "down" &&
    css`
      transform: rotate(180deg);
    `};
  ${({ dir }) =>
    dir === "left" &&
    css`
      transform: rotate(-90deg);
    `};
`;

export const Chevron = styled(HiOutlineChevronLeft)`
  height: 100%;
  padding: 0 0.4rem;
  transition: 300ms;
  ${({ dir }) =>
    dir === "rotate" &&
    css`
      transform: rotate(180deg);
    `};
`;

export const Container = styled.div`
  background-color: white;
  top: calc(100% + 8px);
  border-radius: 0.2rem;
  position: absolute;
  padding: 0 0 0.6rem 0;
  width: 200px;
  right: 0;
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.div`
  align-self: flex-end;
  margin: 0.5rem 2rem;
  font-weight: ${({ theme }) => theme.font.aux.weight.heavy};
  user-select: none;
`;

export const Name = styled.span`
  padding: 0 0.8rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  &:hover {
    background-color: #f2f2f2;
    transition: 500ms;
  }
`;

export const Backdrop = styled.div`
  display: none;
`;

export const Element = styled.div``;

export const Added = styled.div``;
