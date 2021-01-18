import styled, { css } from "styled-components/macro";

import { MdAddBox } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { HiCheckCircle } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";

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

export const Placeholder = styled.div`
  padding: 0.7rem 1rem;
  color: black;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const Date = styled.div``;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  justify-content: space-around;
  ${({ createitem }) =>
    createitem &&
    css`
      justify-content: flex-end;
    `}
`;

export const Add = styled(MdAddBox)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  fill: black;
  height: 100%;
  width: 50%;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const CreateIcon = styled(GrAdd)`
  font-size: 1.5rem;
  margin-right: 1rem;
  padding: 0.3rem 0.3rem;
`;

export const Remove = styled(CgTrash)`
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: black;
`;

export const Input = styled.input`
  position: absolute;
  left: 7.5%;
  top: 3%;
  outline: none;
  height: 20px;
  padding: 0;
`;

export const Confirm = styled(HiCheckCircle)`
  fill: black;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Abort = styled(ImCancelCircle)`
  fill: black;
  height: 80%;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0.5rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  height: 25px;
  position: relative;
  ${({ createitem }) =>
    createitem &&
    css`
      border: none;
      background-color: rgb(242, 242, 242);
      height: 40px;
    `}
  &:hover {
    ${Number} {
      background-color: white;
      border-right: 1px solid black;
      color: black;
      transition: 300ms;
    }
  }
`;
