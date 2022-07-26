import React from "react";
import { Container, Badge, Nav, ListGroup } from "react-bootstrap";

function About() {
  return (
    <Container>
      <h1>
        <Badge bg="danger">About Me</Badge>
      </h1>
      <Nav>
        <ListGroup>
          <ListGroup.Item variant="dark">
            Hi! My name is Brian Corker, and I am a student of Software
            Engineering at Flatiron School! This is my final project, a "Boss
            Helper" for the video game Dark Souls 1 that uses a JavaScript React
            front-end with a Ruby on Rails back-end and deployed onto Heroku.
            Below are my links! Thanks for using my app!
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://www.linkedin.com/in/brian-p-corker/">
              My LinkedIn
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://github.com/bcorker123">My GitHub</Nav.Link>
          </ListGroup.Item>
        </ListGroup>
      </Nav>
    </Container>
  );
}

export default About;
