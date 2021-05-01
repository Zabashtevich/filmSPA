import styled from "styled-components/macro";

export const Inner = styled.div`
  font-family: ${({ theme }) => theme.font.aux.family};
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.huge};
`;

export const Header = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  align-items: center;
  border-radius: 1rem;
  padding: 4rem 5rem;
  margin-top: 5rem;
  display: flex;
`;

export const Row = styled.div`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  font-family: ${({ theme }) => theme.font.aux.family};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  outline: none;
  width: 300px;
`;

export const Confirm = styled.button`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  background-color: ${({ theme }) => theme.colors.main};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  margin-left: 1rem;
  outline: none;
  color: white;

  &:enabled:hover {
    background-color: white;
    transition: 300ms;
    cursor: pointer;
    color: black;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export const Loading = styled.img`
  ${({ theme }) => theme.animations.fade(250, 250, 250)};
  transform: translate(50%, -50%);
  margin-left: 0.2rem;
  position: absolute;
  left: 100%;
  top: 50%;
`;

export const Info = styled.ul`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  box-sizing: border-box;
  border: 2px solid gray;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-radius: 1rem;
  margin-top: 5rem;
  color: white;
  width: 100%;
`;

export const Message = styled.li`
  margin: 1rem 0;
`;
