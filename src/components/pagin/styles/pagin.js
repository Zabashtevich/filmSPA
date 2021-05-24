import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding-top: 1rem;
  margin-top: auto;
  display: flex;
  width: 100%;
`;

export const Item = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f3f3f3;
  border-radius: 0.5rem;
  align-items: center;
  user-select: none;
  padding: 0.3rem 0.5rem;
  margin: 0 0.3rem;
  cursor: pointer;
  display: flex;

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
      color: white;
    `};

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #3f3f3f,
      rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    outline: none;
  }

  @media (max-width: 850px) {
    padding: 0.3rem 0.4rem;
    font-size: 0.6rem;
    margin: 0 0.1rem;
  }
`;

export const Dummy = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f3f3f3;
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;

  @media (max-width: 850px) {
    padding: 0.3rem 0.4rem;
    font-size: 0.6rem;
    margin: 0 0.1rem;
  }
`;
