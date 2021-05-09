import styled from "styled-components/macro";

export const Year = styled.div`
  ${({ theme }) => theme.animations.skeleton};
  border-radius: 0.5rem;
  margin-left: 0.1rem;
  margin-right: 3rem;
  height: 18px;
  width: 50px;

  @media (max-width: 1000px) {
    height: 14px;
    width: 40px;
  }

  @media (max-width: 400px) {
    height: 11px;
    width: 30px;
  }
`;

export const Subtitle = styled.div`
  ${({ theme }) => theme.animations.skeleton};
  border-radius: 0.5rem;
  height: 15px;
  width: 300px;

  @media (max-width: 1000px) {
    width: 200px;
    height: 12px;
  }

  @media (max-width: 500px) {
    height: 12px;
    width: 100px;
  }

  @media (max-width: 400px) {
    height: 11px;
    width: 80px;
  }
`;

export const Meta = styled.div`
  ${({ theme }) => theme.animations.skeleton};
  border-radius: 0.5rem;
  margin-left: 3rem;
  height: 27px;
  width: 70px;

  @media (max-width: 1000px) {
    margin-left: 1rem;
    height: 18px;
  }

  @media (max-width: 500px) {
    height: 12px;
  }
`;

export const Rating = styled.div`
  ${({ theme }) => theme.animations.skeleton};
  border-radius: 0.5rem;
  margin-right: 1rem;
  margin-left: auto;
  height: 34px;
  width: 40px;

  @media (max-width: 1000px) {
    height: 22px;
    width: 26px;
  }
`;
