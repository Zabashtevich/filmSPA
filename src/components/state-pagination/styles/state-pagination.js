import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 80%;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 1rem auto;
`;

export const Item = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
  padding: 0.4rem 0.6rem;
  user-select: none;
  cursor: pointer;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
  margin-left: 0.5rem;
  ${({ active }) =>
    active &&
    css`
      background-color: rgba(255, 255, 255, 1);
      color: black;
      border: 1px solid rgba(0, 0, 0, 0.5);
      transition: 500ms;
      pointer-events: none;
    `};
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transition: 500ms;
  }
`;
