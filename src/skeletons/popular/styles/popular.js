import styled from "styled-components/macro";

export const Poster = styled.div`
  ${({ theme }) => theme.animations.skeleton};
  border-radius: 0.2rem;
  min-width: 250px;
  margin: 0 0.1rem;
  height: 450px;

  @media (max-width: 1100px) {
    min-width: 200px;
    height: 375px;
  }

  @media (max-width: 750px) {
    min-width: 150px;
    height: 275px;
  }

  @media (max-width: 500px) {
    min-width: 100px;
    height: 200px;
  }
`;
