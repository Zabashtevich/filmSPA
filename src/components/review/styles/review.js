import styled from "styled-components/macro";

export const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 3rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  ${({ theme }) => theme.animations.opacity};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Nickname = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  margin-left: 1rem;
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

export const Time = styled.span``;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div``;

export const Paragraph = styled.p``;

export const Link = styled.a`
  text-decoration: none;
  color: gray;
`;

export const Show = styled.button`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeightSecondary.bold};
  border-radius: 0.5rem;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  ${({ theme }) => theme.animations.opacity};
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const Delete = styled.button``;
