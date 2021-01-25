import styled from "styled-components/macro";

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
  min-width: 1000px;
  min-height: 600px;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.huge};
  opacity: 0.8;
  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.div``;

export const Confirm = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  padding: 0.7rem 1rem;
  margin-left: 1rem;
  background-color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border: 1px solid rgba(255, 255, 255);
    transition: 300ms;
  }
`;

export const Cancel = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.large};
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
