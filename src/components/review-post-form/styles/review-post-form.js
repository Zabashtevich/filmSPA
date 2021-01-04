import styled from "styled-components/macro";

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
`;

export const Textfield = styled.textarea`
  width: 75%;
  resize: none;
  height: 450px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
`;

export const RadioElement = styled.input``;

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
  justify-content: space-around;
  width: 75%;
  margin-top: 2rem;
`;

export const Wrapper = styled.div``;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin-bottom: 4rem;
`;

export const RadioLabel = styled.label``;

export const RadioInner = styled.div``;
