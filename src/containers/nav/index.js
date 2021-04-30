import React from "react";

import { Nav } from "../../components";

export default function NavContainer({ loading, lists }) {
  return (
    <Nav>
      <Nav.Title>Side Menu</Nav.Title>
      <Nav.Category>
        <Nav.Create />
        <Nav.Subtitle>Create list</Nav.Subtitle>
      </Nav.Category>
      <Nav.Category>
        <Nav.Heart />
        <Nav.Subtitle>Favorites</Nav.Subtitle>
      </Nav.Category>
      <Nav.Category>
        <Nav.Arrow />
        <Nav.Subtitle>Your lists</Nav.Subtitle>
      </Nav.Category>
      {!loading && (
        <Nav.Container>
          {lists.userlists.map((item) => (
            <Nav.Item>
              <Nav.List />
              <Nav.Name>{item.name}</Nav.Name>
            </Nav.Item>
          ))}
        </Nav.Container>
      )}
      <Nav.Footer>
        <Nav.Link>
          <Nav.Chain />
          <Nav.Value>Home</Nav.Value>
        </Nav.Link>
        <Nav.Link>
          <Nav.Chain />
          <Nav.Value>Account</Nav.Value>
        </Nav.Link>
      </Nav.Footer>
    </Nav>
  );
}
