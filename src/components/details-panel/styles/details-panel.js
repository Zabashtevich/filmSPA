import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { GoStar } from "react-icons/go";

export const Container = styled.div`
  max-width: 1300px;
  padding: 2rem 0;
  margin: 0 auto;
`;

export const Section = styled.div`
  ${({ theme }) => theme.animations.fade()};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem 0;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  padding: 0 1rem;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const Collection = styled.div`
  border-radius: 0.5rem;
  position: relative;
  width: 1300px;
  height: 300px;
  ${({ src }) =>
    src &&
    css`
      background-image: linear-gradient(
          to right,
          rgba(3, 38, 66, 1) 0%,
          rgba(3, 38, 66, 0.2) 100%
        ),
        url(${src});
      background-size: cover;
      background-position: 50% 50%;
    `};

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  display: flex;
  left: 5%;
  top: 40%;

  @media (max-width: 850px) {
    transform: translateX(-50%);
    align-items: center;
    left: 50%;
  }
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  box-sizing: border-box;
  white-space: nowrap;
  color: white;

  @media (max-width: 750px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
  }
`;

export const Button = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  background-color: white;
  padding: 0.7rem 1.2rem;
  text-decoration: none;
  border-radius: 1rem;
  margin-top: 0.5rem;
  color: black;
  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    transition: 300ms;
    color: white;
  }

  @media (max-width: 750px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

export const Subsection = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  display: flex;
`;

export const Rating = styled.div``;

export const Star = styled(GoStar)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin: 0 0.2rem;
  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.aux};
    `};

  @media (max-width: 500px) {
    font-size: 1.5rem;
    margin: 0 0.05rem;
  }
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  margin-left: 1rem;
  color: white;
`;

export const Wrapper = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  flex-direction: column;
  margin-left: 1rem;
  display: flex;
`;

export const Date = styled.span``;

export const Delete = styled.button`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: white;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    transition: 300ms;
    color: white;
  }
`;

export const Meta = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  display: flex;

  @media (max-width: 500px) {
    margin-left: 1rem;
    font-size: 1rem;
  }
`;

export const Average = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  ${({ value }) =>
    Math.floor(value) === 5 &&
    css`
      color: #3f3f3f;
    `};
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
`;

export const Count = styled.div`
  color: rgba(0, 0, 0, 0.3);
`;
