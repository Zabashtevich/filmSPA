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
  z-index: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 150ms;
  transform: translateX(${({ state }) => (state === "entering" ? -1400 : 0)}px);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.error};
  z-index: 100;
`;

export const CloseIcon = styled(GrClose)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.2rem;
  & > path {
    stroke: #fff;
  }
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
  background-color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background-color: #fff;
    ${CloseIcon} > path {
      stroke: ${({ theme }) => theme.colors.secondary};
      transition: all 0.2s linear;
    }
    transition: all 0.2s linear;
  }
`;

export const CloseButton = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  padding: 0.2rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: #fff;
    border: 1px solid gray;
    transition: all 0.2s linear;
  }
`;

export const Message = styled.li`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: #fff;
  width: 100%;
  margin: 1rem 2rem;
`;

export const Title = styled.span`
  width: 30%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
`;

export const MessageContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 30%;
  border-bottom: 1px solid gray;
`;
