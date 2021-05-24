import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";
import { BsArrowLeftShort, BsFillPlayFill } from "react-icons/bs";

export const Container = styled.div`
  padding: 5rem 0;
  margin: 0 auto;
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.animations.fade()};
  align-items: center;
  margin-left: 10rem;
  max-width: 1300px;
  padding: 1rem 0;
  display: flex;
  color: white;

  @media (max-width: 750px) {
    margin-left: 3rem;
  }
`;

export const Folder = styled.img`
  object-position: top left;
  border-radius: 0.3rem;
  object-fit: cover;
  height: 100px;
  width: 66px;
`;

export const Information = styled.div`
  flex-direction: column;
  margin-left: 1rem;
  display: flex;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin: 0;
`;

export const Back = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  text-decoration: none;
  align-items: center;
  user-select: none;
  display: flex;
  color: white;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
    transition: 300ms;
  }
`;

export const Icon = styled(BsArrowLeftShort)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Body = styled.div`
  max-width: 1300px;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
`;

export const Widget = styled.div`
  flex-direction: column;
  align-items: center;
  max-width: 225px;
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 900px) {
    max-width: 150px;
    position: sticky;
    top: 10%;
  }

  @media (max-width: 600px) {
    max-width: 100px;
  }
`;

export const Column = styled.div`
  align-content: flex-start;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: row;
  min-height: 1000px;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  display: flex;
  width: 1050px;
  gap: 1rem;

  @media (max-width: 700px) {
    padding: 2rem 1rem;
  }
`;

export const Menu = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 0 0 0.3rem 0.3rem;
  flex-direction: column;
  padding-bottom: 1rem;
  align-items: center;
  margin-top: 2rem;
  display: flex;
  width: 100%;
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border-radius: 0.3rem 0.3rem 0 0;
  margin-bottom: 1rem;
  text-align: center;
  padding: 1rem 0;
  color: white;
  width: 100%;

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
  }
`;

export const List = styled.div`
  ${({ theme }) => theme.animations.fade()};
  width: 100%;
`;

export const Amount = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.5rem;
  width: 25px;

  @media (max-width: 900px) {
    font-size: 0.8rem;
    padding: 0.3rem;
  }
`;

export const Item = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  justify-content: space-between;
  align-items: center;
  transition: 300ms;
  cursor: pointer;
  display: flex;
  width: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    ${Amount} {
      background-color: white;
      transition: 300ms;
    }
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: rgba(0, 0, 0, 0.05);
      ${Amount} {
        background-color: white;
        transition: 300ms;
      }
    `};
`;

export const Value = styled.div`
  padding: 1rem;
  width: 75px;

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 0.7rem;
    padding: 0.5rem;
  }
`;

export const Backdrop = styled.img`
  ${({ theme }) => theme.animations.skeleton};
  object-position: top left;
  border-radius: 0.3rem;
  position: relative;
  max-height: 169px;
  object-fit: cover;
  margin: 0.5rem;
  width: 300px;

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3f3f3f,
      rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    outline: none;
  }

  &:hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 40%);
    transform: scale(1.02);
    transition: 200ms;
    cursor: pointer;
  }

  @media (max-width: 1300px) {
    margin: 0.1rem 0.3rem;
    width: 250px;
  }

  @media (max-width: 1000px) {
    width: 200px;
  }

  @media (max-width: 700px) {
    width: 120px;
  }

  @media (max-width: 500px) {
    max-width: 200px;
  }
`;

export const Poster = styled.img`
  ${({ theme }) => theme.animations.skeleton};
  object-position: top left;
  border-radius: 0.3rem;
  object-fit: cover;
  margin: 0.5rem;
  height: 300px;
  width: 200px;
  &:hover {
    box-shadow: 0 2px 8px rgb(0 0 0 / 40%);
    transform: scale(1.02);
    transition: 200ms;
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3f3f3f,
      rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    outline: none;
  }

  @media (max-width: 1200px) {
    height: 240px;
    width: 160px;
  }

  @media (max-width: 900px) {
    height: 180px;
    width: 120px;
  }

  @media (max-width: 700px) {
    margin: 0.1rem 0;
    height: 150px;
    width: 100px;
  }
`;

export const Video = styled.div`
  ${({ theme }) => theme.animations.skeleton};
  border-radius: 0.3rem;
  position: relative;
  cursor: pointer;
  margin: 0.5rem;
  height: 150px;
  width: 300px;
  ${({ url }) =>
    url &&
    css`
      background-image: url(${url});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `};

  @media (max-width: 1000px) {
    margin: 0 0.2rem;
    height: 120px;
    width: 240px;
  }

  @media (max-width: 800px) {
    height: 80px;
    width: 160px;
  }

  @media (max-width: 400px) {
    height: 70px;
    width: 140px;
  }
`;

export const Play = styled(BsFillPlayFill)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  position: absolute;
  padding: 0.8rem;
  color: white;
  left: 50%;
  top: 50%;

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
    padding: 0.4rem;
  }
`;
