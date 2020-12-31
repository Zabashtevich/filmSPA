import styled from "styled-components/macro";
import { GrClose } from "react-icons/gr";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const Wrapper = styled.div`
  position: relative;
  background-color: #ed4337;
  width: 900px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
`;

export const CornerButton = styled.div`
  position: absolute;
  top: 5%;
  right: 2%;
`;

export const CloseButton = styled.div``;

export const CloseIcon = styled(GrClose)``;

export const Message = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
`;
