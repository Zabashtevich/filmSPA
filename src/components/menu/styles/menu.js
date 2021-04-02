import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  BsListUl,
  BsGearFill,
  BsPeopleCircle,
  BsChevronDoubleRight,
} from "react-icons/bs";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.main};
  padding-left: 4rem;
  position: fixed;
  height: 100%;
  width: 300px;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 4rem;
  text-align: center;
  margin-top: 6rem;
  padding: 1rem 0;
  display: block;
  color: #f3f3f3;
  width: 90%;
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
  user-select: none;
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

export const Links = styled.div`
  position: absolute;
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

export const Link = styled(ReactRouterLink)``;
