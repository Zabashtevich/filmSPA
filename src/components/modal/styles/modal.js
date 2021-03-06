import styled, { css } from "styled-components/macro";

import { BsX, BsFillQuestionCircleFill } from "react-icons/bs";

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
  justify-content: center;
  align-items: center;
  user-select: none;
  position: fixed;
  z-index: 4000;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Close = styled(BsX)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  position: absolute;
  color: white;
  right: 3%;
  top: 4%;

  @media (max-width: 500px) {
    right: 5%;
    top: 20%;
  }
`;

export const Window = styled.div`
  border-radius: 0.2rem 0.2rem 0 0;
  background-color: #f3f3f3;
  flex-direction: column;
  z-index: 2000;
  display: flex;
  width: 900px;

  @media (max-width: 1100px) {
    width: 650px;
  }

  @media (max-width: 800px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const Header = styled.div`
  border-radius: 0.2rem 0.2rem 0 0;
  align-items: center;
  position: relative;
  min-height: 300px;
  display: flex;
  width: 100%;

  ${({ type }) =>
    type === "confirm" &&
    css`
      background-color: rgba(248, 148, 6, 1);
    `};
  ${({ type }) =>
    type === "error" &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
    `};

  @media (max-width: 1100px) {
    min-height: 200px;
  }

  @media (max-width: 800px) {
    min-height: 120px;
  }

  @media (max-width: 500px) {
    min-height: 100px;
  }
`;

export const Icon = styled(BsFillQuestionCircleFill)`
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 10rem;
  color: white;
  left: 50%;
  top: 50%;

  @media (max-width: 1100px) {
    font-size: 7rem;
  }

  @media (max-width: 800px) {
    font-size: 4rem;
  }
`;

export const Body = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 45%;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  color: ${({ theme }) => theme.colors.aux};
  margin-top: 1rem;

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.font.aux.size.large};
  }
`;

export const List = styled.ul`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: ${({ theme }) => theme.colors.aux};
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 1.5rem;
  margin-left: 1rem;
  display: flex;
  width: 100%;

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
  }
`;

export const Item = styled.li`
  margin: 0.3rem 0;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const Message = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: ${({ theme }) => theme.colors.aux};
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1rem;

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  margin-top: auto;
  display: flex;
`;

export const Cancel = styled.button`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.3);
  letter-spacing: 0.1rem;
  padding: 0.6rem 1.6rem;
  border-radius: 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  outline: none;
  color: white;

  &:hover {
    background-color: white;
    color: black;
  }

  &:active {
    transform: scale(0.98);
  }

  ${({ type }) =>
    type === "error" &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
    `};

  @media (max-width: 1100px) {
    padding: 0.3rem 1rem;
  }

  @media (max-width: 500px) {
    padding: 0.2rem 0.5rem;
    font-size: 1.1rem;
  }
`;

export const Confirm = styled(Cancel)`
  background-color: white;
  color: black;

  &:hover {
    background-color: rgba(248, 148, 6, 0.8);
    color: white;
  }
`;
