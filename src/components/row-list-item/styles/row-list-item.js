import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 2rem 0 2rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid gray;
  ${({ backgroundcolor }) =>
    backgroundcolor &&
    css`
      background-color: ${({ theme }) => theme.colors.negativeReview};
    `}
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 0.1s linear;
  }
  z-index: 100;
`;

export const Date = styled.div`
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin: 0 1rem;
`;

export const Number = styled.div`
  width: 5%;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const Character = styled.div`
  margin-top: 1rem;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  color: gray;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  margin: 0;
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  z-index: 100;
`;
