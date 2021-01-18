import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  z-index: 200;
  margin: 8rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;

export const PosterWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  ${({ cardPage }) =>
    cardPage &&
    css`
      background-color: gray;
      border-radius: 0.5rem;
    `};
`;

export const Poster = styled.img`
  border-radius: 0.2rem;
  padding: 0.2rem;
  height: 450px;
  width: 300px;
`;
