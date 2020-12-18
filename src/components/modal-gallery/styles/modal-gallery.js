import styled from "styled-components/macro";

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

export const Content = styled.div`
  width: 800px;
  height: 500px;
  background-color: #fff;
  position: relative;
  z-index: 300;
`;

export const Photo = styled.img``;

export const Close = styled(GrClose)`
  right: 5%;
  top: 5%;
  position: absolute;
  font-size: 2rem;
  cursor: pointer;
`;

export const ListContainer = styled.div``;

export const ListItem = styled.img``;

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
  align-items: center;
`;
