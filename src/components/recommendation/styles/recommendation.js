import styled from "styled-components/macro";

import { Link as ReactRouterLink } from "react-router-dom";

export const Inner = styled.div`
  overflow-x: scroll;
  font-family: ${({ theme }) => theme.font.aux.family};
`;

export const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.4rem;
`;

export const Item = styled(ReactRouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
`;

export const Poster = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
`;

export const ImagePlaceholder = styled.img``;

export const Placeholder = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-weight: ${({ theme }) => theme.font.aux.weight.heavy};
`;
