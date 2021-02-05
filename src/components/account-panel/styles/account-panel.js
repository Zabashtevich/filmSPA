import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.05);
  padding: 3rem 4rem;
`;

export const Placeholder = styled.div`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.large};
`;
