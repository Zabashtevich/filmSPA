import styled from "styled-components/macro";

export const Poster = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.5rem;
  height: 450px;
  width: 300px;

  @media (max-width: 1000px) {
    height: 300px;
    width: 200px;
  }

  @media (max-width: 850px) {
    height: 450px;
    width: 300px;
  }
`;

export const Title = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin-bottom: 0.1rem;
  height: 27px;
  width: 250px;

  @media (max-width: 850px) {
    height: 18px;
  }
`;

export const Overview = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin: 0.2rem 0 0 0;
  height: 12px;
  width: 100%;

  @media (max-width: 850px) {
    height: 8px;
  }
`;

export const Subtitle = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin: 2rem 0;
  height: 14px;
  width: 100px;
`;

export const Row = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin: 0.1rem 0;
  height: 31px;
  width: 100%;
`;

export const Link = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin-top: 0.5rem;
  height: 14px;
  width: 100px;

  @media (max-width: 850px) {
    height: 18px;
    width: 150px;
  }

  @media (max-width: 500px) {
    height: 14px;
    width: 150px;
  }
`;
