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

  @media (max-width: 620px) {
    justify-content: center;
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
  margin-top: 100px;
  width: 675px;

  @media (max-width: 900px) {
    width: 400px;
  }

  @media (max-width: 400px) {
    width: 320px;
  }
`;

export const Column = styled.div`
  ${({ theme }) => theme.animations.fade()};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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

      @media (max-width: 620px) {
        margin-top: 20rem;
      }
    `};

  ${({ type }) =>
    type === "content" &&
    css`
      margin: 0 1rem;
      margin-top: 15rem;

      @media (min-width: 1200px) {
        width: 700px;
      }

      @media (max-width: 1200px) {
        width: 500px;
      }

      @media (max-width: 900px) {
        width: 400px;
      }

      @media (max-width: 620px) {
        margin-top: 2rem;
        width: 320px;
      }
    `};
  ${({ type }) =>
    type === "cast" &&
    css`
      margin: 0 1rem;
      margin-top: 15rem;

      @media (max-width: 620px) {
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
      }
    `};
`;

export const Poster = styled.img`
  border-radius: 0.4rem;

  @media (max-width: 1200px) {
    height: 350px;
  }

  @media (max-width: 900px) {
    height: 250px;
  }
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  align-self: flex-start;

  @media (min-width: 1200px) {
    width: 700px;
  }

  @media (max-width: 1200px) {
    font-size: 1.4rem;
    width: 500px;
  }

  @media (max-width: 620px) {
    font-size: 1.2rem;
  }

  @media (max-width: 900px) {
    width: 300px;
  }
`;

export const Overview = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  align-self: flex-start;

  @media (min-width: 1200px) {
    width: 700px;
  }

  @media (max-width: 1200px) {
    font-size: 0.8rem;
    width: 500px;
  }

  @media (max-width: 900px) {
    width: 400px;
  }

  @media (max-width: 620px) {
    font-size: 0.6rem;
    width: 320px;
  }
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  align-self: flex-start;
  margin: 2rem 0;

  @media (max-width: 620px) {
    align-self: center;
  }
`;

export const Row = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 0;
  display: flex;
  color: white;

  @media (min-width: 1200px) {
    width: 700px;
  }

  @media (max-width: 1200px) {
    width: 500px;
  }

  @media (max-width: 900px) {
    width: 400px;
  }

  @media (max-width: 620px) {
    font-size: 0.8rem;
    width: 300px;
  }
`;

export const Fieldname = styled.div`
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
  text-align: left;
  width: 150px;

  @media (max-width: 900px) {
    width: 80px;
  }
`;

export const Fieldvalue = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  width: 350px;

  @media (max-width: 900px) {
    width: 200px;
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

  @media (max-width: 1000px) {
    font-size: 0.7rem;
    max-width: 80px;
  }

  @media (max-width: 620px) {
    overflow: visible;
    font-size: 1rem;
    max-width: 150px;
  }
`;
