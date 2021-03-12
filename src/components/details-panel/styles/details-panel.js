import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  max-width: 1300px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 2rem;
  margin-top: 4rem;
`;

export const Section = styled.div`
  margin-top: 2rem;
`;

export const Inner = styled.div`
  border-radius: 0.4rem;
  position: relative;
  display: flex;
  &::after {
    background-image: linear-gradient(
      to right,
      rgba(3, 36, 65, 0.8) 0%,
      rgba(3, 36, 65, 0.6) 100%
    );
    position: absolute;
    border-radius: 0.4rem;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
`;

export const Poster = styled.img`
  border-radius: 0.4rem;
  object-fit: cover;
  width: 1300px;
  height: 400px;
`;

export const Description = styled.div`
  flex-direction: column;
  align-items: center;
  position: absolute;
  display: flex;
  z-index: 200;
  color: white;
  bottom: 40%;
  left: 5%;
`;

export const Collectionname = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Link = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  padding: 0.5rem 0.9rem;
  justify-content: center;
  border-radius: 0.8rem;
  text-decoration: none;
  display: flex;
  color: white;
  &:hover {
    background-color: white;
    transition: 700ms;
    color: black;
  }
`;

export const Rating = styled.div`
  align-items: center;
  margin-left: 150px;
  display: flex;
`;

export const Star = styled(AiFillStar)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.aux};
      transition: 200ms;
    `};
`;

export const Meta = styled.div`
  align-items: flex-end;
  margin-left: 2rem;
  display: flex;
`;

export const Average = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
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
      color: #;
    `};
`;

export const Count = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: gray;
`;

export const Uservote = styled.div`
  flex-direction: column;
  border-radius: 0.2rem;
  padding: 0.3rem 0.4rem;
  margin-left: 1rem;
  display: flex;
`;

export const Row = styled.div`
  align-items: center;
  display: flex;
`;

export const Subtitle = styled.div`
  font-size: 1.2rem;
`;

export const Value = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 0.3rem;
  padding: 0.3rem 0.6rem;
  margin-left: 1rem;
  color: white;
`;

export const Delete = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
`;
