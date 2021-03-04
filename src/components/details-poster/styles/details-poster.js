import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  background: linear-gradient(180deg, #000 724px, #232323 99%);
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  z-index: 50;
`;

export const Inner = styled.div`
  transform: translateX(-50%);
  position: absolute;
  display: flex;
  z-index: 100;
  left: 50%;
  top: 0;
  &::after {
    background: linear-gradient(180deg, transparent 36%, #000 96%),
      linear-gradient(90deg, transparent 87%, #000),
      linear-gradient(270deg, transparent 87%, #000);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: "";
  }
`;

export const Wallpaper = styled.img`
  width: 675px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 15rem;
  z-index: 200;
  color: white;
  ${({ type }) =>
    type === "poster" &&
    css`
      width: 300px;
    `};
  ${({ type }) =>
    type === "content" &&
    css`
      width: 600px;
    `};
  ${({ type }) =>
    type === "cast" &&
    css`
      margin: 15rem 1rem;
      width: 150px;
    `};
`;

export const Poster = styled.img`
  border-radius: 0.4rem;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  align-self: flex-start;
`;

export const Overview = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  align-self: flex-start;
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  align-self: flex-start;
  margin: 2rem 0;
`;

export const Row = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 0;
  display: flex;
  color: white;
`;

export const Fieldname = styled.div`
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
  text-align: left;
  width: 150px;
`;

export const Fieldvalue = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  width: 350px;
`;

export const Credits = styled.div``;

export const Link = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  text-decoration: none;
  margin-top: 0.5rem;
  display: block;
  color: white;
  &:hover {
    color: ${({ theme }) => theme.colors.aux};
    transition: 300ms;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  width: 100px;
`;

export const Average = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.large};
`;

export const Count = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  color: rgba(255, 255, 255, 0.7);
  padding-left: 0.4rem;
`;
