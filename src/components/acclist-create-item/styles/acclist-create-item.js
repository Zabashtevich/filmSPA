import styled from "styled-components/macro";

import { BsPlusCircleFill } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  background-color: white;
  margin-left: 1rem;
  border-radius: 1rem;
  position: relative;
  border: 1px solid rgba(31, 31, 31, 0.3);
  ${({ theme }) => theme.animations.fadeRight};
`;

export const CreateIcon = styled(BsPlusCircleFill)`
  font-size: 5rem;
  fill: gray;
  opacity: 0.5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > path {
    pointer-events: none;
  }
  &:hover {
    fill: black;
    opacity: 1;
    transition: 500ms;
  }
  cursor: pointer;
  ${({ theme }) => theme.animations.fadeRightTransform};
`;

export const CreateTitle = styled.span`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  ${({ theme }) => theme.animations.fadeRight};
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  ${({ theme }) => theme.animations.fadeRight};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin-top: 0.5rem;
  ${({ theme }) => theme.animations.fadeRight};
`;

export const Confirm = styled(HiCheckCircle)`
  font-size: ${({ theme }) => theme.fontSize.large};
  cursor: pointer;
  & > path {
    pointer-events: none;
  }
`;

export const Abort = styled(MdCancel)`
  font-size: ${({ theme }) => theme.fontSize.large};
  cursor: pointer;
  & > path {
    pointer-events: none;
  }
`;

export const Placeholder = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  text-align: center;
  color: gray;
  opacity: 0.5;
`;
