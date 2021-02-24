import React, { useRef, useState, useEffect } from "react";

import { Snippet } from "../../../../../components";
import { useMetalogicContext, useModalContext } from "./../../../../../context";

export default function SnippetItem({ name, id, setPopupVisible }) {
  const [inputValue, setInputValue] = useState(name);
  const [editActive, setEditActive] = useState(false);
  const [delay, setDelay] = useState({
    editButtons: true,
    defaultButtons: false,
  });

  const [sucessFlags, metalogicInterface] = useMetalogicContext();
  const [modalProps, setModalProps] = useModalContext();

  const { editButtons, defaultButtons } = delay;
  const { setUserlistProps } = metalogicInterface;
  const { showConfirmModal, showErrorModal } = setModalProps;
  const { userlistSucess } = sucessFlags;
  const { accepted } = modalProps;

  const inputRef = useRef(null);

  function renameList() {
    name === inputValue
      ? showErrorModal("You did not change list name")
      : setUserlistProps({ type: "rename", value: { name: inputValue, id } });
  }

  useEffect(() => {
    if (editActive && !editButtons) {
      inputRef.current.focus();
    }
  }, [editActive, editButtons]);

  useEffect(() => {
    if (accepted) {
      setUserlistProps({ type: "delete", id });
    }
  }, [accepted]);

  useEffect(() => {
    if (userlistSucess !== null) {
      setEditActive(false);
      setDelay({ editButtons: true, defaultButtons: false });
      setInputValue(name);
      setPopupVisible(false);
      setUserlistProps({ type: null, value: null, sucess: null });
    }
  }, [userlistSucess]);

  return (
    <Snippet.Item>
      <Snippet.Add editActive={editActive && 1} />
      <Snippet.Name
        onChange={(e) => setInputValue(e.target.value)}
        disabled={!editActive && 1}
        inputRef={inputRef}
        value={inputValue}
      />
      <Snippet.Edit
        visible={!editActive && !defaultButtons}
        setDelay={setDelay}
        onClick={() => setEditActive(true)}
      />
      <Snippet.Delete
        visible={!editActive && !defaultButtons}
        setDelay={setDelay}
        onClick={() =>
          showConfirmModal(`Are you sure you want to delete "${name}" list?`)
        }
      />
      <Snippet.Ok
        visible={editActive && !editButtons}
        setDelay={setDelay}
        onClick={renameList}
      />
      <Snippet.Cancel
        visible={editActive && !editButtons}
        setDelay={setDelay}
        onClick={() => setEditActive(false)}
      />
    </Snippet.Item>
  );
}
