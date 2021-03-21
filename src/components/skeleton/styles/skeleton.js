import styled from "styled-components/macro";

export const ListPosterWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  position: absolute;
  top: 0;
  left: 0;
`;

export const PopularSkeletonWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
  margin: 0.6rem 0.4rem;
`;

export const TrendingSkeletonWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 0, 500)};
  margin: 0.6rem;
`;

export const CreditsWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
`;

export const FilterWrapper = styled.div`
  ${({ theme }) => theme.animations.fade(500, 500, 500)};
`;
