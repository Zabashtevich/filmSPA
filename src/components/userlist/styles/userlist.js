import styled from "styled-components/macro";

import { BsList } from "react-icons/bs";
import { RiListSettingsLine } from "react-icons/ri";
import { FiDelete } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  margin: 1rem;
  cursor: pointer;
  position: relative;
  &:hover {
    background: white;
    transition: 500ms;
  }
`;

export const Thumbnail = styled(BsList)`
  font-size: ${({ theme }) => theme.fontSize.huge};
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Row = styled.div`
  display: flex;
  width: 90%;
  align-self: center;
  font-size: 0.9rem;
`;

export const Title = styled.div`
  width: 50px;
`;

export const Content = styled.div`
  margin: 0 auto;
`;

export const Inner = styled.div`
  align-self: center;
  margin-top: 0.5rem;
  margin-bottom: -1rem;
  width: 45%;
  display: flex;
  justify-content: space-around;
`;

export const Rename = styled(RiListSettingsLine)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  & > * {
    pointer-events: none;
  }
`;

export const Delete = styled(FiDelete)`
  font-size: ${({ theme }) => theme.fontSize.normal};
  & > * {
    pointer-events: none;
  }
`;

export const Create = styled(BsPlusSquare)`
  font-size: 4rem;
  color: gray;
  margin: 0 auto;
`;

export const Placeholder = styled.span`
  margin: 0 auto;
  text-align: center;
  color: gray;
  user-select: none;
`;
