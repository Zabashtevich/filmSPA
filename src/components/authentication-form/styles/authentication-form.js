import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
  box-shadow: 4px 2px 6px 6px rgba(0, 0, 0, 0.3);
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 6rem;
`;

export const Title = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  margin-bottom: 2rem;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  margin: 0.5rem;
`;

export const Input = styled.input`
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid gray;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  width: 300px;
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
  font-size: ${({ theme }) => theme.fontSize.normal};
  &:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.2s linear;
  }
`;

export const ErrorContainer = styled.div``;

export const ErrorMessage = styled.span``;
