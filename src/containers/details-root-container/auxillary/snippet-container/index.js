import React, { useState } from "react";

import { Snippet } from "../../../../components";

export default function SnipperContainer({
  userlists = [{ name: "list", id: 1 }],
}) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [editProps, setEditProps] = useState({
    mounted: false,
    item: { name: null, id: null },
  });
  const [value, setValue] = useState("");
  const { mounted, item } = editProps;

  function refreshEditPopup() {
    setEditProps((prev) => ({ ...prev, mounted: false }));
    setValue("");
  }

  return (
    <Snippet>
      <Snippet.Element onClick={() => setPopupVisible(true)}>
        <Snippet.Userlist />
        <Snippet.Backdrop visible={popupVisible}>
          <Snippet.Create visible={mounted}>
            <Snippet.Title>EDIT NAME OF LIST '{`${item.name}`}'</Snippet.Title>
            <Snippet.Wrapper>
              <Snippet.Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Snippet.Button
                borderactive={1}
                disabled={value.length < 5 && 1}
                editbutton={1}
                onClick={() => console.log("hi")} //TODO FIREBASE LIST LOGIC
              >
                CONFIRM
              </Snippet.Button>
              <Snippet.Button borderactive={1} onClick={refreshEditPopup}>
                CANCEL
              </Snippet.Button>
            </Snippet.Wrapper>
          </Snippet.Create>
          {userlists.length === 0 && (
            <Snippet.Item>
              <Snippet.Placeholder />
            </Snippet.Item>
          )}
          {userlists.length > 0 &&
            userlists.map(({ name, id }, index) => {
              return (
                <Snippet.Item>
                  <Snippet.Number>{index + 1}</Snippet.Number>
                  <Snippet.Name>{name}</Snippet.Name>
                  <Snippet.Inner>
                    <Snippet.Button
                      borderleft={1}
                      onClick={() =>
                        setEditProps({ mounted: true, item: { name, id } })
                      }
                      disabled={mounted && 1}
                    >
                      EDIT
                    </Snippet.Button>
                    <Snippet.Button
                      borderleft={1}
                      disabled={mounted && 1}
                      addesc={1}
                    >
                      ADD
                    </Snippet.Button>
                  </Snippet.Inner>
                </Snippet.Item>
              );
            })}
        </Snippet.Backdrop>
      </Snippet.Element>
      <Snippet.Element>
        <Snippet.Favorite />
      </Snippet.Element>
    </Snippet>
  );
}
