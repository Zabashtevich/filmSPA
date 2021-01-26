import styled, { css } from "styled-components/macro";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Container = styled.div`
  width: 900px;
  height: 600px;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  border: 5px solid ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.huge};
  text-align: center;
  margin: 3rem 0;
  opacity: 0.8;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  ${({ buttons }) =>
    buttons &&
    css`
      margin: 8rem 0;
    `}
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.8rem 1.2rem;
  border-radius: 1rem;
  width: 450px;
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    transition: 300ms;
  }
`;

export const Confirm = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.7rem 1rem;
  margin-left: 1rem;
  background-color: white;
  transition: 300ms;
  &:enabled {
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
      border: 1px solid rgba(255, 255, 255);
    }
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    color: white;
  }
`;

export const Cancel = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.secondary};
    transition: 300ms;
  }
`;

export const Warning = styled.span`
  margin: 3rem 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.normal};
  opacity: 0.7;
`;
