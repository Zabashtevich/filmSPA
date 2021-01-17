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
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemIcon = styled(BsListCheck)``;

export const CreateIcon = styled(BsPlusCircle)`
  font-size: ${({ theme }) => theme.fontSize.huge};
`;

export const Placeholder = styled.div``;

export const Warning = styled.div``;

export const ItemName = styled.div`
  white-space: nowrap;
`;
