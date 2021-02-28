import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Inner = styled.div`
  overflow-x: scroll;
  font-family: ${({ theme }) => theme.font.aux.family};
  ${({ disabled }) =>
    disabled &&
    css`
      overflow-x: auto;
    `};
  &::-webkit-scrollbar {
    width: 1em;
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }
`;

export const Container = styled.div`
  width: 1200px;
  height: 250px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  margin-top: 0.5rem;
  color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid white;
  transition: 300ms;
`;

export const Poster = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Item = styled(ReactRouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  padding: 0.2rem;
  &:hover {
    ${Poster} {
      transform: scale(1.05);
      transition: 500ms;
    }
    ${Title} {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

export const ImagePlaceholder = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Placeholder = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-weight: ${({ theme }) => theme.font.aux.weight.heavy};
  color: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
`;
