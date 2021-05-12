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

  @media (max-width: 750px) {
    height: 300px;
    width: 200px;
  }
`;

export const Wrapper = styled.div`
  border-radius: 0.2rem;
  align-self: center;
  margin-left: 2rem;
  width: 100%;

  @media (min-width: 1300px) {
    max-width: 700px;
  }

  @media (max-width: 1300px) {
    max-width: 700px;
  }

  @media (max-width: 1000px) {
    max-width: 600px;
  }

  @media (max-width: 750px) {
    margin-top: 2rem;
    margin-left: 0;
    max-width: 450px;
  }

  @media (max-width: 450px) {
    max-width: 320px;
  }
`;

export const Title = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  height: 55px;
  width: 600px;

  @media (max-width: 900px) {
    height: 36px;
  }

  @media (max-width: 750px) {
    margin: 0 auto;
    margin-bottom: 2rem;

    width: 200px;
    height: 22px;
  }
`;

export const Subtitle = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  height: 27px;
  width: 150px;

  @media (max-width: 900px) {
    height: 22px;
  }

  @media (max-width: 750px) {
    height: 18px;
  }
`;

export const Overview = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  width: 450px;
  height: 14px;

  @media (max-width: 900px) {
    width: 400px;
    height: 14px;
  }

  @media (max-width: 900px) {
    width: 190px;
    height: 14px;
  }
`;

export const Row = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin: 0.1rem 0;
  width: 200px;
  height: 18px;

  @media (max-width: 900px) {
    height: 14px;
  }
`;
