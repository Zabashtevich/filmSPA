import styled from "styled-components/macro";

export const Inner = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  display: flex;
  width: 100%;
`;

export const Container = styled.div``;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
`;

export const Header = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  align-items: center;
  border-radius: 1rem;
  padding: 4rem 5rem;
  margin-top: 5rem;
  display: flex;
`;

export const Row = styled.div``;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-family: ${({ theme }) => theme.font.aux.family};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  outline: none;
  width: 300px;
`;

export const Confirm = styled.button`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  margin-left: 1rem;
  cursor: pointer;
  outline: none;
  color: white;

  &:hover {
    background-color: white;
    transition: 300ms;
    color: black;
  }
`;

export const Loading = styled.div``;

export const Info = styled.div``;

export const Message = styled.div``;
