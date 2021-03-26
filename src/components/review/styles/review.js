import styled from "styled-components/macro";

import { BsFillStarFill } from "react-icons/bs";

export const Container = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  align-items: center;
  margin: 1rem auto;
  max-width: 900px;
  padding: 2rem 0;
  display: flex;
`;

export const Item = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  margin: 2rem 0;
  width: 600px;
`;

export const Header = styled.div`
  align-items: center;
  height: 100px;
  display: flex;
`;

export const Avatar = styled.img`
  border-radius: 0.5rem;
  height: 75px;
`;

export const Nickname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: 1rem;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  color: white;
`;

export const Date = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  margin-left: 1rem;
`;

export const Star = styled(BsFillStarFill)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin-left: auto;
`;

export const Body = styled.div``;

export const Content = styled.span``;

export const Load = styled.div``;
