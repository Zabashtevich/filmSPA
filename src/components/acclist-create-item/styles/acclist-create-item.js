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

export const Input = styled.input`
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
`;

export const Abort = styled(MdCancel)`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const PlaceholderContainer = styled.div``;

export const Placeholder = styled.div``;
