import styled, { css } from "styled-components/macro";

import { RiHeartAddFill } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { RiRefreshLine } from "react-icons/ri";

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
  width: 400px;
  transition: 500ms;
  margin: 1rem;
`;

export const Add = styled(GrAdd)`
  font-size: ${({ theme }) => theme.fontSize.large};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
  padding: 0.4rem;
  z-index: 100;
  & > * {
    stroke: rgba(0, 0, 250, 1);
  }
`;

export const Remove = styled(IoMdRemove)`
  font-size: ${({ theme }) => theme.fontSize.large};
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.3);
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  & > * {
    pointer-events: none;
  }
`;

export const Name = styled.input`
  border: none;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  background-color: white;
  text-align: end;
  padding: 0.2rem 0;
  padding-right: 0.4rem;
  margin-left: -0.4rem;
  outline: none;
  z-index: 200;
  transition: 100ms;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Edit = styled(MdModeEdit)`
  ${({ theme }) => theme.animations.fadeRtR};
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
`;

export const Delete = styled(AiFillDelete)`
  ${({ theme }) => theme.animations.fadeRtR};
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: rgba(0, 0, 0, 0.3);
  margin-left: 0.3rem;
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
`;

export const Create = styled(BsThreeDotsVertical)`
  font-size: ${({ theme }) => theme.fontSize.large};
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.3);
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  & > * {
    pointer-events: none;
  }
`;

export const Ok = styled(BsCheckCircle)`
  ${({ theme }) => theme.animations.fadeLtL};
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: rgba(0, 0, 0, 0.3);
  margin-left: auto;
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
`;

export const Cancel = styled(RiRefreshLine)`
  ${({ theme }) => theme.animations.fadeLtL};
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: rgba(0, 0, 0, 0.3);
  margin-left: 0.3rem;
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
`;
