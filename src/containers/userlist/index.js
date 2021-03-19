import React from "react";
import { useSelector } from "react-redux";

import { Userlist } from "../../components";

export default function UserlistContainer() {
  const { userDataLoading, userlists } = useSelector((store) => store.userData);

  return (
    <Userlist>
      <Userlist.Title>Your lists:</Userlist.Title>
      <Userlist.List>
        {!userDataLoading &&
          userlists.map((item) => {
            console.log(item);
            return (
              <Userlist.Item>
                <Userlist.Thumbnail />
                <Userlist.Info>
                  <Userlist.Inner>
                    <Userlist.Name value={item.name} />
                    <Userlist.Confirm />
                    <Userlist.Decline />
                  </Userlist.Inner>
                  <Userlist.Row>
                    <Userlist.Subtitle>amount of movies:</Userlist.Subtitle>
                    <Userlist.Amount>{item.content.length}</Userlist.Amount>
                  </Userlist.Row>
                </Userlist.Info>
                <Userlist.Edit />
                <Userlist.Delete />
              </Userlist.Item>
            );
          })}
      </Userlist.List>
    </Userlist>
  );
}
