import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ children, ...rest }) {
  const { loggedIn, userDataLoading } = useSelector((state) => state.userData);

  return (
    <Route
      {...rest}
      render={() => {
        if (!loggedIn && !userDataLoading) {
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
