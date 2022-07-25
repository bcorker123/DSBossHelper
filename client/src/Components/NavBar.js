import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function NavBar({ user, handleLogout }) {
  return (
    <Container>
      <Navbar bg="light">
        <Nav>
          {user.id ? (
            <div>
              <div>
                <Nav.Link href="/user-home">Home</Nav.Link>
              </div>
              <div>
                <Nav.Link href="/create-character">Create Character</Nav.Link>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <Nav.Link href="/">Home</Nav.Link>
              </div>
              <div>
                <Nav.Link href="/login">Login</Nav.Link>
              </div>
              <div>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </div>
            </div>
          )}
          <div>
            <Nav.Link href="/about">About</Nav.Link>
          </div>
        </Nav>
        <Navbar.Brand>
          {user.id ? (
            <Button onClick={handleLogout} size="sm" variant="outline-danger">
              Logout
            </Button>
          ) : null}
          {user.id ? ` ${user.username}` : null}
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default NavBar;
