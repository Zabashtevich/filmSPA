import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
  justify-content: center;
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
`;

export const Dummy = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f3f3f3;
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;
`;
