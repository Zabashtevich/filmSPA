import styled from "styled-components/macro";

import { BsPlusCircleFill } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  background-color: white;
  margin-left: 1rem;
  border-radius: 1rem;
  position: relative;
`;

export const CreateIcon = styled(BsPlusCircleFill)`
  font-size: 5rem;
  fill: gray;
  opacity: 0.5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    fill: black;
    opacity: 1;
    transition: 500ms;
  }
  cursor: pointer;
  &.fade-enter {
    left: 0;
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 0.5;
    left: 50%;
    transition: 500ms;
  }
  &.fade-exit {
    opacity: 0.5;
    left: 50%;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 600ms;
    left: 0;
  }
`;

export const CreateTitle = styled.span`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  &.fade-enter {
    opacity: 0;
    transform: translateX(300px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 500ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 600ms;
    transform: translateX(-300px);
  }
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  &.fade-enter {
    opacity: 0;
    transform: translateX(300px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 500ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 600ms;
    transform: translateX(-300px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin-top: 0.5rem;
  &.fade-enter {
    opacity: 0;
    transform: translateX(300px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 500ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 600ms;
    transform: translateX(-300px);
  }
`;

export const Confirm = styled(HiCheckCircle)`
  font-size: ${({ theme }) => theme.fontSize.large};
  cursor: pointer;
`;

export const Abort = styled(MdCancel)`
  font-size: ${({ theme }) => theme.fontSize.large};
  cursor: pointer;
`;

export const Placeholder = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  text-align: center;
  color: gray;
  opacity: 0.5;
`;
