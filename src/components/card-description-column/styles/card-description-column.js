import styled from "styled-components/macro";

export const Container = styled.div`
  z-index: 200;
  margin: 8rem 2rem;
  color: #fff;
  z-index: 100;
`;

export const ContentWrapper = styled.div`
  margin: 10rem 0;
`;

export const DarkTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  color: ${({ theme }) => theme.colors.titleDark};
  margin: 0;
`;

export const LightTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  margin: 0;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
`;

export const Row = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;

export const TitleWrapperLight = styled.div`
  width: 450px;
  margin: 0.8rem 0 0.8rem 2rem;
`;

export const TitleWrapperDark = styled.div`
  margin: 0.8rem 2rem 0.8rem 0;
  width: 120px;
`;
