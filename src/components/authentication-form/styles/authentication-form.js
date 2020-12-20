import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.reviewsBackground};
  box-shadow: 4px 2px 6px 6px rgba(0, 0, 0, 0.3);
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 12rem 0;
`;

export const Title = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Input = styled.input``;

export const Label = styled.label``;

export const Button = styled.button``;

export const ErrorContainer = styled.div``;

export const ErrorMessage = styled.span``;
