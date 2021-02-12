import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { BsList } from "react-icons/bs";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Nickname = styled.div`
  color: #000;
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin-top: 2rem;
`;

export const PosterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid gray;
  padding: 1rem 2rem;
  width: 20%;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 1rem;
`;

export const Link = styled(ReactRouterLink)`
  margin-top: 1rem;
  width: 80%;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.3rem 0;
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  border: 1px solid black;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
    transition: 500ms;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Subtitle = styled.span`
  align-self: flex-start;
  margin: 4rem 0 0 3rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
`;

export const Userlist = styled.div`
  height: 150px;
  width: 90%;
  margin: 1rem 2rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.3rem;
  overflow-x: scroll;
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 100px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin-left: 1rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.22);
`;

export const Icon = styled(BsList)`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0 auto;
`;

export const Info = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fontWeightSecondary.light};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const Name = styled.span`
  width: 50px;
`;

export const Content = styled.span`
  margin: 0 auto;
`;
