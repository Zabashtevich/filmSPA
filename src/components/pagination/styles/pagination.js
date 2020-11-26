import styled from "styled-components/macro";
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

export const Item = styled.li`
  height: 40px;
  width: 40px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

export const PaginationLink = styled(ReactRouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: #000;
`;
