import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  max-width: 70%;
  margin: 8rem 3rem;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  flex: auto;
`;

export const Name = styled.h2`
  margin: 0;
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const Title = styled.h3`
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
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
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 0.5rem 2rem;
  cursor: pointer;
`;

export const Date = styled.div`
  width: 10%;
`;

export const ItemName = styled.div``;
