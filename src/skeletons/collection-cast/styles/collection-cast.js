import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5rem 0.2rem;
  border-radius: 0.2rem;
  align-items: center;
  display: flex;
  width: 250px;
  height: 60px;

  @media (max-width: 850px) {
    width: 200px;
    height: 60px;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    margin-top: 0.4rem;
    width: 250px;
    height: 60px;
  }
`;

export const Poster = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  height: 60px;
  width: 60px;
`;

export const Info = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  width: calc(90% - 60px);
  border-radius: 0.2rem;
  margin-left: 0.2rem;
  height: 14px;
`;
