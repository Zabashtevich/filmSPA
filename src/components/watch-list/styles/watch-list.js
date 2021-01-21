import styled, { css } from "styled-components/macro";

import { MdAddBox } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";

export const Container = styled.div`
  min-height: 75px;
  min-width: 370px;
  position: absolute;
  top: 110%;
  left: -350%;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background-color: white;
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

export const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 10px;
  text-align: center;
  padding: 0.3rem 0.4rem;
  border-right: 1px solid black;
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  width: 250px;
  padding: 0.3rem 0.5rem;
  color: black;
`;

export const CreateTitle = styled.div`
  padding: 0.7rem 1rem;
  color: black;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  font-size: 0.8rem;
  user-select: none;
  &.fade-enter {
    opacity: 0;
    transform: translateX(400px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 300ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 300ms;
    transform: translateX(-400px);
  }
`;

export const Date = styled.div``;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  justify-content: space-around;
`;

export const Add = styled(MdAddBox)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  fill: black;
  height: 100%;
  width: 50%;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const IconInner = styled.div`
  position: relative;
`;

export const CreateListIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  position: relative;
  &.fade-enter {
    opacity: 0;
    transform: translateX(400px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 300ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 300ms;
    transform: translateX(-400px);
  }
`;

export const CreateIcon = styled(GrAdd)`
  padding: 0.2rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  background-color: ${({ theme }) => theme.colors.secondary};
  & > path {
    stroke: white;
    pointer-events: none;
  }
`;

export const Remove = styled(CgTrash)`
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: black;
`;

export const Input = styled.input`
  left: 2%;
  border: 1px solid black;
  outline: none;
  user-select: none;
  &.fade-enter {
    opacity: 0;
    transform: translateX(400px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 300ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 300ms;
    transform: translateX(-400px);
  }
`;

export const Confirm = styled(HiCheckCircle)`
  fill: white;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.normal};
  border-right: 1px solid white;
  & > path {
    width: 50%;
    pointer-events: none;
  }
`;

export const Abort = styled(MdCancel)`
  fill: white;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.normal};
  z-index: 100;
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0.5rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  height: 25px;
  ${({ placeholder }) =>
    placeholder &&
    css`
      border: none;
    `}
  ${({ createitem }) =>
    createitem &&
    css`
      border: none;
      align-items: center;
    `}
  &:hover {
    ${Number} {
      background-color: white;
      border-right: 1px solid black;
      color: black;
      transition: 300ms;
    }
  }
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
  &.fade-appear {
    opacity: 0;
    transition: 500ms;
    transform: translateX(-400px);
  }
  &.fade-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: 300ms;
  }
`;

export const Warning = styled.div`
  color: black;
  position: absolute;
  left: 3%;
`;

export const Placeholder = styled.span`
  color: black;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  margin-left: 1rem;
`;
