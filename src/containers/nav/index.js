import React from "react";

import { Nav } from "../../components";

export default function NavContainer() {
  return (
    <Nav>
      <Nav.Title>Side Menu</Nav.Title>
      <Nav.Category>
        <Nav.Subtitle>Create list</Nav.Subtitle>
        <Nav.Create />
      </Nav.Category>
      <Nav.Category>
        <Nav.Subtitle>Favorites</Nav.Subtitle>
        <Nav.Heart />
      </Nav.Category>
      <Nav.Subcategory>
        <Nav.Subtitle>Your lists</Nav.Subtitle>
        <Nav.Arrow />
      </Nav.Subcategory>
      <Nav.Container>
        <Nav.Item>
          <Nav.Thumbnail />
          <Nav.Name></Nav.Name>
        </Nav.Item>
      </Nav.Container>
      <Nav.Link>
        <Nav.Chain />
        <Nav.Value>Home</Nav.Value>
      </Nav.Link>
      <Nav.Link>
        <Nav.Chain />
        <Nav.Value>Account</Nav.Value>
      </Nav.Link>
    </Nav>
  );
}
