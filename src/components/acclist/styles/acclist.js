import styled, { css } from "styled-components/macro";

import {
  MdLooksOne,
  MdLooksTwo,
  MdLooks3,
  MdLooks4,
  MdLooks5,
} from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { CgTrash } from "react-icons/cg";

export const Container = styled.div`
  width: 100%;
  min-height: 200px;
  margin-left: 3rem;
  background-color: rgb(242, 242, 242);
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-right: 1px solid rgba(31, 31, 31, 0.1);
`;

export const ImgIcon1 = styled(MdLooksOne)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  fill: gray;
  opacity: 0.5;
`;

export const ImgIcon2 = styled(MdLooksTwo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  fill: gray;
  opacity: 0.5;
`;

export const ImgIcon3 = styled(MdLooks3)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  fill: gray;
  opacity: 0.5;
`;

export const ImgIcon4 = styled(MdLooks4)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  fill: gray;
  opacity: 0.5;
`;

export const ImgIcon5 = styled(MdLooks5)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  fill: gray;
  opacity: 0.5;
`;

export const InfoWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.1rem 0;
  width: 125px;
  ${({ row }) =>
    row &&
    css`
      margin-top: 1rem;
    `};
  color: gray;
  opacity: 0.7;
`;

export const InfoTitle = styled.span``;

export const InfoItem = styled.span``;

export const ButtonsWrapper = styled.div`
  margin-top: 1.5rem;
  position: relative;
`;

export const Delete = styled(CgTrash)`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: gray;
  opacity: 0.7;
  padding: 0.1rem 0.4rem;
  cursor: pointer;
`;

export const Rename = styled(FiEdit3)`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: gray;
  opacity: 0.7;
  padding: 0.1rem 0.4rem;
  cursor: pointer;
`;

export const ItemContainer = styled.div`
  margin-left: 1rem;
  background-color: white;
  display: flex;
  height: 150px;
  border-radius: 1rem;
  border: 1px solid rgba(31, 31, 31, 0.3);
  &:hover {
    ${Rename} {
      color: black;
      opacity: 1;
      transition: 500ms;
    }
    ${Delete} {
      color: black;
      opacity: 1;
      transition: 500ms;
    }
    ${InfoRow} {
      color: black;
      opacity: 1;
      transition: 500ms;
    }
    ${ImgIcon1} {
      fill: black;
      opacity: 1;
      transition: 500ms;
    }
    border: 1px solid rgba(31, 31, 31, 0.5);
    transition: 500ms;
  }
  ${({ theme }) => theme.animations.fadeRight};
`;
