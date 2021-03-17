import styled from "styled-components/macro";

import { BsCircle } from "react-icons/bs";

export const Container = styled.div`
  flex-direction: column;
  margin-top: 1rem;
  display: flex;
`;

export const Header = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Select = styled.select`
  border-radius: 0.5rem;
  outline: none;
`;

export const Option = styled.option``;

export const List = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
`;

export const Year = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  text-align: center;
  margin-left: 0.5rem;
  width: 40px;
`;

export const Icon = styled(BsCircle)`
  font-size: 0.7rem;
  margin-left: 2rem;
`;

export const Info = styled.div`
  justify-content: center;
  flex-direction: column;
  margin-left: 3rem;
  display: flex;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  user-select: none;
`;

export const Role = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
  font-size: ${({ theme }) => theme.font.aux.size.small};
  color: rgba(0, 0, 0, 0.5);
`;

export const Meta = styled.div``;

export const Average = styled.div``;

export const Amount = styled.div``;

export const Uservalue = styled.div``;

export const Wrapper = styled.div``;

export const Star = styled.div``;

export const Popup = styled.div``;

export const Close = styled.div``;
