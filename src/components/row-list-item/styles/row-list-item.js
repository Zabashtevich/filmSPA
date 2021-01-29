import styled, { css } from "styled-components/macro";

import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { VscTriangleDown } from "react-icons/vsc";

export const Number = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

export const PopupNumber = styled.div`
  width: 20px;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
  margin-right: 0.5rem;
`;

export const Wrapper = styled.div`
  width: 400px;
  margin-left: 5rem;
`;

export const Vote = styled.div`
  display: flex;
  margin-right: 1rem;
  align-items: center;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.3rem 0.5rem;
  position: relative;
`;

export const Name = styled.div`
  margin: 0.4rem;
`;

export const Character = styled.div`
  margin: 0.4rem;
`;

export const Date = styled.div``;

export const Star = styled(IoIosStar)`
  font-size: ${({ theme }) => theme.fontSize.small};
  ${({ votestar }) =>
    votestar &&
    css`
      font-size: ${({ theme }) => theme.fontSize.normal};
      padding: 0.1rem 0.2rem;
    `};
  & > * {
    pointer-events: none;
  }
`;

export const EmptyStar = styled(IoIosStarOutline)`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Highscore = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.1rem 0.2rem;
`;

export const Icon = styled(VscTriangleDown)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.1rem 0.2rem;
`;

export const Popup = styled.div`
  top: 100%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 2rem;
  position: absolute;
  color: black;
`;

export const Item = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 500ms;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  background-color: white;
  margin: 1rem 1rem;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  height: 50px;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
  ${({ backgroundsecondary }) =>
    backgroundsecondary &&
    css`
      background-color: rgba(0, 0, 0, 0.1);
    `};
  ${({ rated }) =>
    rated &&
    css`
      background-color: rgba(0, 255, 0, 0.2);
      &:hover {
        color: black;
      }
    `};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    transition: 500ms;
    ${Vote} {
      background-color: white;
      color: black;
      transition: 500ms;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
`;
