import React from "react";

import { Filter } from "../../../../components";

export default function FilterContainer() {
  return (
    <Filter>
      <Filter.Title>Customize your rating list</Filter.Title>
      <Filter.Item>
        <Filter.Name>sort by:</Filter.Name>
        <Filter.Element>date</Filter.Element>
        <Filter.Element>rating</Filter.Element>
        <Filter.Element>your rating</Filter.Element>
        <Filter.Element>amount of votes</Filter.Element>
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>list type:</Filter.Name>
        <Filter.Element>votes</Filter.Element>
        <Filter.Element>lists</Filter.Element>
        <Filter.Element>favorite</Filter.Element>
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>choose list:</Filter.Name>
        <Filter.Element>hahaha</Filter.Element>
        <Filter.Element>lihahahasts</Filter.Element>
        <Filter.Element>aha</Filter.Element>
      </Filter.Item>
      <Filter.Item>
        <Filter.Name>date rang:</Filter.Name>
        since
        <Filter.Select>
          <Filter.Option>uebu</Filter.Option>
          <Filter.Option>haha</Filter.Option>
          <Filter.Option>haha3</Filter.Option>
        </Filter.Select>
        to
        <Filter.Select>
          <Filter.Option>uebu</Filter.Option>
        </Filter.Select>
        <Filter.Button>choose</Filter.Button>
      </Filter.Item>
    </Filter>
  );
}
