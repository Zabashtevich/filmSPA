import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;

export const Category = styled.h3`
  display: block;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  user-select: none;
  color: #fff;
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 3px #fff solid;
  border-radius: 2rem;
  z-index: 100;
`;

export const Anchor = styled.div`
  justify-self: center;
  display: flex;
  height: 30px;
  width: 80px;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  z-index: 50;
  ${({ side }) =>
    side === "left"
      ? "border-radius: 2rem 0 0 2rem"
      : "border-radius: 0 2rem 2rem 0"};
  ${({ color }) =>
    color &&
    css`
      background-color: ${({ theme }) => theme.colors.headerIcon};
    `};
`;
