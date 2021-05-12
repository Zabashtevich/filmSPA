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

export const Wrapper = styled.div``;

export const Title = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  height: 55px;
  width: 600px;
`;

export const Subtitle = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  height: 27px;
  width: 150px;
`;

export const Overview = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  width: 450px;
  height: 14px;
`;

export const Row = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  width: 200px;
  height: 18px;
`;
