import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
  position: relative;
  ${({ type }) =>
    type === "poster" &&
    css`
      width: 300px;
      align-items: center;
    `};
  ${({ type }) =>
    type === "content" &&
    css`
      margin-left: 2rem;
      max-width: 800px;
    `};
`;

export const Poster = styled.img`
  border-radius: 5px;
`;

export const Placeholder = styled.img`
  border-radius: 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 0.5rem;
`;

export const Fieldname = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Fieldvalue = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
`;

export const Biography = styled.div`
  max-width: 800px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  margin: 5rem 0 2rem;
  ${({ type }) =>
    type === "info" &&
    css`
      margin: 2rem auto;
    `};
`;
