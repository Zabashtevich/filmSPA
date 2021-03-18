import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  flex-direction: column;
  margin-top: 1rem;
  display: flex;
  width: 800px;
`;

export const Wrapper = styled.div`
  align-items: center;
  margin: 0.2rem 0;
  display: flex;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.45);
  margin-right: 1rem;
  width: 55px;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: #f2f2f2;
  padding: 0.2rem 0.4rem;
  user-select: none;
  margin: 0 0.1rem;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
      transition: 300ms;
      color: white;
    `};
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
  margin: 0 0.4rem;
`;

export const Select = styled.select`
  border-radius: 0.4rem;
  outline: none;
`;

export const Option = styled.option``;
