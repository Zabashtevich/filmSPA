import styled from "styled-components/macro";

import { AiFillCaretUp } from "react-icons/ai";

export const Face = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 0.2rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: black;
`;

export const Title = styled.div``;

export const Button = styled.div``;

export const Arrow = styled(AiFillCaretUp)``;

export const Container = styled.div`
  display: none;
`;

export const Subtitle = styled.div``;

export const Item = styled.div``;

export const Backdrop = styled.div``;

export const Element = styled.div``;

export const Added = styled.div``;
