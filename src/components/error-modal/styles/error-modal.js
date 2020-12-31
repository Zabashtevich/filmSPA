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

export const Inner = styled.div`
  width: 900px;
  height: 450px;
  position: relative;
  background-color: #fff;
  border-radius: 2rem;
  z-index: 200;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d45659;
  z-index: 100;
`;

export const CornerButton = styled.button`
  position: absolute;
  top: 5%;
  right: 2%;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  display: flex;
  align-items: center;
`;

export const CloseButton = styled(CornerButton)`
  position: absolute;
  top: 80%;
  right: 50%;
`;

export const CloseIcon = styled(GrClose)`
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: #fff;
  width: 100%;
`;

export const Title = styled.span`
  width: 30%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 30%;
  border-bottom: 1px solid gray;
`;
