import styled, { css } from "styled-components/macro";

import { BsX, BsXOctagonFill, BsQuestionOctagonFill } from "react-icons/bs";

export const Container = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 1500;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Close = styled(BsX)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  position: absolute;
  color: white;
  right: 2%;
  top: 6%;
`;

export const Window = styled.div`
  transform: translate(-50%, -50%);
  background-color: white;
  flex-direction: column;
  border-radius: 0.3rem;
  position: absolute;
  z-index: 2000;
  height: 600px;
  width: 1000px;
  display: flex;
  left: 50%;
  top: 50%;
`;

export const Header = styled.div`
  ${({ type }) =>
    type === "error" &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
    `};
  ${({ type }) =>
    type === "confirm" &&
    css`
      background-color: rgba(248, 148, 6, 1);
    `};
  position: relative;
  height: 40%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  display: inline-block;
  position: relative;
  margin: 4rem 5rem;
  font-size: 5rem;
  color: white;
  ${({ type }) =>
    type === "error" &&
    css`
      &::after {
        transform: translateY(-50%);
        background: linear-gradient(
          0deg,
          rgba(212, 86, 89, 0.4) 10%,
          rgba(255, 255, 255, 1) 50%,
          rgba(212, 86, 89, 0.4) 90%
        );
        position: absolute;
        height: 200px;
        content: "";
        width: 2px;
        left: 130%;
        top: 50%;
      }
    `};
  ${({ type }) =>
    type === "confirm" &&
    css`
      &::after {
        transform: translateY(-50%);
        background: linear-gradient(
          0deg,
          rgba(248, 148, 6, 0.3) 10%,
          rgba(255, 255, 255, 1) 50%,
          rgba(248, 148, 6, 0.3) 90%
        );
        position: absolute;
        height: 200px;
        content: "";
        width: 2px;
        left: 130%;
        top: 50%;
      }
    `};
`;

export const Error = styled(BsXOctagonFill)`
  transform: translateY(-50%);
  position: absolute;
  font-size: 10rem;
  cursor: default;
  color: white;
  right: 10%;
  top: 50%;
`;

export const Warning = styled(BsQuestionOctagonFill)`
  transform: translateY(-50%);
  position: absolute;
  font-size: 10rem;
  color: white;
  right: 10%;
  top: 50%;
`;

export const Message = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  display: inline-block;
  margin: 6rem 4rem;
`;

export const Wrapper = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin-bottom: 3rem;
  margin-right: 5rem;
  margin-left: auto;
  margin-top: auto;
`;

export const Confirm = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0.3rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  outline: none;
  color: white;
  ${({ type }) =>
    type === "error" &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
    `};
  ${({ type }) =>
    type === "confirm" &&
    css`
      background-color: rgba(248, 148, 6, 1);
    `};
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background-color: white;
    transition: 300ms;
    color: black;
  }
`;

export const Decline = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  outline: none;
  color: white;
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transition: 300ms;
  }
`;
