import React from "react";
import { Route, Redirect } from "react-router-dom";

export function ProtectedRoute({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
