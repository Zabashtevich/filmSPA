import React from "react";
import { useSelector } from "react-redux";
import { CreditsContainer } from "..";

import { Filter } from "../../components";
import { range } from "../../utils";

export default function FilterContainer() {
  const { userDataLoading, userlists, ratedMovies } = useSelector(
    (state) => state.userData,
  );
  return (
    <Filter>
      <Filter.Wrapper>
        <Filter.Title>sort by:</Filter.Title>
        {["date", "popularity", "rating", "score", "votes"].map((item) => (
          <Filter.Value key={item}>{item}</Filter.Value>
        ))}
      </Filter.Wrapper>
      <Filter.Wrapper>
        <Filter.Title>type:</Filter.Title>
        {["voted", "list", "favorite"].map((item) => (
          <Filter.Value key={item}>{item}</Filter.Value>
        ))}
      </Filter.Wrapper>
      <Filter.Wrapper>
        <Filter.Title>list:</Filter.Title>
        {!userDataLoading &&
          userlists.map((item) => (
            <Filter.Value key={item.id}>{item.name}</Filter.Value>
          ))}
      </Filter.Wrapper>
      <Filter.Wrapper>
        <Filter.Title>rating:</Filter.Title>
        {["all"].concat(...range(1, 10)).map((item) => (
          <Filter.Value key={item}>{item}</Filter.Value>
        ))}
      </Filter.Wrapper>
      <Filter.Wrapper>
        <Filter.Title>date:</Filter.Title>
        <Filter.Subtitle>from</Filter.Subtitle>
        <Filter.Select>
          {range(1940, 82).map((item) => (
            <Filter.Option key={item}>{item}</Filter.Option>
          ))}
        </Filter.Select>
        <Filter.Subtitle>to</Filter.Subtitle>
        <Filter.Select>
          {range(1940, 82).map((item) => (
            <Filter.Option key={item}>{item}</Filter.Option>
          ))}
        </Filter.Select>
      </Filter.Wrapper>
      <CreditsContainer list={ratedMovies} loading={userDataLoading} />
    </Filter>
  );
}
