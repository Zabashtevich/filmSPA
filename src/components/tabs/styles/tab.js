import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;

export const Category = styled.h3`
  display: block;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px #fff solid;
`;

export const Anchor = styled.div`
  justify-self: center;
  display: flex;
  height: 30px;
  width: 80px;
  justify-content: center;
  padding: 10px;

  ${({ color }) =>
    color &&
    css`
      background-color: ${({ theme }) => theme.colors.headerIcon};
    `};
`;
