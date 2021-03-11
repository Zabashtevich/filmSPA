import styled, { css } from "styled-components/macro";

import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
`;

export const Item = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.1rem;
  padding: 0.2rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.aux};
    transition: 300ms;
    color: white;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
    `};
`;

export const Dummy = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.1rem;
  padding: 0.2rem;
`;

export const Left = styled(BsChevronDoubleLeft)``;

export const Right = styled(BsChevronDoubleRight)``;
