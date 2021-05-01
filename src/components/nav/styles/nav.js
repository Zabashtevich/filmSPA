import styled, { css } from "styled-components/macro";
import {
  BsFillPlusSquareFill,
  BsDot,
  BsHeartFill,
  BsChevronUp,
  BsLink,
} from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";

export const Inner = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  background-color: #404040;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  display: flex;
  width: 300px;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  border-bottom: 2px solid rgba(0, 0, 0, 1);
  background-color: #262626;
  text-align: center;
  padding: 1rem 0;
  display: block;
  color: white;
  width: 100%;
`;

export const Category = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.9rem 0 0.9rem 2rem;
  background-color: #404040;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  color: white;
  width: 100%;
  &:hover {
    filter: brightness(115%);
  }

  ${({ selected }) =>
    selected &&
    css`
      &::before {
        background-color: lightblue;
        position: absolute;
        height: 100%;
        content: "";
        width: 5px;
        left: 0;
        top: 0;
      }
    `};
`;

export const Subtitle = styled.div`
  margin-left: 1rem;
`;

export const Container = styled.div`
  background-color: #262626;
  width: 100%;
`;

export const Footer = styled.div`
  margin-top: auto;
  width: 100%;
`;

export const Link = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.9rem 0 0.9rem 2rem;
  background-color: #404040;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  color: white;

  &:hover {
    filter: brightness(115%);
  }
`;

export const Chain = styled(BsLink)`
  font-size: 1.3rem;
`;

export const Value = styled.span`
  margin-left: 1rem;
`;

export const Create = styled(BsFillPlusSquareFill)`
  font-size: 1.3rem;
`;

export const Arrow = styled(BsChevronUp)`
  transform: rotate(180deg);
  transition: 300ms;
  font-size: 1.3rem;

  ${({ selected }) =>
    selected &&
    css`
      transform: rotate(0);
    `};
`;

export const Heart = styled(BsHeartFill)`
  font-size: 1.3rem;
`;

export const List = styled(BsDot)``;
