import styled from "styled-components/macro";

export const Poster = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  background: ${({ theme }) => theme.colors.skeleton};
  margin: 0.8rem 0.4rem;
  height: 300px;
  width: 200px;

  @media (max-width: 1200px) {
    height: 240px;
    width: 160px;
  }

  @media (max-width: 750px) {
    margin: 0.4rem 0.2rem;
  }

  @media (max-width: 950px) {
    height: 180px;
    width: 120px;
  }

  @media (max-width: 550px) {
    height: 120px;
    width: 80px;
  }
`;
