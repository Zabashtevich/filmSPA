import styled, { css } from "styled-components/macro";

import { IoIosStar } from "react-icons/io";

export const Numerator = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
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
  margin-left: 5rem;
`;

export const Name = styled.div`
  margin: 0.4rem;
`;

export const Character = styled.div`
  margin: 0.4rem;
`;

export const Date = styled.div``;

export const Star = styled(IoIosStar)`
  font-size: ${({ theme }) => theme.fontSize.small};
  & > * {
    pointer-events: none;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  background-color: white;
  margin: 1rem 1rem;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
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
