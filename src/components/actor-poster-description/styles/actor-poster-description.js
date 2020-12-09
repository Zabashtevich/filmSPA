import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  align-self: flex-start;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const Subtitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin: 0;
`;

export const SubtitleValue = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  margin: 0;
  padding: 0.2rem 0;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const ContentWrapper = styled.div``;
