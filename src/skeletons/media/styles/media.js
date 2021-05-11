import styled from "styled-components/macro";

export const Poster = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  height: 300px;
  width: 200px;

  @media (max-width: 1200px) {
    height: 240px;
    width: 160px;
  }

  @media (max-width: 800px) {
    height: 198px;
    width: 132px;
  }

  @media (max-width: 500px) {
    height: 150px;
    width: 100px;
  }
`;
