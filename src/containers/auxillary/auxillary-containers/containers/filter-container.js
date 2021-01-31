import React from "react";

import { Filter } from "../../../../components";

export default function FilterContainer() {
  return (
    <Filter>
      <Filter.Title>Customize your rating list</Filter.Title>
      <Filter.Item>
        <Filter.Name>list type:</Filter.Name>
        <Filter.Wrapper>
          <Filter.Element>your lists</Filter.Element>
          <Filter.Element>favorite</Filter.Element>
          <Filter.Element>your votes</Filter.Element>
        </Filter.Wrapper>
      </Filter.Item>
    </Filter>
  );
}
