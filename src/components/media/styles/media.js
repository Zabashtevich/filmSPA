import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Header = styled.div`
  align-items: center;
  padding: 0 2rem;
  display: flex;
  height: 75px;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const All = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  color: ${({ theme }) => theme.colors.aux};
  text-decoration: none;
  user-select: none;
  margin-left: auto;
  cursor: pointer;
`;

export const Scroller = styled.div`
  ${({ theme }) => theme.animations.fade()};
  position: relative;
  overflow-x: scroll;
  transition: 300ms;
  display: flex;
  &::after {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      #fff 80%
    );
    visibility: visible;
    position: absolute;
    height: 100%;
    content: "";
    width: 100px;
    opacity: 1;
    right: 0;
  }
  & > *:first-child {
    border-radius: 0.5rem 0 0;
  }
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.05);
  }
  ${({ blured }) =>
    blured &&
    css`
      &::after {
        visibility: hidden;
        transition: 150ms;
        opacity: 0;
      }
    `};
`;

export const Poster = styled.img`
  ${({ theme }) => theme.animations.fade(500, 0, 500)};
  height: 300px;
  width: 200px;

  @media (max-width: 1200px) {
    height: 240px;
    width: 160px;
  }

  @media (max-width: 800px) {
    height: 198px;
    width: 132px;
  }

  @media (max-width: 500px) {
    height: 150px;
    width: 100px;
  }
`;
