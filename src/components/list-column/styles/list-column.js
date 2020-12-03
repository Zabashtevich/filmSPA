import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  margin: 8rem 2rem;
  color: #fff;
  z-index: 200;
`;

export const Title = styled.h3`
  margin: 0 0 1rem 0;

  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const ItemContainer = styled.div`
  padding: 0.5rem 0;
`;

export const ItemLink = styled(ReactRouterLink)`
  text-decoration: none;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  margin: 0;
  transition: all 200ms linear;
  padding: 0.3rem;
  &:hover {
    box-shadow: inset 0 -1px hsla(0, 0%, 100%, 0.5);
  }
`;
