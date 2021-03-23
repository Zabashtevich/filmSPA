import styled, { css } from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

export const Container = styled.div`
  padding: 5rem 0;
  margin: 0 auto;
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
`;

export const Inner = styled.div`
  align-items: center;
  max-width: 1300px;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  color: white;
`;

export const Folder = styled.img`
  border-radius: 0.3rem;
  height: 100px;
`;

export const Information = styled.div`
  flex-direction: column;
  margin-left: 1rem;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
`;

export const Back = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  text-decoration: none;
  align-items: center;
  user-select: none;
  display: flex;
  color: white;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
    transition: 300ms;
  }
`;

export const Icon = styled(BsArrowLeftShort)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  ${({ type }) =>
    type === "menu" &&
    css`
      width: 250px;
    `};
  ${({ type }) =>
    type === "content" &&
    css`
      width: 1050px;
    `};
`;

export const Menu = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border-radius: 0 0 0.3rem 0.3rem;
  flex-direction: column;
  padding-bottom: 1rem;
  align-items: center;
  margin-top: 2rem;
  display: flex;
  width: 250px;
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border-radius: 0.3rem 0.3rem 0 0;
  margin-bottom: 1rem;
  text-align: center;
  padding: 1rem 0;
  color: white;
  width: 100%;
`;

export const Amount = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.5rem;
  width: 25px;
`;

export const Item = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  justify-content: space-between;
  align-items: center;
  transition: 300ms;
  cursor: pointer;
  display: flex;
  width: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    ${Amount} {
      background-color: white;
      transition: 300ms;
    }
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: rgba(0, 0, 0, 0.05);
      ${Amount} {
        background-color: white;
        transition: 300ms;
      }
    `};
`;

export const Value = styled.div`
  padding: 1rem;
  width: 75px;
`;

export const Backdrop = styled.div``;

export const Poster = styled.div``;
