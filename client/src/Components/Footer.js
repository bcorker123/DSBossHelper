import React from "react";
import { Container, Card, Nav } from "react-bootstrap";

function Footer() {
  return (
    <Container id="footer-container">
      <Card id="footer-card">
        <Nav.Link id="footer-link" href="/about">
          DS Boss Helper ~ About the Dev
        </Nav.Link>
      </Card>
    </Container>
  );
}

export default Footer;
