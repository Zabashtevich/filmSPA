import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
`;

export const Poster = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  height: 450px;
  width: 300px;

  @media (max-width: 950px) {
    height: 360px;
    width: 240px;
  }

  @media (max-width: 750px) {
    height: 270px;
    width: 180px;
  }
`;

export const Subtitle = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  height: 27px;
  width: 250px;

  @media (max-width: 950px) {
    height: 18px;
    width: 150px;
  }

  @media (max-width: 750px) {
    margin: 1rem auto;
  }
`;

export const Row = styled.div`
  flex-direction: column;
  margin: 0.5rem 0;
  display: flex;
  width: 100%;
`;

export const Fieldname = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin: 0.1rem 0;
  height: 18px;
  width: 90px;

  @media (max-width: 950px) {
    height: 14px;
    width: 75px;
  }
`;

export const Fieldvalue = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  height: 18px;
  width: 60px;

  @media (max-width: 950px) {
    height: 14px;
    width: 40px;
  }
`;

export const Title = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  height: 55px;
  width: 250px;

  @media (max-width: 950px) {
    height: 27px;
  }

  @media (max-width: 750px) {
    margin: 1rem auto;
  }
`;

export const List = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const Overview = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin: 0.2rem 0;
  height: 18px;
  width: 100%;

  @media (max-width: 500px) {
    height: 14px;
  }
`;

export const Devider = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin: 1rem 0;
  width: 100%;
`;
