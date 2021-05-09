import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";
import { BsFillStarFill, BsX } from "react-icons/bs";

export const Section = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-family: ${({ theme }) => theme.font.aux.family};
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  align-items: center;
  max-width: 900px;
  display: flex;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  padding: 0.4rem 0;
  margin-top: 2rem;
  display: block;

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.font.aux.size.large};
  }
`;

export const Inner = styled.div`
  ${({ theme }) => theme.animations.fade()};
  flex-direction: column;
  align-items: center;
  min-height: 800px;
  display: flex;
  width: 100%;
`;

export const Item = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  display: flex;
  height: 50px;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${({ typeSecondary }) =>
    typeSecondary &&
    css`
      background-color: ${({ theme }) => theme.colors.neutral};
    `};

  @media (max-width: 1000px) {
    height: 40px;
  }

  @media (max-width: 400px) {
    height: 30px;
  }
`;

export const Year = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.6);
  margin-right: 3rem;
  text-align: center;
  position: relative;
  user-select: none;
  display: block;
  width: 50px;

  &::after {
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-50%);
    position: absolute;
    height: 40px;
    content: "";
    width: 1px;
    left: 120%;
    top: 50%;
  }

  @media (max-width: 1000px) {
    font-size: 0.8rem;
    width: 40px;

    &::after {
      height: 30px;
    }
  }

  @media (max-width: 400px) {
    margin-right: 1rem;
    font-size: 0.6rem;
    width: 30px;

    &::after {
      height: 20px;
    }
  }
`;

export const Subtitle = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  text-overflow: ellipsis;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  color: black;
  width: 300px;

  @media (max-width: 1000px) {
    font-size: 0.7rem;
    width: 200px;
  }

  @media (max-width: 500px) {
    font-size: 0.7rem;
    width: 100px;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
    width: 80px;
  }
`;

export const Meta = styled.div`
  align-items: center;
  user-select: none;
  margin-left: 3rem;
  display: flex;
  width: 100px;

  @media (max-width: 1000px) {
    margin-left: 1rem;
  }
`;

export const Average = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};

  ${({ value }) =>
    value > 5 &&
    css`
      color: green;
    `};
  ${({ value }) =>
    value < 5 &&
    css`
      color: red;
    `};
  ${({ value }) =>
    Math.floor(value) === 5 &&
    css`
      color: #3f3f3f;
    `};

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Count = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  color: rgba(0, 0, 0, 0.6);
  margin-left: 0.5rem;

  @media (max-width: 1000px) {
    font-size: 0.7rem;
  }
`;

export const Highscore = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: ${({ theme }) => theme.colors.aux};
  border-radius: 0.6rem;
  text-align: center;
  padding: 0.3rem 0;
  margin-left: 10rem;
  color: white;
  width: 40px;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Rating = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
  position: relative;
  margin-right: 1rem;
  margin-left: auto;
  cursor: pointer;
  display: flex;
  &:hover {
    background-color: ${({ theme }) => theme.colors.aux};
    transition: 200ms;
    color: white;
  }

  @media (max-width: 1000px) {
    padding: 0.1rem 0.2rem;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.animations.slide({ x: -200, y: 0 }, { x: -200, y: 0 })}
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
  align-items: center;
  position: absolute;
  display: flex;
  color: black;
  right: 120%;
`;

export const Star = styled(BsFillStarFill)`
  transition: 100ms;
  padding: 0.1rem;

  ${({ hovered }) =>
    hovered &&
    css`
      color: lightblue;
    `};

  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

export const Close = styled(BsX)``;

export const Placeholder = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.5);
  margin-top: 2rem;
`;
