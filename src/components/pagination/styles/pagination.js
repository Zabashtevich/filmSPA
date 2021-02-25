import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const PaginationLink = styled(ReactRouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  color: #000;
`;

export const Item = styled.li`
  height: 40px;
  width: 50px;
  background: #fff;
  border-radius: 10px;
  margin: 0.5rem;
  color: #000;
  border: 1px solid #000;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: all 200ms linear;
  }
  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme.colors.secondary};
      border: 1px solid #fff;
      ${PaginationLink} {
        color: #fff;
      }
    `}
`;

export const ItemEtc = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  cursor: pointer;
`;
