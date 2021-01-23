import React from "react";

import { Account, AccountList } from "./../components";
import useAuthLisner from "./../hooks/useAuthListener";
import useFirestore from "./../hooks/useFirestore";

export default function AccountContainer() {
  const { user } = useAuthLisner();
  const [loadingData, data] = useFirestore(user.displayName, "collection");
  return (
    <Account>
      <Account.ColumnContainer leftcolumn={1}>
        <Account.Avatar src={user.photoURL} />
        <Account.Nickname>{user.displayName}</Account.Nickname>
        <Account.Link to={`${user.displayName}/edit`}>
          Edit profile
        </Account.Link>
      </Account.ColumnContainer>
      <Account.ColumnContainer>
        <Account.Title>YOUR ACTIVITY</Account.Title>
        <Account.Wrapper>
          <Account.Subtitle>Your lists:</Account.Subtitle>
        </Account.Wrapper>
        <AccountList>
          {!loadingData &&
            data &&
            data.map((item, i) => {
              return (
                <AccountList.ItemContainer key={item.id}>
                  <AccountList.ImgWrapper>
                    <AccountList.ImgIcon i={i + 1} />
                  </AccountList.ImgWrapper>
                  <AccountList.InfoWrapper>
                    <AccountList.InfoRow row={1}>
                      <AccountList.InfoTitle>Name:</AccountList.InfoTitle>
                      <AccountList.InfoItem>{item.name}</AccountList.InfoItem>
                    </AccountList.InfoRow>
                    <AccountList.InfoRow>
                      <AccountList.InfoTitle>Date:</AccountList.InfoTitle>
                      <AccountList.InfoItem>123</AccountList.InfoItem>
                    </AccountList.InfoRow>
                    <AccountList.InfoRow>
                      <AccountList.InfoTitle>Amount:</AccountList.InfoTitle>
                      <AccountList.InfoItem>
                        {item.content.length}
                      </AccountList.InfoItem>
                    </AccountList.InfoRow>
                  </AccountList.InfoWrapper>
                </AccountList.ItemContainer>
              );
            })}
        </AccountList>
      </Account.ColumnContainer>
    </Account>
  );
}
