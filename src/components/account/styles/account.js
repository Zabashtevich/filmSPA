import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  flex-direction: column;
  padding: 1rem 0;
  display: flex;
  ${({ type }) =>
    type === "poster" &&
    css`
      align-items: center;
      width: 300px;
    `};
  ${({ type }) =>
    type === "content" &&
    css`
      width: 900px;
    `};
`;

export const Poster = styled.img`
  border-radius: 0.5rem;
  max-width: 150px;
`;

export const Nickname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.6);
  margin-top: 0.5rem;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  color: rgba(0, 0, 0, 0.5);
  margin: 0 auto 4rem;
`;

export const Section = styled.div``;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const List = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Item = styled.div``;

export const Thumbnail = styled.div``;

export const Info = styled.div``;

export const Name = styled.div``;

export const Amount = styled.div``;

export const Settings = styled.div``;
