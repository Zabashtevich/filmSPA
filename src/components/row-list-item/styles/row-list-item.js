import styled, { css } from "styled-components/macro";

import { IoIosStar } from "react-icons/io";

export const Numerator = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  user-select: none;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
`;

export const Number = styled.div``;

export const Wrapper = styled.div`
  width: 400px;
  margin-left: 3rem;
`;

export const Name = styled.div`
  margin: 0.4rem;
`;

export const Character = styled.div`
  margin: 0.4rem;
  white-space: nowrap;
`;

export const Date = styled.div``;

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const VoteAmount = styled.div`
  color: gray;
  margin-left: 5px;
`;

export const VoteAverage = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Star = styled(IoIosStar)`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  & > * {
    pointer-events: none;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  background-color: white;
  margin: 1rem 1rem;
  display: flex;
  font-family: ${({ theme }) => theme.font.aux.family};
  height: 50px;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
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
  }
  ${({ theme }) => theme.animations.opacityLong};
`;
