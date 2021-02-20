import styled from "styled-components/macro";

import { AiFillHeart } from "react-icons/ai";
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
`;

export const Element = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const Favorite = styled(AiFillHeart)``;

export const Userlist = styled(RiPlayList2Fill)``;

export const Backdrop = styled.div``;

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
