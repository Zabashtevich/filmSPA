import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Nickname = styled.div`
  color: #000;
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin-top: 2rem;
`;

export const Wrapper = styled.div``;

export const RatedContainer = styled.div``;

export const RatedItemWrapper = styled.div``;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ leftcolumn }) =>
    leftcolumn &&
    css`
      border-right: 1px solid gray;
      padding: 1rem 2rem;
    `};
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 1rem;
`;
