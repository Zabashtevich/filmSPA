import React, { useEffect, useState } from "react";
import { CreateList } from "../../components";
import { useProcessContext } from "../../context";
import { useList } from "../../hooks";

export default function CreateListContainer({ loading, lists }) {
  const [setList] = useList("userlists");
  const [{ processing }] = useProcessContext();

  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const disabled = processing || loading;

  function createListHandler() {
    if (value.length >= 5 && value.length <= 10) {
      //todo
    }
    setError(true);
  }

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <CreateList>
      <CreateList.Container>
        <CreateList.Title>Create new list</CreateList.Title>
        <CreateList.Header>
          <CreateList.Row>
            <CreateList.Input
              placeholder={"Enter a name"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <CreateList.Confirm disabled={disabled} onClick={createListHandler}>
              Confirm
            </CreateList.Confirm>
            <CreateList.Loading visible={disabled} />
          </CreateList.Row>
        </CreateList.Header>
        <CreateList.Info error={error && 1}>
          {[
            "List name max length is 10 symbols",
            "List name min length is 5 symbols",
            "Max amount of lists - 7",
          ].map((item) => (
            <CreateList.Message key={item}>{item}</CreateList.Message>
          ))}
        </CreateList.Info>
      </CreateList.Container>
    </CreateList>
  );
}
