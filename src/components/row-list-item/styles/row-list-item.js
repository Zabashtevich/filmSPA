import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  background-color: white;
  margin: 1rem 1rem;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
  ${({ backgroundsecondary }) =>
    backgroundsecondary &&
    css`
      background-color: rgba(0, 0, 0, 0.1);
    `};
  ${({ rated }) =>
    rated &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
      &:hover {
        color: black;
      }
    `};
  &:hover {
    background-color: rgba(0, 255, 0, 0.05);
    transition: 500ms;
  }
`;

export const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

export const Wrapper = styled.div`
  width: 400px;
`;

export const Name = styled.div`
  margin: 0.4rem;
`;

export const Character = styled.div`
  margin: 0.4rem;
`;

export const Date = styled.div``;
