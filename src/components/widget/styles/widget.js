import styled, { css } from "styled-components/macro";

import { BsCaretUpFill, BsHeartFill } from "react-icons/bs";

export const Outer = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 0.4rem 0.6rem;
  border-radius: 0.2rem;
  align-items: center;
  position: relative;
  user-select: none;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  color: black;
  width: 80%;
`;

export const Title = styled.span``;

export const Arrow = styled(BsCaretUpFill)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  transform: rotate(180deg);
  transition: 300ms;

  ${({ rotated }) =>
    rotated &&
    css`
      transform: rotate(0);
    `};
`;

export const Popup = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${({ theme }) => theme.animations.fade()};
  background-color: #f3f3f3;
  box-sizing: border-box;
  top: calc(100% + 1rem);
  border-radius: 0.2rem;
  position: absolute;
  overflow: hidden;
  cursor: default;
  width: 100%;
  left: 0;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
  padding: 0 0.5rem;
`;

export const Container = styled.div``;

export const Item = styled.div`
  box-sizing: border-box;
  padding: 0.4rem 1rem;
  position: relative;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Name = styled.span``;

export const Heart = styled(BsHeartFill)`
  transform: translateY(-50%);
  position: absolute;
  color: pink;
  left: 90%;
  top: 50%;
`;
