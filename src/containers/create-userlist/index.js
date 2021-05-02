import React, { useEffect, useState } from "react";

import { CreateUserlist } from "../../components";
import { useProcessContext } from "../../context";
import { useList } from "../../hooks";
import { createUserlist } from "../../utils";

export default function CreateUserlistContainer({ loading, lists }) {
  const [setList] = useList("userlists");
  const [{ processing }] = useProcessContext();

  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  function CreateUserlistHandler() {
    if (value.length >= 5 && value.length <= 10 && lists.userlists.length < 7) {
      return setList([...lists.userlists, createUserlist(value)]);
    }
    setError(true);
  }

  const disabled = processing || loading;

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
    <CreateUserlist data-testid="create-userlist-inner">
      <CreateUserlist.Container>
        <CreateUserlist.Title>Create new list</CreateUserlist.Title>
        <CreateUserlist.Header>
          <CreateUserlist.Row>
            <CreateUserlist.Input
              placeholder={"Enter a name"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <CreateUserlist.Confirm
              disabled={disabled}
              onClick={CreateUserlistHandler}
            >
              Confirm
            </CreateUserlist.Confirm>
            <CreateUserlist.Loading
              visible={disabled}
              data-testid="create-userlist-spinner"
            />
          </CreateUserlist.Row>
        </CreateUserlist.Header>
        <CreateUserlist.Info error={error && 1}>
          {[
            "List name max length is 10 symbols",
            "List name min length is 5 symbols",
            "Max amount of lists - 7",
          ].map((item) => (
            <CreateUserlist.Message key={item}>{item}</CreateUserlist.Message>
          ))}
        </CreateUserlist.Info>
      </CreateUserlist.Container>
    </CreateUserlist>
  );
}
