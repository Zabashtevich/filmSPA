import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: gray;
  margin-bottom: 3rem;
`;

export const Item = styled.div`
  width: 550px;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  white-space: nowrap;
  align-items: center;
  margin: 0.3rem 0.3rem;
`;

export const Name = styled.span`
  margin-right: 0.5rem;
  width: 75px;
  background-color: white;
  padding: 0.3rem 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  user-select: none;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Element = styled.span`
  text-decoration: none;
  color: black;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  padding: 0.3rem 0.5rem;
  margin: 0 0.2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      background-color: white;
      color: black;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        transition: 500ms;
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: gray;
      cursor: not-allowed;
    `}
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: 500ms;
  }
  transition: 500ms;
`;

export const Select = styled.select`
  width: 100px;
  background-color: rgba(0, 0, 0, 1);
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.1rem;
  padding: 0.15rem 0.5rem;
  margin: 0 0.2rem;
  color: white;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  cursor: pointer;
  &:focus {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Option = styled.option`
  background-color: gray;
  font-weight: inherit;
`;

export const Button = styled.button`
  width: 100px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.1rem;
  padding: 0.25rem 0.1rem;
  color: black;
  background-color: white;
  text-align: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    transition: 300ms;
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    color: white;
  }
`;
