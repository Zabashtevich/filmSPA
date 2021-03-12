import styled from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  padding: 3rem 1rem;
  margin-top: 1rem;
`;

export const Review = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 2rem auto;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
`;

export const Nickname = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Avatar = styled.div``;

export const Placeholder = styled.div``;

export const Value = styled.div``;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: auto;
`;

export const Text = styled.div``;
