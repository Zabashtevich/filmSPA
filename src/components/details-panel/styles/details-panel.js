import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1300px;
  margin: 4rem auto;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Overview = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  margin: 0 1rem;
  padding: 1rem;
  border-top: 1px solid gray;
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;
