import styled from "styled-components/macro";

export const Container = styled.div`
  width: 570px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin: 0;
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
`;
