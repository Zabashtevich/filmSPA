import React from "react";
import { Filter } from "../../components";

export default function FilterContainer() {
  return (
    <Filter>
      <Filter.Title>Customize your activiti list</Filter.Title>
      <Filter.Wrapper>
        <Filter.Row>
          <Filter.Name>Sort by:</Filter.Name>
          <Filter.Value>POPULARITY</Filter.Value>
          <Filter.Value>DATE</Filter.Value>
          <Filter.Value>YOUR VOTE VALUE</Filter.Value>
          <Filter.Value>AMOUNT OF VOTES</Filter.Value>
          <Filter.Value>VOTE AVERAGE</Filter.Value>
        </Filter.Row>
        <Filter.Row>
          <Filter.Name>List type:</Filter.Name>
          <Filter.Value>VOTED</Filter.Value>
          <Filter.Value>USERLIST</Filter.Value>
          <Filter.Value>FAVORITE</Filter.Value>
        </Filter.Row>
        <Filter.Row>
          <Filter.Name>Your list:</Filter.Name>
        </Filter.Row>
        <Filter.Row>
          <Filter.Name>Period:</Filter.Name>
          <Filter.Subtitle>from</Filter.Subtitle>
          <Filter.Input />
          <Filter.Subtitle>to</Filter.Subtitle>
          <Filter.Input />
        </Filter.Row>
      </Filter.Wrapper>
    </Filter>
  );
}
