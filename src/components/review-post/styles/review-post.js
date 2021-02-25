import styled from "styled-components/macro";
import { VscTriangleUp } from "react-icons/vsc";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 750px;
  margin: 1rem auto;
  font-family: ${({ theme }) => theme.font.aux.family};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  border: 1px solid black;
`;

export const Input = styled.input`
  outline: none;
  width: 75%;
  margin-top: 2rem;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
  border: 1px solid gray;
  padding: 0.4rem 0.6rem;
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  }
`;

export const Textfield = styled.textarea`
  width: 73%;
  resize: none;
  height: 350px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  outline: none;
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
`;

export const RadioElement = styled.input`
  cursor: pointer;
`;

export const Button = styled.button`
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid darkgray;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  &:enabled:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: #fff;
    transition: 250ms;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: darkgray;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  position: relative;
  margin-top: 1rem;
`;

export const Nickname = styled.span`
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 0.4rem;
  border-bottom: 1px solid black;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4rem;
  padding: 1rem 0.5rem;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 3rem;
  border: 1px solid black;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin-bottom: 2rem;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
`;

export const RadioLabel = styled.label`
  margin-left: 0.2rem;
  cursor: pointer;
  user-select: none;
`;

export const RadioInner = styled.div`
  margin: 1rem;
`;

export const RadioTitle = styled.input`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
  cursor: pointer;
  width: 100%;
  padding: 0.4rem 0.6rem;
  outline: none;
  border: 1px solid gray;
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
`;

export const RadioElementsContainer = styled.div`
  width: 100%;
  border: 1px solid gray;
  margin-top: 1rem;
  padding: 0.2rem;
  position: absolute;
  top: 100%;
  padding: 0.4rem 0.6rem;
  transition: 150ms;
  transform: translateY(${({ state }) => (state === "entering" ? -200 : 0)}px);
  opacity: ${({ state }) => (state === "entering" ? 0 : 1)};
  border-radius: 1rem;
  box-shadow: 1px 6px 3px 1px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
`;

export const Icon = styled(VscTriangleUp)`
  position: absolute;
  top: 13%;
  right: 2%;
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  transform: rotate(${({ rotate }) => rotate});
  transition: 100ms;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  align-items: center;
`;

export const BackLink = styled(ReactRouterLink)`
  display: flex;
  margin-bottom: 2rem;
  padding: 0.5rem 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: #fff;
  border-radius: 1rem;
  cursor: pointer;
  border: 1px solid darkgray;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  text-decoration: none;
  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: 250ms;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: darkgray;
  }
`;

export const IconLeft = styled(AiOutlineDoubleLeft)`
  text-align: center;
  display: block;
  align-self: center;
  padding-right: 0.2rem;
`;
