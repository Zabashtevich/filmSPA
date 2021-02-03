import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.noremal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin-top: 1rem;
  padding: 0 2rem;
`;

export const Item = styled.span`
  display: block;
  padding: 0.6rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
  color: #000;
  border-radius: 0.6rem;
  margin-right: 0.5rem;
  border: 1px solid hsla(0, 30%, 10%, 0.1);
  box-shadow: 1px 2px 1px 1px hsla(0, 0%, 50%, 0.1);
  cursor: pointer;
  transition: 750ms;
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: #fff;
    `};
`;

export const DummyItem = styled.span`
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
  padding: 0.6rem;
  border-radius: 0.6rem;
  border: 1px solid hsla(0, 30%, 10%, 0.1);
  box-shadow: 1px 2px 1px 1px hsla(0, 0%, 50%, 0.1);
  cursor: pointer;
`;