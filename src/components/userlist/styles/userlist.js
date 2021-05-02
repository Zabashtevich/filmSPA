import styled, { css } from "styled-components/macro";

import { BsList, BsFillTrashFill, BsWrench } from "react-icons/bs";

export const Outer = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-top: 2rem;
  max-height: 100vh;
  display: flex;
  width: 100%;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
`;

export const Placeholder = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.5);
  margin-top: 2rem;
`;

export const Header = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  align-items: center;
  padding: 1rem 3rem;
  position: relative;
  margin-top: 2rem;
  display: flex;
`;

export const Thumbnail = styled(BsList)`
  font-size: 6rem;
`;

export const List = styled.div`
  margin-right: 4rem;
  margin-left: 3rem;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.font.aux.family};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  padding: 0.2rem;
  outline: none;
  width: 300px;
  height: 30px;
  border: none;

  &:disabled {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    color: rgba(0, 0, 0, 0.5);
  }
  &:enabled {
    border-bottom: solid 1px rgba(0, 0, 0, 0.5);
    background-color: transparent;
    color: black;
  }
`;

export const Info = styled.div`
  margin-top: 0.3rem;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
`;

export const Date = styled.div``;

export const Wrapper = styled.div``;

export const Confirm = styled.div``;

export const Cancel = styled.div``;

export const Tools = styled.div`
  flex-direction: column;
  position: absolute;
  display: flex;
  height: 100%;
  width: 10%;
  right: 0;
`;

export const Inner = styled.div`
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  display: flex;
  color: white;
  height: 50%;

  ${({ type }) =>
    type === "delete" &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0 1rem 0 0;

      &:hover {
        background-color: white;
        transition: 300ms;
        color: black;
      }
    `};

  ${({ type }) =>
    type === "edit" &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0 0 1rem 0;

      &:hover {
        background-color: white;
        transition: 300ms;
        color: black;
      }
    `};
`;

export const Delete = styled(BsFillTrashFill)`
  font-size: 1.3rem;
`;

export const Edit = styled(BsWrench)`
  font-size: 1.3rem;
`;
