import styled, { css } from "styled-components/macro";

import {
  BsList,
  BsFillTrashFill,
  BsWrench,
  BsCheck,
  BsX,
} from "react-icons/bs";

export const Outer = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-top: 2rem;
  max-height: 100vh;
  display: flex;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.font.aux.size.large};
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
  }
`;

export const Header = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  align-items: center;
  padding: 1rem 3rem;
  position: relative;
  margin-top: 2rem;
  display: flex;
`;

export const Thumbnail = styled(BsList)`
  font-size: 6rem;
`;

export const List = styled.div`
  margin-right: 3rem;
  margin-left: 3rem;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.font.aux.family};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  transition: 300ms;
  padding: 0.2rem;
  outline: none;
  width: 350px;
  height: 30px;
  border: none;

  &:disabled {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    color: rgba(0, 0, 0, 0.5);
  }
  &:enabled {
    border-bottom: solid 1px rgba(0, 0, 0, 0.5);
    background-color: transparent;
    color: black;
  }
`;

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin-right: 5rem;
  visibility: hidden;
  transition: 300ms;
  display: flex;
  opacity: 0;

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      opacity: 1;
    `};
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;
  align-items: center;
  cursor: pointer;
  outline: none;
  display: flex;

  ${({ type }) =>
    type === "confirm" &&
    css`
      background-color: ${({ theme }) => theme.colors.aux};
      margin-right: 1rem;
      color: white;

      &:hover {
        background-color: white;
        transition: 300ms;
        color: black;
      }
    `};

  ${({ type }) =>
    type === "abort" &&
    css`
      background-color: white;
      margin-right: 0.5rem;
      color: black;

      &:hover {
        background-color: ${({ theme }) => theme.colors.main};
        transition: 300ms;
        color: white;
      }
    `};
`;

export const Confirm = styled(BsCheck)``;

export const Cancel = styled(BsX)``;

export const Tools = styled.div`
  flex-direction: column;
  position: absolute;
  display: flex;
  height: 100%;
  width: 10%;
  right: 0;
`;

export const Inner = styled.div`
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  display: flex;
  color: white;
  height: 50%;

  ${({ type }) =>
    type === "delete" &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0 1rem 0 0;

      &:hover {
        background-color: white;
        transition: 300ms;
        color: black;
      }
    `};

  ${({ type }) =>
    type === "edit" &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0 0 1rem 0;

      &:hover {
        background-color: white;
        transition: 300ms;
        color: black;
      }
    `};
`;

export const Delete = styled(BsFillTrashFill)`
  font-size: 1.3rem;
`;

export const Edit = styled(BsWrench)`
  font-size: 1.3rem;
`;

export const Placeholder = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.6);
  margin-top: 2rem;
`;
