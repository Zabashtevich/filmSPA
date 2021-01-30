import styled from "styled-components/macro";

import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { VscTriangleDown } from "react-icons/vsc";

export const Container = styled.div`
  display: flex;
  margin-right: 1rem;
  align-items: center;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.3rem 0.5rem;
  position: relative;
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

export const Inner = styled.div``;

export const Popup = styled.div`
  top: 100%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 2rem;
  position: absolute;
  color: black;
`;

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 500ms;
  }
`;

export const Number = styled.div`
  width: 20px;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
  margin-right: 0.5rem;
  user-select: none;
`;

export const StarInner = styled.div`
  display: flex;
`;

export const VoteStar = styled(IoIosStar)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.1rem 0.2rem;
  & > * {
    pointer-events: none;
  }
`;

export const Star = styled(IoIosStar)`
  font-size: ${({ theme }) => theme.fontSize.small};
  & > * {
    pointer-events: none;
  }
`;

export const EmptyStar = styled(IoIosStarOutline)`
  font-size: ${({ theme }) => theme.fontSize.small};
  & > * {
    pointer-events: none;
  }
`;

export const Highscore = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.1rem 0.2rem;
`;

export const Icon = styled(VscTriangleDown)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.1rem 0.2rem;
  & > * {
    pointer-events: none;
  }
`;
