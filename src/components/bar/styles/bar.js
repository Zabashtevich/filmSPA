import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";
import { RiMovie2Line } from "react-icons/ri";

export const Inner = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  align-items: center;
  position: absolute;
  display: flex;
  height: auto;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1300px;
  width: 100%;
`;

export const Form = styled.form`
  align-items: center;
  position: relative;
  display: flex;
  height: 40px;
  width: 100%;
`;

export const Submit = styled.button`
  clip: rect(0 0 0 0);
  position: absolute;
  margin: -1px;
  height: 1px;
  width: 1px;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.font.aux.family};
  margin-left: 30px;
  font-size: 1.1rem;
  outline: none;
  width: 1200px;
  border: none;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0);

  &:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    transition: 300ms;
  }
`;

export const Header = styled.div`
  ${({ theme }) => theme.animations.fade()};
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #ececec;
  justify-content: center;
  display: flex;
  height: 40px;
  width: 100%;
`;

export const Wrapper = styled.div`
  align-items: center;
  position: relative;
  width: 1300px;
  display: flex;
  height: 100%;
`;

export const Trending = styled(HiTrendingUp)`
  transform: translateY(-50%);
  position: absolute;
  font-size: 1.6rem;
  top: 50%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: 30px;
`;

export const List = styled.div`
  background-color: white;
  width: 100%;
`;

export const Item = styled(ReactRouterLink)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 30px;
  width: 100%;

  &:first-of-type {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Content = styled.div`
  position: relative;
  width: 1300px;
`;

export const Name = styled.span`
  margin-left: 30px;
`;

export const Search = styled(BsSearch)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
`;

export const Movie = styled(RiMovie2Line)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
`;

export const Person = styled(BsFillPersonFill)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
`;

export const Nodata = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 75px;
  width: 100%;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.6);
`;
