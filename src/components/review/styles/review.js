import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 50%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  max-width: 800px;
  margin: 2rem auto;
`;

export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 0 1rem;
  display: flex;
  height: 100px;
  color: gray;
`;

export const Nickname = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: 1rem;
`;

export const Avatar = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 75px;
  height: 75px;
`;

export const Placeholder = styled.img`
  border-radius: 50%;
  width: 75px;
`;

export const Value = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  box-shadow: 0 2px 8px rgb(0 0 0 / 50%);
  background-color: #333;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-left: 2rem;
  color: white;
  ${({ value }) =>
    value > 5 &&
    css`
      background-color: green;
    `};
  ${({ value }) =>
    value < 5 &&
    css`
      background-color: red;
    `};
  ${({ value }) =>
    value === 5 &&
    css`
      background-color: #f3f3f3;
    `};
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: auto;
`;

export const Body = styled.div`
  padding: 1rem 2rem;
`;

export const Textblock = styled.p``;

export const Link = styled.a`
  text-decoration: none;
  color: gray;
`;

export const Button = styled.button`
  ${({ theme }) => theme.animations.fade()};
`;
