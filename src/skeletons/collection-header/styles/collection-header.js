import styled from "styled-components/macro";

export const Poster = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  height: 450px;
  width: 300px;

  @media (max-width: 1100px) {
    height: 390px;
    width: 260px;
  }

  @media (max-width: 900px) {
    height: 300px;
    width: 200px;
  }

  @media (max-width: 600px) {
    height: 240px;
    width: 160px;
  }

  @media (max-width: 500px) {
    height: 300px;
    width: 200px;
  }
`;
