import styled from "styled-components/macro";

import { CgClose } from "react-icons/cg";

export const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 900px;
  height: 400px;
  background-color: white;
`;

export const Wrapper = styled.div``;

export const Title = styled.div``;

export const Message = styled.div``;

export const Button = styled.div``;

export const Close = styled(CgClose)``;
