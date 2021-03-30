import styled from "styled-components/macro";

import { BsFillStarFill, BsX, BsTriangleFill } from "react-icons/bs";

export const Container = styled.div`
  flex-direction: column;
  margin-top: 2rem;
  display: flex;
  width: 900px;
`;

export const Number = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.2);
  margin-right: 1rem;
  text-align: center;
  width: 50px;
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  width: 100%;
`;

export const Year = styled.span`
  margin-right: 3rem;
`;

export const Title = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 4rem;
  width: 300px;
`;

export const Meta = styled.div`
  align-items: center;
  display: flex;
  width: 90px;
`;

export const Average = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  text-align: center;
  width: 35px;
`;

export const Amount = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
  margin-left: 1rem;
`;

export const Value = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  padding: 0.2rem 0.7rem;
  border-radius: 0.5rem;
  margin-left: 3rem;
  color: white;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
`;

export const Rating = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  border-radius: 0.2rem;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding: 0.3rem;
  display: flex;
`;

export const Star = styled(BsFillStarFill)``;

export const Popup = styled.div`
  position: absolute;
`;

export const Close = styled(BsX)``;

export const Widget = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.small};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: center;
  border-radius: 0.2rem;
  align-items: center;
  margin-left: 0.4rem;
  position: relative;
  cursor: pointer;
  padding: 0.3rem;
  display: flex;
`;

export const Arrow = styled(BsTriangleFill)``;

export const Name = styled.div``;

export const Favorite = styled.div``;

export const Subtitle = styled.div``;

export const Userlist = styled.div``;
