import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  background: linear-gradient(180deg, #000 724px, #232323 99%);
  justify-content: center;
  padding-bottom: 5rem;
  padding-top: 4rem;
  position: relative;
  min-height: 860px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  z-index: 50;
  width: 100%;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Inner = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
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
  margin-top: 70px;
  max-width: 675px;

  @media (max-width: 675px) {
    max-width: 320px;
  }
`;

export const Column = styled.div`
  ${({ theme }) => theme.animations.fade()};
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  margin-top: 15rem;
  z-index: 200;
  color: white;
  ${({ type }) =>
    type === "poster" &&
    css`
      align-items: center;
      margin: 0 1rem;
      margin-top: 15rem;
    `};

  ${({ type }) =>
    type === "content" &&
    css`
      margin: 0 1rem;
      margin-top: 15rem;
      width: 700px;

      @media (max-width: 1200px) {
        width: 500px;
      }

      @media (max-width: 900px) {
        width: 400px;
      }

      @media (max-width: 500px) {
        width: 300px;
      }
    `};
  ${({ type }) =>
    type === "cast" &&
    css`
      margin: 0 1rem;
      margin-top: 15rem;

      @media (max-width: 850px) {
        align-items: center;
        margin-top: 2rem;
      }

      @media (max-width: 500px) {
        margin-top: 1rem;
      }
    `};
`;

export const Poster = styled.img`
  border-radius: 0.4rem;
  height: 450px;
  width: 300px;

  @media (max-width: 1000px) {
    height: 300px;
    width: 200px;
  }

  @media (max-width: 850px) {
    height: 450px;
    width: 300px;
  }
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  align-self: flex-start;

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`;

export const Overview = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  align-self: flex-start;

  @media (max-width: 850px) {
    font-size: 0.8rem;
  }
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  align-self: flex-start;
  margin: 2rem 0;

  @media (max-width: 850px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
    margin: 0 auto;
    margin-top: 1rem;
  }
`;

export const Row = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 0;
  display: flex;
  color: white;

  @media (max-width: 850px) {
    font-size: 0.8rem;
  }
`;

export const Fieldname = styled.div`
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
  text-align: left;
  width: 150px;
`;

export const Fieldvalue = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  white-space: wrap;
  max-width: 350px;

  @media (max-width: 600px) {
    max-width: 250px;
  }

  @media (max-width: 450px) {
    max-width: 125px;
  }
`;

export const Link = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  text-overflow: ellipsis;
  text-decoration: none;
  white-space: nowrap;
  margin-top: 0.5rem;
  overflow: hidden;
  display: block;
  color: white;
  &:hover {
    color: ${({ theme }) => theme.colors.aux};
    transition: 300ms;
  }

  @media (max-width: 850px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.aux.size.small};
  }
`;
