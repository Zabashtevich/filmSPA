import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  align-items: center;
  ${({ margin }) =>
    margin &&
    css`
      margin-top: 4rem;
    `};
`;

export const Wrapper = styled.div``;

export const Score = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const Amount = styled.h3`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
`;
