import styled from "styled-components/macro";

export const Outer = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  background-image: url(${({ url }) => url});
  background-position: right -200px top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 100px;
`;

export const Inner = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(14.9%, 9.41%, 12.16%, 1) 150px,
    rgba(14.9%, 9.41%, 12.16%, 0.84) 100%
  );
  justify-content: center;
  display: flex;
`;

export const Container = styled.div`
  ${({ theme }) => theme.animations.fade()};
  box-sizing: border-box;
  max-width: 1300px;
  padding: 2rem;
  display: flex;
  height: 100%;
  color: white;
  width: 100%;
`;

export const Poster = styled.img`
  border-radius: 0.4rem;
  height: 450px;
  width: 300px;

  @media (max-width: 1100px) {
    height: 390px;
    width: 260px;
  }

  @media (max-width: 900px) {
    height: 300px;
    width: 200px;
  }

  @media (max-width: 600px) {
    height: 240px;
    width: 160px;
  }
`;

export const Info = styled.div`
  flex-direction: column;
  align-self: center;
  margin-left: 2rem;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.font.aux.size.large};
  }

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.font.aux.size.big};
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Overview = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  margin-bottom: 2rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const Row = styled.div`
  align-items: center;
  display: flex;
`;

export const Fieldname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  margin-right: 0.5rem;

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const Fieldvalue = styled.span`
  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;
