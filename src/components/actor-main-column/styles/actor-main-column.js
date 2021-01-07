import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  max-width: 65%;
  margin: 8rem 0;
  padding: 0 3rem;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border-left: 1px solid gray;
`;

export const Name = styled.h2`
  margin: 0;
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  z-index: 100;
`;

export const Title = styled.h3`
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  z-index: 100;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
`;

export const Overview = styled.h4`
  margin: 0;
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  margin: 0;
`;

export const CreditsWrapper = styled.div``;

export const Row = styled.div`
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

export const Date = styled.span`
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin: 0 1rem;
`;

export const ItemName = styled.span``;

export const Number = styled.div`
  width: 5%;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const Character = styled.div`
  margin-top: 1rem;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  color: gray;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
