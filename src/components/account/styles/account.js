import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1300px;
  padding: 6rem 0;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 300px;
`;

export const Poster = styled.img`
  border-radius: 0.5rem;
  max-width: 200px;
`;

export const Nickname = styled.span`
  margin-top: 0.5rem;
`;

export const Content = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 900px;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
`;

export const Placeholder = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.5);
  margin-top: 5rem;
`;
