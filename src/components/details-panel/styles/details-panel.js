import styled, { css } from "styled-components/macro";

import { AiFillStar } from "react-icons/ai";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  max-width: 1300px;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin-top: 4rem;
`;

export const Section = styled.div`
  margin-top: 2rem;
`;

export const Rating = styled.div`
  align-items: center;
  margin-left: 150px;
  display: flex;
`;

export const Star = styled(AiFillStar)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
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
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
`;
