import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  overflow-x: auto;
  ${({ scroll }) =>
    scroll &&
    css`
      overflow-x: scroll;
    `};
  &::-webkit-scrollbar {
    width: 1em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  transition: 500ms;
  &::after {
    content: "";
    position: absolute;
    width: 120px;
    height: 100%;
    right: 0;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      #fff 80%
    );
    visibility: visible;
    opacity: 1;
    transition: 300ms;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      &::after {
        visibility: hidden;
        opacity: 0;
      }
    `};
`;

export const Item = styled(ReactRouterLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #333;
  padding: 0.6rem;
  border-radius: 0.2rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 300ms;
  }
`;

export const Inner = styled.div`
  position: relative;
`;

export const Poster = styled.img`
  border-radius: 0.2rem;
`;

export const Title = styled.span`
  text-align: center;
`;

export const Placeholder = styled.img``;

export const Error = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin: 0 auto;
  padding: 3rem 0;
`;
