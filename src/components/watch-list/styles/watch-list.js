import styled from "styled-components/macro";

export const Container = styled.div`
  position: absolute;
  top: 110%;
  left: -150%;
  z-index: 200;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  background-color: gray;
  border-radius: 1rem;
  &.fade-enter {
    opacity: 0;
    transform: translateX(-200px);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: 200ms;
  }
  &.fade-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.fade-exit-active {
    opacity: 0;
    transition: 300ms;
    transform: translateX(200px);
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0.4rem;
`;

export const Number = styled.div``;

export const Name = styled.div``;

export const Date = styled.div``;

export const Add = styled.div``;

export const Remove = styled.div``;

export const Firstletter = styled.div``;

export const Input = styled.div``;

export const Confirm = styled.div``;

export const Abort = styled.div``;
