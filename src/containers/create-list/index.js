import React from "react";
import { CreateList } from "../../components";

export default function CreateListContainer() {
  return (
    <CreateList>
      <CreateList.Title>Create new list</CreateList.Title>
      <CreateList.Header>
        <CreateList.Input />
        <CreateList.Confirm />
        <CreateList.Loading />
      </CreateList.Header>
      <CreateList.Info>
        {[
          "List name max length is 10 symbols",
          "List name min length is 5 symbols",
        ].map((item) => (
          <CreateList.Message key={item}>{item}</CreateList.Message>
        ))}
      </CreateList.Info>
    </CreateList>
  );
}
