import styled from "styled-components/macro";

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
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightCard.bold};
  margin: 0;
`;
export const ItemDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 0;
`;

export const ItemDescriptionInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.6rem;
  color: #000;
`;

export const ItemImage = styled.img`
  width: 200px;
  height: 300px;
`;

export const ItemContainer = styled.div`
  display: flex;
  margin: 0.6rem 0.2rem;
  width: 200px;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  background: rgba(360, 360, 360, 0.6);
  border-radius: 1rem;
  position: relative;
`;

export const MetaScore = styled.span`
  position: absolute;
  background: green;
  color: #fff;
  top: 3%;
  left: 5%;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightCard.bold};
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
`;
