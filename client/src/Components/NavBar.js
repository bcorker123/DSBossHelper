import React from "react";
import "../App.css";
import { Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";

function NavBar({ user, handleLogout }) {
  return (
    <Container fluid id="nav-bar">
      <Navbar>
        <Nav>
          <Row>
            {user.id ? (
              <>
                <Col id="nav-home-col">
                  <Nav.Link href="/user-home">Home</Nav.Link>
                </Col>
                <Col id="nav-createchar-col">
                  <Nav.Link href="/create-character">Create Character</Nav.Link>
                </Col>
              </>
            ) : (
              <>
                <Col>
                  <Nav.Link href="/">Home</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link href="/signup">Signup</Nav.Link>
                </Col>
              </>
            )}
            {/* <Col>
              <Nav.Link href="/about">About the Dev</Nav.Link>
            </Col> */}
          </Row>
        </Nav>
        <Navbar.Brand>
          {user.id ? (
            <Button
              onClick={handleLogout}
              size="sm"
              className="buttons"
              variant="danger"
            >
              Logout
            </Button>
          ) : null}
        </Navbar.Brand>
        <div className="nav-link">{user.id ? ` ${user.username}` : null}</div>
      </Navbar>
    </Container>
  );
}

export default NavBar;
