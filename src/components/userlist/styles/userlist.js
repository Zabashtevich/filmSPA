import styled from "styled-components/macro";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
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

export const Header = styled.div``;

export const Wallpaper = styled.div``;

export const Info = styled.div``;

export const Row = styled.div``;

export const Fieldname = styled.div``;

export const Fieldvalue = styled.div``;

export const Edit = styled.div``;
