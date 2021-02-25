import styled from "styled-components/macro";
import { BiErrorCircle } from "react-icons/bi";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
  box-shadow: 4px 2px 6px 6px rgba(0, 0, 0, 0.3);
  font-family: ${({ theme }) => theme.font.aux.family};
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 1rem;
`;

export const Title = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  font-weight: ${({ theme }) => theme.font.aux.weight.normal};
  margin-bottom: 2rem;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);
  box-shadow: 4px 2px 6px 6px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  margin: 0.5rem;
`;

export const Input = styled.input`
  border-radius: 0.5rem;
  border: 1px solid gray;
  padding: 0.5rem 1rem;
  color: #fff;
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  text-align: center;
  &:focus {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: #fff;
    transition: all 0.3s linear;
  }
`;

export const Label = styled.label`
  margin: 1rem;
`;

export const Button = styled.button`
  margin: 3rem 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  border: 1px solid gray;
  border-radius: 1rem;
  align-self: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
  outline: none;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.3);
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  &:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.2s linear;
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: wait;
    color: #fff;
  }
`;

export const ErrorContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  list-style-position: inside;
  margin-bottom: 2rem;
  color: #d8000c;
  border: 1px solid #d8000c;
  border-radius: 1rem;
  background-color: #ffd2d2;
  padding-left: 0.2rem;
  font-size: ${({ theme }) => theme.font.aux.size.small};
  max-width: 400px;
  transform: translateY(${({ state }) => (state === "entering" ? -600 : 0)}px);
  opacity: ${({ state }) => (state === "entering" ? 0 : 1)};
  transition: 100ms;
`;

export const ErrorIcon = styled(BiErrorCircle)``;

export const ErrorMessage = styled.li`
  align-self: flex-start;
  padding: 0.5rem;
`;

export const TextLink = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    color: gray;
    transition: all 0.2s linear;
  }
`;

export const AvatarPlaceholder = styled.img`
  max-width: 200px;
  align-self: center;
  margin-bottom: 1rem;
  border-radius: 3rem;
`;

export const UserAvatar = styled.img`
  max-width: 200px;
  align-self: center;
  margin-bottom: 1rem;
  border-radius: 3rem;
  opacity: ${({ state }) => (state === "entering" ? 0 : 1)};
  transform: translateX(${({ state }) => (state === "entering" ? -400 : 0)}px);
  transition: 250ms;
`;
