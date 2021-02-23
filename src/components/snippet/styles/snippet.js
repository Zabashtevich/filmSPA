import styled, { css } from "styled-components/macro";

import { RiHeartAddFill } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

export const Element = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  justify-content: center;
  white-space: nowrap;
  position: relative;
  margin-top: 2rem;
  z-index: 100;
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

export const Container = styled.div`
  ${({ theme }) => theme.animations.opacity};
  transform: translate(-90%, -90%);
  background-color: white;
  border-radius: 0.5rem;
  position: absolute;
  min-height: 200px;
  width: 400px;
  top: 0%;
  left: 0%;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 0.5rem 0;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: -7px -3px 30px -6px rgba(0, 0, 0, 0.62);
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
`;

export const Circle = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  position: relative;
  z-index: 100;
  width: 50px;
  height: 50px;
  margin: 1rem;
`;

export const Add = styled(GrAdd)`
  font-size: ${({ theme }) => theme.fontSize.large};
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  & > * {
    stroke: rgba(0, 0, 0, 0.3);
  }
`;

export const Remove = styled(IoMdRemove)`
  font-size: ${({ theme }) => theme.fontSize.large};
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Name = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  color: rgba(0, 0, 0, 0.3);
  transform: translate(10%, -50%);
  background-color: white;
  text-align: center;
  position: absolute;
  padding: 0.2rem 0;
  outline: none;
  z-index: 200;
  width: 150px;
  left: 50%;
  top: 50%;
`;

export const Edit = styled(MdModeEdit)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: rgba(0, 0, 0, 0.3);
  margin-left: auto;
  cursor: pointer;
`;

export const Delete = styled(AiFillDelete)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const Create = styled.div``;

export const Ok = styled.div``;

export const Cancel = styled.div``;

export const Inner = styled.span`
  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}
`;
