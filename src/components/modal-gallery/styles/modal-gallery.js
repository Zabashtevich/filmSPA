import styled, { css } from "styled-components/macro";

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
`;

export const Photo = styled.div`
  position: relative;
  z-index: 300;
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
  right: 4%;
  top: 3%;
  position: absolute;
  font-size: 2rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 1rem;
  & > path {
    stroke: #fff;
  }
`;

export const ListContainer = styled.div`
  margin: 1rem auto;
  display: flex;
`;

export const ListItem = styled.div`
  width: 90px;
  height: 90px;
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
  z-index: 200;
  display: flex;
  justify-content: center;
`;
