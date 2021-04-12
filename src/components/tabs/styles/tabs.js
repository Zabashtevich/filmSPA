import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  user-select: none;
  display: flex;
  height: 75px;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  text-transform: uppercase;
`;

export const Wrapper = styled.div``;

export const Item = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: ${({ theme }) => theme.colors.main};
  border-bottom: 2px solid rgba(0, 0, 0, 1);
  border-right: 2px solid rgba(0, 0, 0, 1);
  border-top: 2px solid rgba(0, 0, 0, 1);

  text-transform: uppercase;
  padding: 0.3rem 0.4rem;
  transition: 300ms;
  cursor: pointer;
  color: white;

  ${({ leftTab }) =>
    leftTab &&
    css`
      border-left: 2px solid rgba(0, 0, 0, 1);
      border-top-left-radius: 0.4rem;
      border-bottom-left-radius: 0.4rem;
    `};

  ${({ rightTab }) =>
    rightTab &&
    css`
      border-top-right-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
    `};

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
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
