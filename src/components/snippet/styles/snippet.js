import styled from "styled-components/macro";

import { RiHeartAddFill } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";
import { VscDiffAdded } from "react-icons/vsc";
import { GoDiffRemoved } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiFillCloseSquare } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-top: 3rem;
`;

export const Element = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

export const Favorite = styled(RiHeartAddFill)`
  padding: 0.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  & > * {
    pointer-events: none;
  }
`;

export const Userlist = styled(RiPlayList2Fill)`
  padding: 0.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  & > * {
    pointer-events: none;
  }
`;

export const Backdrop = styled.div`
  ${({ theme }) => theme.animations.opacity}
  position: absolute;
`;

export const Item = styled.div``;

export const Number = styled.span``;

export const Name = styled.span``;

export const Wrapper = styled.div``;

export const Add = styled(VscDiffAdded)``;

export const Remove = styled(GoDiffRemoved)``;

export const Edit = styled(FiEdit)``;

export const Popup = styled.div``;

export const Title = styled.span``;

export const Input = styled.input``;

export const Inner = styled.div``;

export const Placeholder = styled.span``;

export const Confirm = styled(AiFillCheckSquare)``;

export const Cancel = styled(AiFillCloseSquare)``;
