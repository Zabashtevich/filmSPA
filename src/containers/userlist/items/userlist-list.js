import React, { useEffect, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { getCorrectDate } from "../../../utils";
import { Userlist } from "../../../components";

export default function UserlistList({ list }) {
  const [{ value, inactive }, setSettings] = useState({
    value: list.name,
    inactive: true,
  });
  const inputRef = useRef();

  useEffect(() => {
    if (!inactive) {
      inputRef.current.focus();
    }
  }, [inactive]);

  return (
    <Userlist.List>
      <Userlist.Thumbnail />
      <Userlist.Outer>
        <Userlist.Row>
          <Userlist.Input
            disabled={inactive}
            inputRef={inputRef}
            value={value}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, value: e.target.value }))
            }
          />
          <Userlist.Subrow>
            <Userlist.Subtitle>created at:</Userlist.Subtitle>
            <Userlist.Date>{getCorrectDate(list.date)}</Userlist.Date>
          </Userlist.Subrow>
        </Userlist.Row>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition key={inactive} classNames="fade" timeout={500}>
            <Userlist.Wrapper>
              {!inactive && (
                <>
                  <Userlist.Confirm />
                  <Userlist.Cancel
                    onClick={() =>
                      setSettings({ inactive: true, value: list.name })
                    }
                  />
                </>
              )}
            </Userlist.Wrapper>
          </CSSTransition>
        </SwitchTransition>
      </Userlist.Outer>
      <Userlist.Tools>
        <Userlist.Inner type="delete">
          <Userlist.Delete />
        </Userlist.Inner>
        <Userlist.Inner
          type="edit"
          onClick={() => setSettings((prev) => ({ ...prev, inactive: false }))}
        >
          <Userlist.Edit />
        </Userlist.Inner>
      </Userlist.Tools>
    </Userlist.List>
  );
}
