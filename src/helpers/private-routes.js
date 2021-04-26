import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ children, ...rest }) {
  const { profileExist, userDataLoading } = useSelector(
    (state) => state.userData,
  );

  return (
    <Route
      {...rest}
      render={() => {
        if (!profileExist && !userDataLoading) {
          return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          );
        }

        return children;
      }}
    />
  );
}
