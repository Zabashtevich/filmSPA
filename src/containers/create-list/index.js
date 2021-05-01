import React from "react";
import { CreateList } from "../../components";
import { useProcessContext } from "../../context";

export default function CreateListContainer({ loading, lists }) {
  const [{ processing }] = useProcessContext();
  const disabled = processing || loading;

  return (
    <CreateList>
      <CreateList.Container>
        <CreateList.Title>Create new list</CreateList.Title>
        <CreateList.Header>
          <CreateList.Row>
            <CreateList.Input placeholder={"Enter a name"} />
            <CreateList.Confirm disabled={disabled}>Confirm</CreateList.Confirm>
            <CreateList.Loading visible={disabled} />
          </CreateList.Row>
        </CreateList.Header>
        <CreateList.Info>
          {[
            "List name max length is 10 symbols",
            "List name min length is 5 symbols",
          ].map((item) => (
            <CreateList.Message key={item}>{item}</CreateList.Message>
          ))}
        </CreateList.Info>
      </CreateList.Container>
    </CreateList>
  );
}
