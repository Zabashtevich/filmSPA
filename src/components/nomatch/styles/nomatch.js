import styled from "styled-components/macro";

export const Container = styled.div`
  height: 100vh;
  width: 100vh;
`;

export const Message = styled.h1`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  color: rgba(0, 0, 0, 0.5);
`;

export const Return = styled.button``;
