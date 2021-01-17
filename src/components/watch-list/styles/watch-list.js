import styled from "styled-components/macro";

import { MdAddBox } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineCheck } from "react-icons/ai";

export const Container = styled.div`
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

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0.5rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 20px;
  text-align: center;
  padding: 0.5rem 1rem;
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  width: 200px;
  padding: 0.5rem 2rem;
  color: black;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Date = styled.div``;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  justify-content: space-between;
`;

export const Add = styled(MdAddBox)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  fill: black;
  width: 50%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Remove = styled(CgTrash)`
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: black;
`;

export const Firstletter = styled.div`
  width: 20px;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Input = styled.div``;

export const Confirm = styled(AiOutlineCheck)`
  fill: black;
`;

export const Abort = styled(ImCancelCircle)`
  fill: black;
`;
