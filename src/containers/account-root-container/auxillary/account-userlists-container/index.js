import React, { useState } from "react";
import { useSelector } from "react-redux";

import { AccountUserlists } from "../../../../components";
import { DescriptionPopupContainer, UtilityModalContainer } from "../../../";
import { useModalContext } from "../../../../context";

export default function AccountUserlistsContainer() {
  const [descriptionVisible, setDescriptionVisible] = useState({
    createList: false,
    renameList: false,
    deleteList: false,
  });
  const { createList, renameList, deleteList } = descriptionVisible;

  const userData = useSelector(({ userData }) => userData);
  const { userlists, loading } = userData;

  const [modalstate, modalinterface] = useModalContext();
  const { showModal } = modalinterface;

  return (
    <>
      <UtilityModalContainer />
      <AccountUserlists>
        {!loading &&
          userlists.length > 0 &&
          userlists.map((item) => {
            return (
              <AccountUserlists.List key={item.id}>
                <AccountUserlists.Thumbnail />
                <AccountUserlists.Wrapper>
                  <AccountUserlists.Row>
                    <AccountUserlists.Title>name:</AccountUserlists.Title>
                    <AccountUserlists.Content>
                      {item.name.length > 8
                        ? item.name.slice(0, 8) + "..."
                        : item.name}
                    </AccountUserlists.Content>
                  </AccountUserlists.Row>
                  <AccountUserlists.Row>
                    <AccountUserlists.Title>amount:</AccountUserlists.Title>
                    <AccountUserlists.Content>
                      {item.content.length}
                    </AccountUserlists.Content>
                  </AccountUserlists.Row>
                  <AccountUserlists.Inner>
                    <AccountUserlists.Rename
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
                    <AccountUserlists.Delete
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
                      onClick={() =>
                        showModal(
                          `Do you want to delete this list '${item.name}?'`,
                          "warning",
                          item.id,
                        )
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
                  </AccountUserlists.Inner>
                </AccountUserlists.Wrapper>
              </AccountUserlists.List>
            );
          })}
        {!loading && userlists.length === 0 && (
          <AccountUserlists.List>
            <AccountUserlists.Placeholder>
              you do not have <br />
              any lists :c
            </AccountUserlists.Placeholder>
          </AccountUserlists.List>
        )}
        {!loading && userlists.length < 5 && (
          <AccountUserlists.List>
            <AccountUserlists.Create
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
          </AccountUserlists.List>
        )}
      </AccountUserlists>
    </>
  );
}
