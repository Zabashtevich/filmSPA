import styled from "styled-components/macro";

export const Container = styled.div`
  justify-content: space-around;
  max-width: 1300px;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;

  @media (max-width: 650px) {
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
`;

export const Content = styled.div`
  ${({ theme }) => theme.animations.fade()};
  max-width: 900px;
`;

export const Poster = styled.img`
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  height: 450px;
  width: 300px;

  @media (max-width: 650px) {
    height: 270px;
    width: 180px;
  }

  @media (max-width: 900px) {
    height: 360px;
    width: 240px;
  }
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};

  @media (max-width: 950px) {
    font-size: 1rem;
  }

  @media (max-width: 650px) {
    text-align: center;
    margin: 1rem 0;
  }
`;

export const Row = styled.div`
  flex-direction: column;
  margin: 0.5rem 0;
  display: flex;
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

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 950px) {
    font-size: 1.5rem;
  }

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
    margin: 1rem 0;
  }
`;

export const Overview = styled.span`
  white-space: pre-line;
  margin-top: 1rem;

  @media (max-width: 1300px) {
    width: 800px;
  }

  @media (max-width: 1150px) {
    width: 600px;
  }

  @media (max-width: 950px) {
    width: 480px;
  }

  @media (max-width: 750px) {
    width: 350px;
  }

  @media (max-width: 650px) {
    font-size: 0.8rem;
    width: 400px;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
    width: 300px;
  }
`;
