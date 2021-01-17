import styled from "styled-components/macro";

import { BsPlusCircle } from "react-icons/bs";
import { BsListCheck } from "react-icons/bs";

export const Container = styled.div`
  position: absolute;
  top: -100%;
  z-index: 200;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  background-color: gray;
  border-radius: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  margin: 1rem 2rem;
  border: 1px solid black;
  border-radius: 2rem;
  background-color: white;
`;

export const ItemIcon = styled(BsListCheck)``;

export const CreateIcon = styled(BsPlusCircle)`
  font-size: ${({ theme }) => theme.fontSize.huge};
  fill: gray;
`;

export const WarningWrapper = styled.div``;

export const WarningMessage = styled.span``;

export const ItemName = styled.div`
  white-space: nowrap;
  color: gray;
  margin-top: 1rem;
`;

export const InputName = styled.input`
  margin-top: 0.4rem;
  color: gray;
  outline: none;
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  text-align: center;
  border: 1px solid black;
`;

export const InputLabel = styled.label`
  color: gray;
  margin-top: 1rem;
`;

export const CreateButton = styled.button`
  margin-top: 0.5rem;
  border-radius: 1rem;
  outline: none;
  border: 1px solid black;
  background-color: gray;
  color: white;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
`;
