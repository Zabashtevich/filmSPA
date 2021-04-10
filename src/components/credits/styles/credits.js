import styled, { css } from "styled-components/macro";

export const Section = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  flex-direction: column;
  margin-top: 2rem;
  max-width: 900px;
  display: flex;
`;

export const Item = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
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
  margin-left: 3rem;
  display: flex;
`;

export const Average = styled.span`
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
      color: #3f3f3f;
    `};
`;

export const Count = styled.span``;

export const Highscore = styled.div``;

export const Rating = styled.div``;

export const Star = styled.div``;

export const Container = styled.div``;

export const Close = styled.div``;
