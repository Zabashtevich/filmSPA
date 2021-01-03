import styled, { css } from "styled-components/macro";

import { BsArrowLeft } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

export const Icon = styled.img`
  width: 150px;
  height: 150px;
`;

export const Wrapper = styled.div`
  width: 200px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 2rem;
  box-shadow: 4px 2px 8px 3px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  color: #000;
  cursor: pointer;
  border-radius: 2rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.2s linear;
  }
  ${({ cardPage }) =>
    cardPage &&
    css`
      background-color: rgba(255, 255, 255, 0.8);
      &:hover {
        background-color: #fff;
        transition: all 0.2s linear;
      }
    `}
`;

export const Photo = styled.div`
  position: relative;
  z-index: 400;
  top: 10%;
  background: ${({ src }) => `url(${src})`} no-repeat;
  width: 500px;
  height: 750px;
  display: flex;
  align-items: flex-end;
  &.fade-appear {
    transform: translateX(-300px);
  }
  &.fade-appear-active {
    transform: translateX(0);
    transition: transform 20000ms forwards;
  }
`;

export const Close = styled(GrClose)`
  width: 30px;
  height: 30px;
  pointer-events: none;
  & > path {
    stroke: #fff;
  }
`;

export const CloseWrapper = styled.button`
  right: 4%;
  top: 3%;
  width: 40px;
  height: 40px;
  position: absolute;
  font-size: 2rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 1rem;
  outline: none;
  border: none;
  text-align: center;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const ListItem = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ src }) => `url(${src})`} no-repeat;
  margin: 2px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      border: 2px solid #fff;
    `}
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 300;
  display: flex;
  justify-content: center;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem 0;
  align-items: center;
`;

export const IconSlider = styled(BsArrowLeft)`
  font-size: ${({ theme }) => theme.fontSize.huge};
  ${({ rightdirection }) =>
    rightdirection &&
    css`
      transform: rotate(180deg);
    `};
`;

export const Button = styled.button`
  border-radius: 2rem;
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  z-index: 300;
  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid #fff;
    transition: 0.2s;
    cursor: pointer;
    ${IconSlider} > path {
      fill: #fff;
      transition: 0.2s;
    }
  }
`;
