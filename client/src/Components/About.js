import React from "react";
import { Container, Nav, ListGroup } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { lightSpeedIn } from "react-animations";

function About() {
  const lightSpeedInAnimation = keyframes`${lightSpeedIn}`;
  const LightSpeedInDiv1 = styled.div`
    animation: 0.5s ${lightSpeedInAnimation};
  `;
  const LightSpeedInDiv2 = styled.div`
    animation: 0.7s ${lightSpeedInAnimation};
  `;
  const LightSpeedInDiv3 = styled.div`
    animation: 0.9s ${lightSpeedInAnimation};
  `;

  return (
    <Container>
      <Nav>
        <ListGroup>
          <LightSpeedInDiv1>
            <ListGroup.Item>
              Hi! My name is Brian Corker, and I am a student of Software
              Engineering at Flatiron School! This is my final project, a "Boss
              Helper" for the video game Dark Souls 1 that uses a JavaScript
              React front-end with a Ruby on Rails back-end and deployed onto
              Heroku. Below are my links! Thanks for using my app!
            </ListGroup.Item>
          </LightSpeedInDiv1>
          <LightSpeedInDiv2>
            <ListGroup.Item>
              <Nav.Link href="https://www.linkedin.com/in/brian-p-corker/">
                My LinkedIn
              </Nav.Link>
            </ListGroup.Item>
          </LightSpeedInDiv2>
          <LightSpeedInDiv3>
            <ListGroup.Item>
              <Nav.Link href="https://github.com/bcorker123">
                My GitHub
              </Nav.Link>
            </ListGroup.Item>
          </LightSpeedInDiv3>
        </ListGroup>
      </Nav>
    </Container>
  );
}

export default About;
