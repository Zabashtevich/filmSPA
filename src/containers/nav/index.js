import React from "react";

import { Nav } from "../../components";

export default function NavContainer({ loading, lists, setBar, bar }) {
  const { activeCategory, activeList } = bar;

  return (
    <Nav data-testid="nav-outer">
      <Nav.Title>Side Menu</Nav.Title>
      <Nav.Category
        data-testid="nav-create-list"
        selected={activeCategory === "createList" && 1}
        onClick={() =>
          setBar({ activeCategory: "createList", activeList: null })
        }
      >
        <Nav.Create />
        <Nav.Subtitle>Create list</Nav.Subtitle>
      </Nav.Category>
      <Nav.Category
        selected={activeCategory === "favorites" && 1}
        onClick={() =>
          setBar({ activeCategory: "favorites", activeList: null })
        }
      >
        <Nav.Heart />
        <Nav.Subtitle>Favorites</Nav.Subtitle>
      </Nav.Category>
      <Nav.Devider>
        <Nav.Subtitle>Your lists</Nav.Subtitle>
      </Nav.Devider>
      {!loading && (
        <Nav.Container>
          {lists.userlists.map((item) => (
            <Nav.Category
              key={item.id}
              selected={activeList === item.id && 1}
              onClick={() =>
                setBar({ activeCategory: "userlists", activeList: item.id })
              }
            >
              <Nav.Dot />
              <Nav.Subtitle>{item.name}</Nav.Subtitle>
            </Nav.Category>
          ))}
        </Nav.Container>
      )}
      <Nav.Footer>
        <Nav.Link to="/">
          <Nav.Chain />
          <Nav.Value>Home</Nav.Value>
        </Nav.Link>
        <Nav.Link to="/account">
          <Nav.Chain />
          <Nav.Value>Account</Nav.Value>
        </Nav.Link>
      </Nav.Footer>
    </Nav>
  );
}
