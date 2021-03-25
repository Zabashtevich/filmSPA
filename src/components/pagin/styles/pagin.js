import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  display: flex;
  width: 100%;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 0, 500)};
  display: flex;
`;

export const Item = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  border-radius: 0.3rem;
  align-items: center;
  padding: 0 0.5rem;
  margin: 0 0.2rem;
  cursor: pointer;
  display: flex;
  height: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.aux};
    transition: 300ms;
    color: white;
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
      transition: 300ms;
      color: white;
    `};
`;

export const Dummy = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  border-radius: 0.3rem;
  align-items: center;
  user-select: none;
  display: flex;
  height: 30px;
  width: 25px;
`;
