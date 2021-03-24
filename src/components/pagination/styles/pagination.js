import styled, { css } from "styled-components/macro";

import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  justify-content: center;
  align-items: center;
  user-select: none;
  margin-top: 1rem;
  display: flex;
  width: 100%;
`;

export const Item = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  border-radius: 0.3rem;
  align-items: center;
  margin: 0 0.2rem;
  cursor: pointer;
  display: flex;
  height: 30px;
  width: 25px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.aux};
    transition: 300ms;
    color: white;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
      transition: 300ms;
      color: white;
    `};
`;

export const Dummy = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  border-radius: 0.3rem;
  align-items: center;
  display: flex;
  height: 30px;
  width: 25px;
`;

export const Left = styled(BsChevronDoubleLeft)``;

export const Right = styled(BsChevronDoubleRight)``;
