import styled from "styled-components/macro";

import { BsPlusCircleFill } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

export const CreateIcon = styled(BsPlusCircleFill)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  fill: gray;
  opacity: 0.5;
`;

export const Input = styled.input`
  align-self: flex-end;
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
  align-self: flex-end;
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

export const Abort = styled(MdCancel)`
  align-self: flex-end;
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

export const Item = styled.div`
  display: flex;
  width: 250px;
  height: 150px;
  background-color: white;
  margin-left: 1rem;
  border-radius: 1rem;
  position: relative;
  &:hover {
    ${CreateIcon} {
      fill: black;
      opacity: 1;
      transition: 500ms;
      cursor: pointer;
    }
  }
`;

export const PlaceholderContainer = styled.div``;

export const Placeholder = styled.div``;
