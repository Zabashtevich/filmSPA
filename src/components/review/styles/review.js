import styled, { css } from "styled-components/macro";

import { BsStar } from "react-icons/bs";

export const Container = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  align-items: center;
  margin: 1rem auto;
  max-width: 900px;
  padding: 2rem 0;
  display: flex;
`;

export const Item = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ${({ theme }) => theme.animations.fade()};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  margin: 2rem 0;
  width: 700px;
  ${({ value }) =>
    Math.floor(value) === 5 &&
    css`
      background-color: ${({ theme }) => theme.colors.neutral};
    `};
  ${({ value }) =>
    Math.floor(value) > 5 &&
    css`
      background-color: ${({ theme }) => theme.colors.positive};
    `};
  ${({ value }) =>
    Math.floor(value) < 5 &&
    css`
      background-color: ${({ theme }) => theme.colors.negative};
    `};
`;

export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  align-items: center;
  height: 100px;
  display: flex;
`;

export const Avatar = styled.img`
  border-radius: 0.5rem;
  margin-left: 3rem;
  height: 75px;
`;

export const Nickname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: 1rem;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  color: white;
`;

export const Date = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  margin-left: 1rem;
`;

export const Star = styled(BsStar)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin-right: 2rem;
  margin-left: auto;
  color: gold;
`;

export const Body = styled.div`
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 3rem;
  margin-top: 2rem;
  display: flex;
  width: 600px;
`;

export const Content = styled.span`
  white-space: pre-line;
  line-height: 20px;
  overflow: hidden;
  height: 300px;
  ${({ textlengthdefault }) =>
    textlengthdefault &&
    css`
      height: auto;
    `};
`;

export const Load = styled.button`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0.2rem 0.6rem;
  align-self: flex-start;
  border-radius: 0.3rem;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 2rem;
  outline: none;
  color: white;
  &:hover {
    background-color: white;
    transition: 300ms;
    color: black;
  }
  &:active {
    transform: scale(0.98);
  }
`;
