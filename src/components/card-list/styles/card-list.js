import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 1100px;
  padding: 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ItemTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin: 0;
`;
export const ItemDate = styled.p`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  margin: 0;
`;

export const ItemDescriptionInner = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: 0;
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.6rem;
  color: #fff;
`;

export const ItemImage = styled.img`
  width: 200px;
  height: 300px;
  ${({ error }) =>
    error &&
    css`
      background-color: #fff;
    `}
`;

export const ItemContainer = styled.div`
  display: flex;
  margin: 0.6rem 0.2rem;
  width: 200px;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  background: rgba(360, 360, 360, 0.9);
  border-radius: 1rem;
  position: relative;
  &:hover {
    transform: scale(1.03);
    transition: transform 100ms linear;
    ${ItemDescriptionInner} {
      opacity: 1;
      transition: opacity 500ms linear;
    }
  }
`;

export const MetaScore = styled.span`
  position: absolute;
  background: green;
  color: #fff;
  top: 3%;
  left: 5%;
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  ${({ error }) =>
    error &&
    css`
      display: none;
    `}
`;
