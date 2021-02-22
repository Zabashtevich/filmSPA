import React, { useState } from "react";

import { Snippet } from "../../../../components";
import SnippetPopup from "./item";

export default function SnipperContainer() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [editProps, setEditProps] = useState({
    mounted: false,
    item: { name: null, id: null },
  });
  const { mounted, item } = editProps;

  return (
    <Snippet>
      <Snippet.Element onClick={() => setPopupVisible(true)}>
        <Snippet.Userlist />
        <Snippet.Backdrop visible={popupVisible}>
          <Snippet.Create visible={mounted}>
            <Snippet.Title>EDIT NAME OF LIST '{`${item.name}`}'</Snippet.Title>
            <Snippet.Wrapper>
              <Snippet.Input />
              <Snippet.Button borderactive={1}>CONFIRM</Snippet.Button>
              <Snippet.Button borderactive={1}>CANCEL</Snippet.Button>
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
                    >
                      EDIT
                    </Snippet.Button>
                    <Snippet.Button borderleft={1}>ADD</Snippet.Button>
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
