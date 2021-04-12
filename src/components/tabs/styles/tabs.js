import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  user-select: none;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Item = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: ${({ theme }) => theme.colors.main};
  border-bottom: 2px solid rgba(0, 0, 0, 1);
  border-right: 2px solid rgba(0, 0, 0, 1);
  border-top: 2px solid rgba(0, 0, 0, 1);

  text-transform: uppercase;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  color: white;

  ${({ leftTab }) =>
    leftTab &&
    css`
      border-left: 2px solid rgba(0, 0, 0, 1);
      border-radius: 0.4rem 0 0 0.4rem;
    `};

  ${({ rightTab }) =>
    rightTab &&
    css`
      border-radius: 0 0.4rem 0.4rem 0;
    `};

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
    transition: 300ms;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: white;
      color: black;
      &:hover {
        background-color: white;
        color: black;
      }
    `};
`;
