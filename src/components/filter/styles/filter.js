import styled, { css } from "styled-components/macro";

export const Outer = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  user-select: none;
  display: flex;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.3);
  margin-top: 4rem;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  margin-top: 2rem;
  display: flex;
  width: 100%;
`;

export const Inner = styled.div`
  ${({ theme }) => theme.animations.fade()};
`;

export const Row = styled.div`
  font-size: 1.05rem;
  align-items: center;
  margin: 0.5rem 0;
  display: flex;
`;

export const List = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

export const Name = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.4);
  padding: 0.3rem 0.45rem;
  margin-right: 0.5rem;
  white-space: nowrap;
  width: 70px;

  @media (max-width: 400px) {
    padding: 0.1rem 0.3rem;
    font-size: 0.9rem;
    width: 60px;
  }
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.3rem 0.45rem;
  margin: 0.1rem 0.3rem;
  transition: 300ms;
  cursor: pointer;
  color: black;

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
      transition: 300ms;
      color: white;
    `};

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    transition: 300ms;
    color: white;
  }

  @media (max-width: 400px) {
    padding: 0.1rem 0.3rem;
    font-size: 0.9rem;
  }
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};

  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

export const Select = styled.select`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align-last: center;
  margin: 0 0.6rem;
  cursor: pointer;
  width: 80px;

  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

export const Option = styled.option``;
