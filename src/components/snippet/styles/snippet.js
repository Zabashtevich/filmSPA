import styled, { css } from "styled-components/macro";

import { RiHeartAddFill } from "react-icons/ri";
import { RiPlayList2Fill } from "react-icons/ri";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-top: 3rem;
  z-index: 200;
`;

export const Element = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

export const Favorite = styled(RiHeartAddFill)`
  padding: 0.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  & > * {
    pointer-events: none;
  }
`;

export const Userlist = styled(RiPlayList2Fill)`
  padding: 0.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  & > * {
    pointer-events: none;
  }
`;

export const Backdrop = styled.div`
  ${({ theme }) => theme.animations.opacity}
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 3px 3px rgba(0, 0, 0, 0.22);
  transform: translate(-100%, -100%);
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  min-height: 150px;
  z-index: 300;
  border-radius: 0 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  &::after {
    content: "";
    width: 25px;
    height: 25px;
    position: absolute;
    background-color: gray;
    border-radius: 1rem 0;
    right: 0;
    bottom: 0;
  }
`;

export const Item = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 25px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.3rem 0.5rem;
`;

export const Number = styled.span`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  width: 25px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const Name = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80px;
  margin-left: 2rem;
`;

export const Inner = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  font-size: 3rem;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.small};
  outline: none;
  border: none;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    transition: 500ms;
  }
  ${({ borderleft }) =>
    borderleft &&
    css`
      border-left: 1px solid rgba(0, 0, 0, 0.2);
    `};
  ${({ borderactive }) =>
    borderactive &&
    css`
      border: 1px solid rgba(0, 0, 0, 0.2);
    `};
`;

export const Create = styled.div`
  background-color: white;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 0.4rem;
  padding: 0.2rem 0;
  width: 100%;
  top: 0;
  transform: translateY(-108%);
  z-index: 100;
  ${({ theme }) => theme.animations.opacity};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;
  width: 100%;
  padding-bottom: 1.5rem;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin-bottom: 1rem;
  user-select: none;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
  outline: none;
  width: 150px;
  margin-right: 0.4rem;
`;

export const Placeholder = styled.span``;
