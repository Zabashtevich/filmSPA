import styled from "styled-components/macro";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const Form = styled.form`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 500px;
`;

export const Header = styled.div`
  margin-bottom: 5rem;
  position: relative;

  &::before {
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateX(-50%);
    width: calc(100% + 150px);
    position: absolute;
    height: 1px;
    content: "";
    left: 50%;
    top: 110%;
  }
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: 4rem;
`;

export const Row = styled.div`
  align-items: center;
  display: flex;
`;

export const Name = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 50px;
`;

export const Inner = styled.div``;

export const Input = styled.input``;

export const Key = styled.div``;

export const Nickname = styled.div``;

export const Mail = styled.div``;

export const Wrapper = styled.div``;

export const Back = styled.div``;

export const Button = styled.div``;

export const Subtitle = styled.div``;

export const Message = styled.div``;

export const Link = styled.div``;
