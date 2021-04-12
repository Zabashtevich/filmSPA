import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Section = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Container = styled.div`
  border-radius: 0.4rem;
  align-items: center;
  padding: 0 0 1rem 0;
  position: relative;
  overflow-x: scroll;
  max-width: 1300px;
  margin-top: 1rem;
  display: flex;

  &::-webkit-scrollbar {
    width: 1em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 10px;
  }

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
  flex-direction: column;
  text-decoration: none;
  margin: 0 0.1rem;
  display: flex;
  color: black;
`;

export const Poster = styled.img`
  border-radius: 0.2rem;
  height: 375px;
  width: 250px;
`;

export const Description = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  padding: 0.3rem 0.5rem;
  display: flex;
  height: 75px;
  width: 100%;
`;

export const Row = styled.div`
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0;
  display: flex;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 180px;
  overflow: hidden;
`;

export const Average = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};

  ${({ value }) =>
    Math.floor(value) === 5 &&
    css`
      color: #3f3f3f;
    `};
  ${({ value }) =>
    Math.floor(value) > 5 &&
    css`
      color: green;
    `};
  ${({ value }) =>
    Math.floor(value) < 5 &&
    css`
      color: ${({ theme }) => theme.colors.negative};
    `};
`;

export const Year = styled.span``;

export const Count = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
`;
