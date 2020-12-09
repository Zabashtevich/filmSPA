import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  align-self: flex-start;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
`;

export const Subtitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.normal};
  margin: 0;
`;

export const SubtitleValue = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.small};
  margin: 0;
`;

export const RowContainer = styled.div``;

export const ContentWrapper = styled.div``;
