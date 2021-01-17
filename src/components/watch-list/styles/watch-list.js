import styled, { css } from "styled-components/macro";

import { BsPlusCircle } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";

export const Container = styled.div`
  position: absolute;
  top: 110%;
  left: -150%;
  z-index: 200;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  background-color: gray;
  border-radius: 1rem;
  &.fade-enter {
    opacity: 0;
    transform: translateX(-200px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 200ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 300ms;
    transform: translateX(200px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  margin: 1rem 1rem;
  border: 1px solid black;
  border-radius: 2rem;
  background-color: white;
  width: 100px;
`;

export const ItemIcon = styled(RiMovie2Line)`
  fill: gray;
  font-size: ${({ theme }) => theme.fontSize.huge};
`;

export const CreateIcon = styled(BsPlusCircle)`
  font-size: ${({ theme }) => theme.fontSize.huge};
  fill: gray;
`;

export const Warning = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-top: 1rem;
  &.fade-enter {
    opacity: 0;
    transform: translateX(-200px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 200ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 300ms;
    transform: translateX(200px);
  }
`;

export const InputLabel = styled.label`
  color: gray;
  margin-top: 1rem;
  &.fade-enter {
    opacity: 0;
    transform: translateX(-200px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 200ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 300ms;
    transform: translateX(200px);
  }
`;

export const InputName = styled.input`
  margin-top: 0.4rem;
  color: black;
  outline: none;
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  text-align: center;
  border: 1px solid black;
  ${({ warningVisible }) =>
    warningVisible &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.error};
      &::placeholder {
        color: ${({ theme }) => theme.colors.error};
      }
    `};
`;

export const ItemName = styled.div`
  white-space: nowrap;
  color: black;
  margin-top: 0.5rem;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const CreateButton = styled.button`
  margin-top: 0.5rem;
  border-radius: 1rem;
  outline: none;
  border: 1px solid black;
  background-color: gray;
  color: white;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  margin-top: 0.5rem;
  border-radius: 1rem;
  outline: none;
  border: 1px solid black;
  background-color: gray;
  color: white;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  z-index: 300;
`;
