import styled, { css } from "styled-components/macro";

import { IoIosStar } from "react-icons/io";

export const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

export const Wrapper = styled.div`
  width: 400px;
  margin-left: 5rem;
`;

export const Vote = styled.div`
  display: flex;
  margin-right: 1rem;
  align-items: center;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.2rem 0.4rem;
`;

export const Name = styled.div`
  margin: 0.4rem;
`;

export const Character = styled.div`
  margin: 0.4rem;
`;

export const Date = styled.div``;

export const Star = styled(IoIosStar)`
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const Highscore = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const Container = styled.div`
  background-color: white;
  margin: 1rem 1rem;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  height: 50px;
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
      background-color: rgba(0, 255, 0, 0.2);
      &:hover {
        color: black;
      }
    `};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    transition: 500ms;
    ${Vote} {
      background-color: white;
      color: black;
      transition: 500ms;
    }
  }
`;
