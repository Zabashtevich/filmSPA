import styled from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  white-space: nowrap;
  padding: 0.6rem 0.6rem;
`;

export const Message = styled.span`
  background-color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
`;
