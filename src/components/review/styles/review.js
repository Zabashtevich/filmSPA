import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: center;
  flex-direction: column;
  border-radius: 0.2rem;
  align-items: center;
  max-width: 900px;
  padding: 2rem 0;
  margin: 0 auto;
  display: flex;
`;

export const Item = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 2rem 2rem 5rem 2rem;
  flex-direction: column;
  border-radius: 0.2rem;
  align-items: center;
  margin: 0.5rem;
  display: flex;
  width: 600px;
  ${({ value }) =>
    value < 5 &&
    css`
      background-color: ${({ theme }) => theme.colors.negative};
    `};
  ${({ value }) =>
    value > 5 &&
    css`
      background-color: ${({ theme }) => theme.colors.positive};
    `};
  ${({ value }) =>
    Math.floor(value) === 5 &&
    css`
      background-color: ${({ theme }) => theme.colors.neutral};
    `};
`;

export const Header = styled.div`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  display: flex;
  height: 100px;
  width: 100%;
`;

export const Avatar = styled.img`
  border-radius: 0.5rem;
  height: 75px;
  width: 75px;
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
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  margin-left: auto;
`;

export const Content = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 550px;
`;

export const Text = styled.span``;

export const Link = styled.a``;

export const Paragraph = styled.p``;

export const All = styled.button`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.3rem 0.8rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  outline: none;
  color: white;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.5);
    background-color: white;
    transition: 300ms;
    color: black;
  }
`;
