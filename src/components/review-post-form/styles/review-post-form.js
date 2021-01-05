import styled from "styled-components/macro";

import { VscTriangleUp } from "react-icons/vsc";

export const Container = styled.div`
  max-width: 750px;
  margin: 4rem auto;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 1rem;
`;

export const Nickname = styled.span``;

export const Form = styled.form``;

export const Input = styled.input`
  width: 75%;
  margin-top: 2rem;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.4rem 0.6rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  }
`;

export const Textfield = styled.textarea`
  width: 75%;
  resize: none;
  height: 450px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
`;

export const RadioElement = styled.input`
  cursor: pointer;
`;

export const Button = styled.button`
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  font-size: ${({ theme }) => theme.fontSize.large};
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: #fff;
    border: 1px solid darkgray;
    transition: 250ms;
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

export const Wrapper = styled.div``;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin-bottom: 4rem;
  margin-top: 2rem;
  width: 100%;
  text-align: center;
`;

export const RadioLabel = styled.label`
  margin-left: 0.2rem;
  cursor: pointer;
`;

export const RadioInner = styled.div`
  margin: 1rem;
`;

export const RadioTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  cursor: pointer;
  width: 100%;
  padding: 0.4rem 0.6rem;
  background-color: #fff;
  border: 1px solid gray;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const RadioElementsContainer = styled.div`
  background-color: #fff;
  width: 100%;
  border: 1px solid gray;
  margin-top: 1rem;
  padding: 0.2rem;
  position: absolute;
  top: 100%;
  padding: 0.4rem 0.6rem;
`;

export const Icon = styled(VscTriangleUp)`
  position: absolute;
  top: 13%;
  right: 2%;
  font-size: ${({ theme }) => theme.fontSize.normal};
`;
