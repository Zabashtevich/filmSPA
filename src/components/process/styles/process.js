import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  min-height: 150px;
  min-width: 200px;
  position: fixed;
  top: 70%;
  left: 10%;
`;

export const Message = styled.div``;

export const Spinner = styled.div``;
