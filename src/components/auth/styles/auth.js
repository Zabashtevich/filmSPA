import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { MdEmail, MdLockOutline } from "react-icons/md";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  user-select: none;
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const Form = styled.form`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  display: flex;
  width: 350px;
`;

export const Header = styled.div`
  margin-bottom: 6rem;
  position: relative;

  &::before {
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateX(-50%);
    width: calc(100% + 150px);
    position: absolute;
    height: 1px;
    content: "";
    left: 50%;
    top: 140%;
  }
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: 4rem;
`;

export const Row = styled.div`
  align-items: center;
  margin: 1rem 0;
  display: flex;
  width: 100%;
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-family: ${({ theme }) => theme.font.aux.family};
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0.3rem 0.4rem;
  margin-left: auto;
  outline: none;
  height: 30px;
  width: 85%;
`;

export const Key = styled(MdLockOutline)`
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  font-size: 1.7rem;
  right: 92%;
  top: 50%;
`;

export const Nickname = styled.div``;

export const Mail = styled(MdEmail)`
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  font-size: 1.7rem;
  right: 92%;
  top: 50%;
`;

export const Wrapper = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  display: flex;
  width: 100%;
`;

export const Back = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 0.2rem;
  padding: 0.3rem 0;
  cursor: pointer;
  outline: none;
  color: black;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: 300ms;
  }
`;

export const Button = styled(Back)`
  background-color: ${({ theme }) => theme.colors.main};
  margin: 0.5rem 0;
  color: white;
  width: 100%;

  &:hover {
    background-color: white;
    transition: 300ms;
    color: black;
  }
`;

export const Message = styled.span`
  margin-top: 1rem;
  display: flex;
`;

export const Subtitle = styled.div`
  display: inline-block;
`;

export const Link = styled(ReactRouterLink)`
  color: rgba(0, 0, 0, 0.5);
  display: inline-block;
  text-decoration: none;
  margin-left: 0.2rem;
  &:hover {
    color: black;
  }
`;
