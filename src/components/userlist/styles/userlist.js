import styled from "styled-components/macro";

import { BsCardList, BsGear } from "react-icons/bs";

export const Container = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  ${({ theme }) => theme.animations.fade()};
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
  color: rgba(0, 0, 0, 0.7);
  margin-top: 3rem;
`;

export const Subtitle = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
  margin-top: 14rem;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  position: relative;
  outline: none;
  height: 50px;
  width: 600px;
`;

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  justify-content: center;
  margin-top: 2rem;
  display: flex;
  width: 400px;
`;

export const Confirm = styled.button`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
  margin: 0 0.6rem;
  cursor: pointer;
  outline: none;
  color: black;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    transition: 300ms;
    color: white;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Cancel = styled(Confirm)`
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.error};
    filter: brightness(120%);
  }
`;

export const Header = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.6rem;
  align-items: center;
  padding: 2rem 3rem;
  margin-top: 5rem;
  display: flex;
  width: 600px;
`;

export const Wallpaper = styled(BsCardList)`
  font-size: 5rem;
`;

export const Info = styled.div`
  flex-direction: column;
  margin-left: 6rem;
  display: flex;
`;

export const Row = styled.div`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin: 0.1rem 0;
  display: flex;
`;

export const Fieldname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.5);
  margin-right: 1rem;
  width: 115px;
`;

export const Fieldvalue = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.light};
`;

export const Edit = styled(BsGear)`
  font-size: ${({ theme }) => theme.font.aux.size.large};
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  margin-left: auto;
  &:hover {
    color: rgba(0, 0, 0, 1);
    transition: 300ms;
  }
`;
