import React, { useEffect, useState } from "react";

import { useList } from "./../../../hooks";
import { Userlist } from "./../../../components";
import { useCreditsContext, useModalContext } from "../../../context";
import { CreditsContainer } from "./../../";

export default function UserlistItem({ lists, activeList, setBar }) {
  const [, { showErrorModal, showConfirmModal }] = useModalContext();
  const [, setCreditsProps] = useCreditsContext();

  const [inputValue, setInputValue] = useState(activeList.name);
  const [disabled, setDisabled] = useState(true);

  const [setList] = useList("userlists");

  function renameListHandler() {
    if (inputValue.length < 5 || inputValue.length > 10) {
      return showErrorModal("Your list name must be min 5 and max 10 symbols");
    }
    setList(
      lists.userlists.map((item) =>
        item.id === activeList.id ? { ...item, name: inputValue } : item,
      ),
      setDisabled(true),
    );
  }

  function deleteHandler() {
    showConfirmModal({
      message: "You sure you want to delete your list?",
      callback: () => {
        setList(() => {
          setDisabled(true);
          setBar({ activeList: null, activeCategory: "createList" });
          return lists.userlists.filter((item) => item.id !== activeList.id);
        });
      },
    });
  }

  useEffect(() => {
    setCreditsProps({ loading: false, items: activeList.content });
  }, []);

  return (
    <>
      <Userlist.Title data-testid="userlist-item">{`Your list ${activeList.name}`}</Userlist.Title>
      <Userlist.Header>
        <Userlist.List>
          <Userlist.Input
            disabled={disabled}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Userlist.List>

        <Userlist.Wrapper visible={!disabled}>
          <Userlist.Button
            type="confirm"
            onClick={renameListHandler}
            data-testid="confirm button"
          >
            OK
          </Userlist.Button>
          <Userlist.Button
            type="abort"
            onClick={() => setDisabled(true)}
            data-testid="abort-button"
          >
            Abort
          </Userlist.Button>
        </Userlist.Wrapper>

        <Userlist.Tools>
          <Userlist.EditButton
            type="delete"
            onClick={deleteHandler}
            data-testid="delete button"
          >
            <Userlist.Delete />
          </Userlist.EditButton>
          <Userlist.EditButton
            type="edit"
            onClick={() => setDisabled((prev) => !prev)}
            data-testid="edit button"
          >
            <Userlist.Edit />
          </Userlist.EditButton>
        </Userlist.Tools>
      </Userlist.Header>
      <CreditsContainer />
    </>
  );
}
