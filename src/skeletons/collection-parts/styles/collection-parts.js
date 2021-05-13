import styled from "styled-components/macro";

export const Container = styled.div`
  border-radius: 0.2rem;
  align-items: center;
  margin: 1rem 0;
  display: flex;
  height: 150px;

  @media (max-width: 550px) {
    height: 100px;
  }
`;

export const Poster = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  border-radius: 0.2rem;
  height: 150px;
  width: 200px;

  @media (max-width: 550px) {
    height: 100px;
    width: 100px;
  }
`;

export const Info = styled.div`
  animation: ${({ theme }) => theme.animations.skeleton} 2s infinite linear;
  background: ${({ theme }) => theme.colors.skeleton};
  width: calc(80% - 100px);
  border-radius: 0.2rem;
  margin-left: 0.5rem;
  height: 18px;
`;
