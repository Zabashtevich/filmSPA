import styled from "styled-components/macro";

export const Container = styled.div`
  justify-content: space-around;
  max-width: 1300px;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  ${({ theme }) => theme.animations.fade()};
  flex-direction: column;
  margin-right: 1rem;
  max-width: 300px;
  display: flex;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.animations.fade(1000, 1000, 1000)};
  flex-direction: column;
  display: flex;

  @media (max-width: 750px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.animations.fade()};
  flex-direction: column;
  display: flex;

  @media (min-width: 1300px) {
    width: 1000px;
  }

  @media (max-width: 1300px) {
    width: 750px;
  }

  @media (max-width: 1100px) {
    width: 650px;
  }

  @media (max-width: 1000px) {
    width: 550px;
  }

  @media (max-width: 850px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 320px;
  }
`;

export const Poster = styled.img`
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

export const Subtitle = styled.h2`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin: 0;

  @media (max-width: 950px) {
    font-size: 1rem;
  }

  @media (max-width: 750px) {
    text-align: center;
    margin: 1rem 0;
  }
`;

export const Row = styled.div`
  flex-direction: column;
  margin: 0.5rem 0;
  display: flex;

  @media (max-width: 750px) {
    align-self: flex-start;
  }
`;

export const Fieldname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};

  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;

export const Fieldvalue = styled.span`
  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin: 0;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 950px) {
    font-size: 1.5rem;
  }

  @media (max-width: 750px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
    margin: 1rem 0;
  }
`;

export const Overview = styled.span`
  white-space: pre-line;
  margin-top: 1rem;

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
