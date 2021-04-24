import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Outer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  padding-left: 2rem;
  position: fixed;
  width: 350px;
  bottom: 0;
  left: 0;
  top: 0;
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin-bottom: 5rem;
  position: relative;
  margin-top: 5rem;
  color: white;

  &::after {
    transform: translateX(-50%);
    width: calc(100% + 50px);
    background-color: white;
    position: absolute;
    height: 1px;
    content: "";
    left: 50%;
    top: 110%;
  }
`;

export const Subtitle = styled.span``;

export const List = styled.div``;

export const Item = styled.div``;

export const Thumbnail = styled.div``;

export const Name = styled.div``;

export const Arrow = styled.div``;

export const Footer = styled.div``;

export const Link = styled(ReactRouterLink)``;
