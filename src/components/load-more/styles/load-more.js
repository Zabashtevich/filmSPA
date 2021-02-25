import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.font.aux.family};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  ${({ theme }) => theme.animations.fadeLtR};
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  outline: none;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  ${({ reviewpage }) =>
    reviewpage &&
    css`
      background-color: ${({ theme }) => theme.colors.reviewsBackground};
      color: ${({ theme }) => theme.colors.secondary};
    `}
  &:hover {
    background-color: #fff;
    color: black;
    border: 1px solid gray;
    transition: all 0.2s linear;
  }
`;
