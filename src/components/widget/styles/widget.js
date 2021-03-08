import styled from "styled-components/macro";

import { GrClose, GrFormAdd, GrPrevious } from "react-icons/gr";

export const Thumbnail = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  background-color: white;
  color: black;
  width: 120px;
  display: flex;
  position: relative;
  margin-top: 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
  user-select: none;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  background-color: white;
  padding: 0.2rem 0.4rem;
  white-space: nowrap;
  margin-left: 1rem;
  border-radius: 0.2rem;
`;

export const Placeholder = styled(GrFormAdd)`
  position: absolute;
  font-size: ${({ theme }) => theme.font.aux.size.big};
  & > * {
    stroke: gray;
  }
`;

export const Container = styled.div`
  background-color: white;
  position: absolute;
  top: calc(100% + 8px);
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 120px;
`;

export const Close = styled(GrClose)`
  position: absolute;
  display: none;
  top: 0;
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  align-self: flex-start;
  padding: 0.1rem 0.2rem;
  user-select: none;
  color: gray;
`;

export const Arrow = styled(GrPrevious)`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  margin-left: 0.5rem;
`;

export const Userlist = styled.div`
  padding: 0.3rem 0.4rem;
  align-self: flex-end;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 300ms;
  }
`;

export const Favorite = styled.div`
  padding: 0.3rem 0.4rem;
  align-self: flex-end;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  width: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 300ms;
  }
`;

export const List = styled.div``;

export const Item = styled.div``;
