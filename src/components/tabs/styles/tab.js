import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Category = styled.span`
  display: block;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.normal};
  user-select: none;
  white-space: nowrap;
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px #000 solid;
  border-radius: 2rem;
  align-items: center;
`;

export const Anchor = styled.div`
  justify-self: center;
  display: flex;
  height: 20px;
  width: 80px;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  z-index: 50;
  transition: all 500ms;
  color: #000;
  ${({ side }) =>
    side === "left"
      ? "border-radius: 2rem 0 0 2rem"
      : side === "right"
      ? "border-radius: 0 2rem 2rem 0"
      : null};
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: #fff;
    `};
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0;
  align-self: center;
  color: #000;
  user-select: none;
`;

export const TitleInner = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-right: 20px;
  &:nth-child(1n + 2) {
    margin: 0 20px;
  }
`;
