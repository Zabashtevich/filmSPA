import styled, { css } from "styled-components/macro";

import {
  BsFillExclamationOctagonFill,
  BsFillInfoSquareFill,
} from "react-icons/bs";

export const Container = styled.div`
  ${({ theme }) => theme.animations.slide({ x: -200, y: 0 }, { x: -200, y: 0 })}
  border-radius: 0.5rem;
  align-items: center;
  position: fixed;
  z-index: 2000;
  display: flex;
  bottom: 5%;
  left: 2%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  ${({ type }) =>
    type === "error" &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
      min-height: 175px;
      min-width: 400px;
      &::after {
        transform: translate(-50%, -50%);
        border: 2px solid white;
        border-radius: 0.5rem;
        position: absolute;
        content: "";
        height: 90%;
        width: 95%;
        top: 50%;
        left: 50%;
      }
    `};

  ${({ type }) =>
    type === "default" &&
    css`
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: #f3f3f3;
      min-height: 100px;
      min-width: 300px;
      display: flex;
    `};
`;

export const Error = styled(BsFillExclamationOctagonFill)`
  transform: translateY(-50%);
  position: absolute;
  font-size: 6rem;
  color: white;
  right: 10%;
  top: 50%;
`;

export const Info = styled(BsFillInfoSquareFill)`
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.7);
  position: absolute;
  font-size: 3rem;
  right: 10%;
  top: 50%;
`;

export const Message = styled.div`
  margin: 0 1rem;
`;

export const List = styled.ul`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  padding: 0 3rem;
  color: white;
`;

export const Item = styled.li`
  margin: 0.5rem 0;
`;

export const Spinner = styled.img``;
