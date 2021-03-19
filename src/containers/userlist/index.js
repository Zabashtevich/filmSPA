import React from "react";
import { useSelector } from "react-redux";

import { Userlist } from "../../components";
import UserlistItem from "./items/userlist-item";

export default function UserlistContainer() {
  const { userDataLoading, userlists } = useSelector((store) => store.userData);

  return (
    <Userlist>
      <Userlist.Title>Your lists:</Userlist.Title>
      <Userlist.List>
        {!userDataLoading &&
          userlists.map((item) => {
            console.log(item);
            return <UserlistItem key={item.id} item={item} />;
          })}

        <Userlist.Create>
          <Userlist.Icon />
          <Userlist.Placeholder />
          <Userlist.Input />
          <Userlist.Accept />
        </Userlist.Create>
      </Userlist.List>
    </Userlist>
  );
}
