import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1300px;
  padding: 6rem 0;
  margin: 0 auto;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Column = styled.div`
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  display: flex;
  width: 100%;
`;

export const Poster = styled.img`
  object-position: top left;
  border-radius: 0.5rem;
  object-fit: cover;
  height: 200px;
  width: 200px;

  @media (max-width: 1000px) {
    height: 150px;
    width: 150px;
  }
`;

export const Nickname = styled.span`
  margin-top: 0.5rem;
`;

export const Content = styled.div`
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  padding: 0 1rem;
  display: flex;

  @media (max-width: 400px) {
    box-sizing: border-box;
    max-width: 320px;
  }
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};

  @media (max-width: 800px) {
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
  }
`;
