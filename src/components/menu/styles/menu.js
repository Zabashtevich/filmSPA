import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  BsListUl,
  BsGearFill,
  BsPeopleCircle,
  BsChevronDoubleRight,
  BsLink45Deg,
  BsCircleFill,
  BsPlusCircle,
} from "react-icons/bs";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.main};
  padding-left: 5rem;
  transition: 300ms;
  user-select: none;
  position: fixed;
  height: 100%;
  width: 300px;
  left: -380px;

  ${({ visible }) =>
    visible &&
    css`
      left: 0;
    `};
`;

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 14rem;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transform: translateX(-50%);
  text-align: center;
  position: absolute;
  padding: 1rem 0;
  display: block;
  color: #f3f3f3;
  width: 90%;
  left: 50%;
  top: 10%;
`;

export const Section = styled.div`
  margin: 2rem 0;
  width: 100%;
`;

export const Row = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  align-items: center;
  position: relative;
  color: #f3f3f3;
  display: flex;
  height: 40px;
  width: 100%;
`;

export const Category = styled.span`
  ${({ type }) =>
    type === "create list" &&
    css`
      border-radius: 0.2rem 0 0 0.2rem;
      padding: 0.5rem 0;
      display: block;
    `};
`;

export const Item = styled.div`
  border-radius: 0.1rem 0 0 0.1rem;
  position: relative;
  cursor: pointer;
  color: #f3f3f3;
  width: 100%;
  &:hover {
    background-color: white;
    > * {
      color: black;
    }
  }
`;

export const Create = styled.div`
  border-radius: 0.2rem 0 0 0.2rem;
  position: relative;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Plus = styled(BsPlusCircle)`
  transform: translateY(-50%);
  position: absolute;
  font-size: 1.5rem;
  color: white;
  right: 104%;
  top: 50%;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  padding: 0.5rem 1.5rem;
  transition: 200ms;
  display: block;
`;

export const Edit = styled(BsGearFill)`
  color: rgba(255, 255, 255, 0.5);
  transform: translateY(-50%);
  position: absolute;
  transition: 200ms;
  left: 85%;
  top: 50%;
`;

export const Default = styled(BsListUl)`
  transform: translateY(-45%);
  position: absolute;
  font-size: 1.5rem;
  right: 104%;
  top: 50%;
`;

export const Userlist = styled(BsPeopleCircle)`
  transform: translateY(-50%);
  position: absolute;
  font-size: 1.5rem;
  right: 104%;
  top: 50%;
`;

export const Links = styled(BsLink45Deg)`
  transform: translateY(-50%);
  position: absolute;
  font-size: 1.5rem;
  right: 104%;
  top: 50%;
`;

export const Arrow = styled(BsChevronDoubleRight)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0.2rem 0.2rem 0;
  transform: translateY(-50%);
  padding: 1rem 0.5rem;
  position: absolute;
  color: black;
  left: 100%;
  top: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    transition: 300ms;
    color: white;
  }
`;

export const Link = styled(ReactRouterLink)`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  border-radius: 0.2rem 0 0 0.2rem;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  align-items: center;
  display: flex;
  color: white;
  width: 100%;

  &:hover {
    text-decoration: underline;
    background-color: white;
    color: black;
  }
`;

export const Circle = styled(BsCircleFill)`
  transform: translateY(-50%);
  position: absolute;
  font-size: 0.8rem;
  left: 85%;
  top: 50%;
`;
