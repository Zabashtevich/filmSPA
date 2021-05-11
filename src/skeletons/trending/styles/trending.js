import styled from "styled-components/macro";

export const Poster = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  height: 300px;
  width: 200px;
`;
