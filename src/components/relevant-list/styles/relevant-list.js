import styled, { css } from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Name = styled.span`
  margin: 1rem 1rem 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ItemContainer = styled(ReactRouterLink)`
  margin: 0.5rem;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Miniature = styled.img`
  border-radius: 1rem;
  border: 1px solid gray;
  ${({ imageUndefined }) =>
    imageUndefined &&
    css`
      width: 200px;
      height: 300px;
    `}
`;

export const Container = styled.div`
  overflow: ${({ overflow }) => overflow};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  overflow-y: hidden;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin-top: 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 10%;
  background-color: green;
  border-radius: 0.5rem;
`;

export const Score = styled.h4`
  color: #fff;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin: 0.2rem;
`;

export const Error = styled.span``;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  color: ${({ theme }) => theme.colors.secondary};
`;
