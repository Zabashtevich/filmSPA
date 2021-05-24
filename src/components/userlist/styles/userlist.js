import styled, { css } from "styled-components/macro";

import { BsFillTrashFill, BsWrench, BsCheck, BsX } from "react-icons/bs";

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
  padding: 0 1rem;
  padding-top: 2rem;
  display: flex;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin: 0;

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.font.aux.size.large};
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
  }
`;

export const Header = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  align-items: center;
  position: relative;
  margin-top: 2rem;
  display: flex;
  height: 125px;

  @media (max-width: 650px) {
    height: 80px;
  }
`;

export const List = styled.div`
  margin: 0 5rem;

  @media (max-width: 1000px) {
    margin: 0 2rem;
  }

  @media (max-width: 500px) {
    margin: 0 1rem;
  }
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

  @media (max-width: 1000px) {
    width: 300px;
  }

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
    padding: 0.1rem 0;
    width: 100px;
    height: 20px;
  }
`;

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin-right: 5rem;
  transition: 300ms;
  display: flex;
  opacity: 0;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
    `};

  @media (max-width: 1000px) {
    margin-right: 2rem;
  }

  @media (max-width: 650px) {
    margin-right: 1rem;
  }

  @media (max-width: 400px) {
    margin-right: 0.5rem;
  }
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

      @media (max-width: 650px) {
        margin-right: 0.5rem;
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

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
    padding: 0.3rem;
  }

  @media (max-width: 650px) {
    font-size: 0.8rem;
    padding: 0.2rem;
  }
`;

export const Confirm = styled(BsCheck)``;

export const Cancel = styled(BsX)``;

export const Tools = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;

export const EditButton = styled.button`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  box-sizing: border-box;
  margin-right: 0.5rem;
  border-radius: 1rem;
  align-items: center;
  padding: 0.7rem;
  cursor: pointer;
  display: flex;
  outline: none;
  color: white;

  &:last-of-type {
    margin-right: 2rem;
  }

  ${({ type }) =>
    type === "delete" &&
    css`
      background-color: ${({ theme }) => theme.colors.error};

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

      &:hover {
        background-color: white;
        transition: 300ms;
        color: black;
      }
    `};

  @media (max-width: 750px) {
    &:last-of-type {
      margin-right: 1rem;
    }
  }

  @media (max-width: 500px) {
    padding: 0.5rem;

    &:last-of-type {
      margin-right: 0.5rem;
    }
  }
`;

export const Delete = styled(BsFillTrashFill)`
  font-size: 1.3rem;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  @media (max-width: 650px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

export const Edit = styled(BsWrench)`
  font-size: 1.3rem;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.81rem;
  }
`;

export const Placeholder = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.6);
  margin-top: 2rem;
`;
