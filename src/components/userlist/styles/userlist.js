import styled from "styled-components/macro";

import { BsListUl, BsCheck, BsX, BsGear, BsTrash } from "react-icons/bs";

export const Container = styled.div`
  max-width: 1300px;
  padding: 6rem 0;
  margin: 0 auto;
`;

export const Title = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  margin: 1rem 2rem;
  display: block;
`;

export const List = styled.div`
  box-shadow: 1px 2px 8px rgb(0 0 0 / 50%);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const Item = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  align-items: center;
  padding: 0 2rem;
  height: 100px;
  display: flex;
`;

export const Thumbnail = styled(BsListUl)`
  font-size: ${({ theme }) => theme.font.aux.size.huge};
`;

export const Info = styled.div`
  margin-left: 10rem;
`;

export const Inner = styled.div`
  position: relative;
  align-items: center;
  display: flex;
`;

export const Name = styled.input`
  font-family: ${({ theme }) => theme.font.aux.family};
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  pointer-events: none;
  padding: 0.2rem;
  margin: 0.4rem 0;
  outline: none;
`;

export const Confirm = styled(BsCheck)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  visibility: hidden;
  opacity: 0;
`;

export const Decline = styled(BsX)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  visibility: hidden;
  opacity: 0;
`;

export const Row = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.small};
`;

export const Amount = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.normal};
  margin-left: 0.5rem;
`;

export const Edit = styled(BsGear)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: auto;
`;

export const Delete = styled(BsTrash)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  margin-left: 2rem;
`;
