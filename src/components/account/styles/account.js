import styled, { css } from "styled-components/macro";
import { VscSettingsGear } from "react-icons/vsc";
import { Link as ReactRouterLink } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  flex-direction: column;
  padding: 1rem 0;
  display: flex;
  ${({ type }) =>
    type === "poster" &&
    css`
      align-items: center;
      width: 300px;
    `};
  ${({ type }) =>
    type === "content" &&
    css`
      width: 900px;
    `};
`;

export const Poster = styled.img`
  border-radius: 0.5rem;
  max-width: 150px;
`;

export const Nickname = styled.span`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  color: rgba(0, 0, 0, 0.6);
  margin-top: 0.5rem;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.large};
  color: rgba(0, 0, 0, 0.5);
  margin: 0 auto 4rem;
`;

export const Section = styled.div``;

export const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.font.aux.weight.bold};
  font-size: ${({ theme }) => theme.font.aux.size.big};
`;

export const Link = styled(ReactRouterLink)`
  color: black;
  text-decoration: none;
  align-items: center;
  display: flex;
  &:hover {
    transition: 300ms;
    color: ${({ theme }) => theme.colors.aux};
  }
`;

export const Linkicon = styled(FiExternalLink)`
  margin-left: 0.2rem;
`;

export const List = styled.div`
  flex-direction: column;
  padding: 0.8rem 0.2rem;
  display: flex;
  height: 150px;
  width: 100%;
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
`;

export const Thumbnail = styled.img`
  border-radius: 1rem;
  width: 100px;
`;

export const Info = styled.div`
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
  display: flex;
`;

export const Name = styled.span``;

export const Amount = styled.span``;

export const Settings = styled(VscSettingsGear)`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.5);
  margin-left: 1rem;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
    transition: 300ms;
  }
`;

export const Placeholder = styled.span`
  font-size: ${({ theme }) => theme.font.aux.size.big};
  color: rgba(0, 0, 0, 0.4);
  margin: auto;
`;
