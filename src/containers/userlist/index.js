import React from "react";
import { useSelector } from "react-redux";

import { Userlist } from "../../components";

export default function UserlistContainer() {
  const { userDataLoading, userlists } = useSelector((store) => store.userData);

  return (
    <Userlist>
      <Userlist.Title>Your lists:</Userlist.Title>
      {!userDataLoading &&
        userlists.map((item) => (
          <Userlist.Item>
            <Userlist.Thumbnail />
            <Userlist.Info>
              <Userlist.Inner>
                <Userlist.Name />
                <Userlist.Confirm />
                <Userlist.Decline />
              </Userlist.Inner>
              <Userlist.Row>
                <Userlist.Subtitle></Userlist.Subtitle>
                <Userlist.Amount></Userlist.Amount>
              </Userlist.Row>
            </Userlist.Info>
            <Userlist.Edit />
            <Userlist.Delete />
          </Userlist.Item>
        ))}
    </Userlist>
  );
}
