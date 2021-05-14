import styled, { css, keyframes } from "styled-components/macro";

export const Inner = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.font.aux.size.large};
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
  }
`;

export const Header = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  align-items: center;
  border-radius: 1rem;
  padding: 4rem 5rem;
  margin-top: 5rem;
  display: flex;

  @media (max-width: 800px) {
    padding: 2rem 2.5rem;
  }

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const Row = styled.div`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-family: ${({ theme }) => theme.font.aux.family};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  outline: none;
  width: 300px;

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
    padding: 0.2rem 0.5rem;
    width: 200px;
  }

  @media (max-width: 500px) {
    width: 150px;
  }
`;

export const Confirm = styled.button`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  margin-left: 1rem;
  outline: none;
  color: white;

  &:enabled:hover {
    background-color: white;
    transition: 300ms;
    cursor: pointer;
    color: black;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
    padding: 0.2rem 0.5rem;
  }

  @media (max-width: 500px) {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
  }
`;

export const Loading = styled.img`
  ${({ theme }) => theme.animations.fade(250, 250, 250)};
  transform: translate(50%, -50%);
  margin-left: 0.2rem;
  position: absolute;
  left: 100%;
  top: 50%;
`;

export const Info = styled.ul`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: ${({ theme }) => theme.colors.main};
  flex-direction: column;
  box-sizing: border-box;
  border: 2px solid gray;
  padding: 0.2rem 1rem 0.2rem 2rem;
  border-radius: 1rem;
  margin-top: 5rem;
  display: flex;
  color: white;

  ${({ error }) =>
    error &&
    css`
      animation: ${({ theme }) => theme.animations.shake} 0.82s
        cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      background-color: ${({ theme }) => theme.colors.error};
      transition: background-color 500ms;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    `};

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  @media (max-width: 800px) {
    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;

export const Message = styled.li`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin: 0.6rem 0;

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.font.aux.size.normal};
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
