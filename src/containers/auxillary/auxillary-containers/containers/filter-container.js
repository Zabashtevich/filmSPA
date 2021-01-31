import React from "react";

import { Filter } from "../../../../components";

export default function FilterContainer() {
  return (
    <Filter>
      <Filter.Title>Customize your rating list</Filter.Title>
      <Filter.Item>
        <Filter.Name>sort by:</Filter.Name>
        <Filter.Wrapper>
          <Filter.Element>date</Filter.Element>
          <Filter.Element>rating</Filter.Element>
          <Filter.Element>your rating</Filter.Element>
          <Filter.Element>amount of votes</Filter.Element>
        </Filter.Wrapper>
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>list type:</Filter.Name>
        <Filter.Wrapper>
          <Filter.Element>votes</Filter.Element>
          <Filter.Element>lists</Filter.Element>
          <Filter.Element>favorite</Filter.Element>
        </Filter.Wrapper>
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>choose list:</Filter.Name>
        <Filter.Wrapper>
          <Filter.Element>hahaha</Filter.Element>
          <Filter.Element>lihahahasts</Filter.Element>
          <Filter.Element>aha</Filter.Element>
        </Filter.Wrapper>
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>date rang:</Filter.Name>
        <Filter.Wrapper>
          <Filter.Input />
          <Filter.Input />
          <Filter.Button>choose</Filter.Button>
        </Filter.Wrapper>
      </Filter.Item>
    </Filter>
  );
}
