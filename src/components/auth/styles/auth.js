import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

import { MdEmail, MdLockOutline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 0 1rem;
  display: flex;
  height: 100vh;
`;

export const Form = styled.form`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 350px;
  display: flex;
  width: 100%;

  ${({ type }) =>
    type === "signup" &&
    css`
      padding: 1rem 2rem 4rem 2rem;
    `};
`;

export const Header = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
  position: relative;
  font-size: 4rem;
  display: flex;

  ${({ type }) =>
    type === "signup" &&
    css`
      margin-bottom: 1rem;
      font-size: 1.5rem;
    `};
`;

export const Title = styled.span`
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

  @media (max-width: 650px) {
    font-size: 2rem;

    &::before {
      width: calc(100% + 50px);
    }
  }
`;

export const Row = styled.div`
  align-items: center;
  position: relative;
  margin: 1rem 0;
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-family: ${({ theme }) => theme.font.aux.family};
  -webkit-box-shadow: 0 0 0 30px white inset;
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

export const Nickname = styled(AiOutlineUser)`
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  font-size: 1.7rem;
  right: 92%;
  top: 50%;
`;

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

  @media (max-width: 650px) {
    font-size: 1.2rem;
    padding: 0.1rem 0;
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

  &:active {
    transform: scale(0.96);
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`;

export const Message = styled.span`
  margin-top: 1rem;
  display: flex;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
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

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const Avatar = styled.img`
  object-position: top left;
  object-fit: cover;
  visibility: visible;
  transition: 300ms;
  margin: 3rem 0;
  height: 100px;
  width: 100px;
  opacity: 1;

  ${({ disabled }) =>
    disabled &&
    css`
      visibility: hidden;
      opacity: 0;
    `};
`;

export const File = styled.input`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-family: ${({ theme }) => theme.font.aux.family};
  width: 100%;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
