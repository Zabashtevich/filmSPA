import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-family: ${({ theme }) => theme.font.aux.family};
  cursor: pointer;
  display: flex;
`;

export const Anchor = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 1);
  padding: 0.4rem 0.6rem;
  color: white;
  ${({ direction }) =>
    direction === "left" &&
    css`
      border-radius: 1rem 0 0 1rem;
      border-right: none;
    `};
  ${({ direction }) =>
    direction === "right" &&
    css`
      border-radius: 0 1rem 1rem 0;
      border-left: none;
    `};
  ${({ active }) =>
    active &&
    css`
      background-color: rgba(0, 0, 0, 0.6);
    `}
`;

export const Title = styled.span``;
