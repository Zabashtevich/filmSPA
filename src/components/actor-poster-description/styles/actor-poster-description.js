import styled from "styled-components/macro";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  color: ${({ theme }) => theme.colors.secondary};
  align-self: flex-start;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
`;

export const Subtitle = styled.h4`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  margin: 0;
`;

export const SubtitleValue = styled.h4`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  margin: 0;
  padding: 0.2rem 0;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const ContentWrapper = styled.div``;
