import styled from "styled-components/macro";

import { BsPlusCircleFill } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-left: 1rem;
  height: 150px;
  min-width: 250px;
  border-radius: 1rem;
  border: 1px solid rgba(31, 31, 31, 0.3);
  position: relative;
  ${({ theme }) => theme.animations.fadeRtR};
`;

export const CreateIcon = styled(BsPlusCircleFill)`
  font-size: 5rem;
  fill: gray;
  opacity: 0.5;
  width: 250px;
  position: absolute;
  & > path {
    pointer-events: none;
  }
  &:hover {
    fill: black;
    opacity: 1;
    transition: 500ms;
  }
  cursor: pointer;
  ${({ theme }) => theme.animations.opacity};
`;

export const CreateTitle = styled.span`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  ${({ theme }) => theme.animations.opacity};
`;

export const Input = styled.input`
  outline: none;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  ${({ theme }) => theme.animations.opacity};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin-top: 0.5rem;
  ${({ theme }) => theme.animations.opacity};
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

export const PlaceholderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  background-color: white;
  margin-left: 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(31, 31, 31, 0.3);
  ${({ theme }) => theme.animations.fadeRtL};
`;
