import React, { useState } from "react";

import { Userlist } from "../../../../components";
import { DescriptionPopupContainer } from "../../..";

export default function UserListContainer({ item }) {
  const [descriptionVisible, setDescriptionVisible] = useState({
    createList: false,
    renameList: false,
    deleteList: false,
  });
  const { createList, renameList, deleteList } = descriptionVisible;

  return (
    <Userlist>
      <Userlist.List key={item.id}>
        <Userlist.Thumbnail />
        <Userlist.Wrapper>
          <Userlist.Row>
            <Userlist.Title>name:</Userlist.Title>
            <Userlist.Content>
              {item.name.length > 8 ? item.name.slice(0, 8) + "..." : item.name}
            </Userlist.Content>
          </Userlist.Row>
          <Userlist.Row>
            <Userlist.Title>amount:</Userlist.Title>
            <Userlist.Content>{item.content.length}</Userlist.Content>
          </Userlist.Row>
          <Userlist.Inner>
            <Userlist.Rename
              onMouseEnter={() =>
                setDescriptionVisible((prev) => ({
                  ...prev,
                  renameList: true,
                }))
              }
              onMouseLeave={() =>
                setDescriptionVisible((prev) => ({
                  ...prev,
                  renameList: false,
                }))
              }
            />
            <Userlist.Delete
              onMouseEnter={() =>
                setDescriptionVisible((prev) => ({
                  ...prev,
                  deleteList: true,
                }))
              }
              onMouseLeave={() =>
                setDescriptionVisible((prev) => ({
                  ...prev,
                  deleteList: false,
                }))
              }
            />
            <DescriptionPopupContainer
              backgroundsecondary={1}
              text={"Rename list"}
              visible={renameList}
            />
            <DescriptionPopupContainer
              backgroundsecondary={1}
              text={"Delete list"}
              visible={deleteList}
            />
          </Userlist.Inner>
        </Userlist.Wrapper>
      </Userlist.List>

      {/* {!loading && userlists.length === 0 && (
          <Userlist.List>
            <Userlist.Placeholder>
              you do not have <br />
              any lists :c
            </Userlist.Placeholder>
          </Userlist.List>
        )}
        {!loading && userlists.length < 5 && (
          <Userlist.List>
            <Userlist.Create
              onMouseEnter={() =>
                setDescriptionVisible((prev) => ({ ...prev, createList: true }))
              }
              onMouseLeave={() =>
                setDescriptionVisible((prev) => ({
                  ...prev,
                  createList: false,
                }))
              }
            />
            <DescriptionPopupContainer
              backgroundsecondary={1}
              text={"Create new list"}
              visible={createList}
            />
          </Userlist.List> */}
    </Userlist>
  );
}
