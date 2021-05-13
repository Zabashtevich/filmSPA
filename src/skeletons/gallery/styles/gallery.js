import styled from "styled-components";

export const Thumbnail = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.3rem;
  height: 100px;
  width: 66px;
`;

export const Title = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin-left: 1rem;
  height: 36px;
  width: 130px;
`;

export const Poster = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  margin: 0.5rem;
  height: 300px;
  width: 200px;

  @media (max-width: 1200px) {
    height: 240px;
    width: 160px;
  }

  @media (max-width: 900px) {
    height: 180px;
    width: 120px;
  }

  @media (max-width: 700px) {
    margin: 0.1rem 0;
    height: 150px;
    width: 100px;
  }
`;

export const Menu = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  padding: 0.8rem 0;
  margin: 0.4rem 0;
  height: 15px;
  width: 100%;
`;
