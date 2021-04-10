import styled, { css } from "styled-components/macro";

import { BsFillStarFill, BsX } from "react-icons/bs";

export const Section = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  flex-direction: column;
  margin-top: 2rem;
  max-width: 900px;
  display: flex;
`;

export const Item = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  margin: 0.2rem 0;
  display: flex;
  height: 50px;
  width: 100%;
`;

export const Year = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.6);
  margin-right: 3rem;
  text-align: center;
  position: relative;
  user-select: none;
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
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 300px;
`;

export const Meta = styled.div`
  align-items: center;
  user-select: none;
  margin-left: 3rem;
  display: flex;
  width: 100px;
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
`;

export const Count = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  color: rgba(0, 0, 0, 0.6);
  margin-left: 0.5rem;
`;

export const Highscore = styled.span``;

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
  transition: 200ms;
  padding: 0.1rem;

  ${({ hovered }) =>
    hovered &&
    css`
      color: lightblue;
    `};
`;

export const Close = styled(BsX)``;
