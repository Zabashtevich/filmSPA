import styled, { css } from "styled-components/macro";

import { RiHeartAddFill } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";

export const Element = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-top: 2rem;
  z-index: 100;
  white-space: nowrap;
`;

export const Userlist = styled(RiPlayList2Fill)`
  font-size: 2.5rem;
  background-color: white;
  border-radius: 50%;
  color: black;
  padding: 0.5rem;
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
`;

export const Favorite = styled(RiHeartAddFill)`
  font-size: 2.5rem;
  background-color: white;
  border-radius: 50%;
  color: black;
  padding: 0.5rem;
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
`;

export const FavInner = styled.span`
  position: relative;
  &::after {
    content: "Add movie to favorite";
    background-color: white;
    padding: 0.2rem 0.4rem;
    position: absolute;
    visibility: hidden;
    border-radius: 1rem;
    color: black;
    opacity: 0;
    top: 100%;
    left: -75%;
    transition: 500ms;
  }
  &:hover::after {
    visibility: visible;
    opacity: 1;
  }
`;

export const UslistInner = styled.span`
  position: relative;
  &::after {
    content: "Add movie to list";
    background-color: white;
    padding: 0.2rem 0.4rem;
    position: absolute;
    visibility: hidden;
    border-radius: 1rem;
    color: black;
    opacity: 0;
    top: 100%;
    left: -50%;
    transition: 500ms;
  }
  &:hover::after {
    visibility: visible;
    opacity: 1;
  }
`;

export const Container = styled.div``;

export const Item = styled.div``;

export const Add = styled.div``;

export const Remove = styled.div``;

export const Name = styled.div``;

export const Edit = styled.div``;

export const Delete = styled.div``;

export const Create = styled.div``;

export const Ok = styled.div``;

export const Cancel = styled.div``;
