import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  max-width: 65%;
  margin: 8rem 0;
  padding: 0 3rem;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.aux.family};
  border-left: 1px solid gray;
`;

export const Name = styled.h2`
  margin: 0;
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  z-index: 100;
`;

export const Title = styled.h3`
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  z-index: 100;
  font-weight: ${({ theme }) => theme.font.aux.weight.normal};
`;

export const Overview = styled.h4`
  margin: 0;
  padding: 0 0.5rem;
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  margin: 0;
`;

export const CreditsWrapper = styled.div``;
