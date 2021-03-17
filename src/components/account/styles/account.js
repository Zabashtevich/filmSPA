import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  flex-direction: column;
  display: flex;
  ${({ type }) =>
    type === "poster" &&
    css`
      width: 300px;
    `};
  ${({ type }) =>
    type === "content" &&
    css`
      width: 900px;
    `};
`;

export const Poster = styled.img`
  border-radius: 0.2rem;
  width: 150px;
`;

export const Nickname = styled.span``;

export const List = styled.div``;

export const Settings = styled.div``;

export const Title = styled.div``;
