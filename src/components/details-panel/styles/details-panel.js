import styled, { css } from "styled-components/macro";

import { AiFillStar } from "react-icons/ai";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-top: 4rem;
`;

export const Section = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  display: flex;
`;

export const Star = styled(AiFillStar)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.aux};
      transition: 300ms;
    `};
`;

export const Rating = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0.8rem;
  border-radius: 0.4rem;
  align-items: center;
  display: flex;
`;

export const Meta = styled.div`
  align-items: center;
  margin-left: 1rem;
  display: flex;
`;

export const Average = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
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
      color: #333;
    `};
`;

export const Count = styled.div`
  margin-left: 0.2rem;
  color: gray;
`;

export const Wrapper = styled.div``;

export const Value = styled.div``;

export const Delete = styled.div``;

export const Subtitle = styled.div``;

export const Date = styled.div``;
