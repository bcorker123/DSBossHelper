import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { pulse, zoomInUp } from "react-animations";
import NGPlus from "./NGPlus";

function UserHome({ user, selectChar, handleDeleteChar }) {
  // console.log("in UserHome, user:", user);

  const pulseAnimation = keyframes`${pulse}`;
  const PulseDiv = styled.div`
    animation: 2s ${pulseAnimation};
  `;

  const zoomInUpAnimation = keyframes`${zoomInUp}`;
  const ZoomInUpDiv = styled.div`
    animation: 1s ${zoomInUpAnimation};
  `;

  return (
    <Container>
      <Row>
        {user.characters.length > 0 ? (
          user.characters.map((character) => {
            return (
              <Col key={character.id}>
                <ZoomInUpDiv>
                  <Card style={{ width: "150px" }} key={character.id}>
                    <Card.Body>
                      <Card.Title>{character.name}</Card.Title>
                      <Card.Title>
                        {character.ng > 1 ? `NG+${character.ng - 1}` : null}
                      </Card.Title>
                    </Card.Body>
                    <Card.Img
                      className="character-img"
                      src={character.build_image}
                      alt={character.name}
                    />
                    <Button
                      onClick={() => selectChar(character.id)}
                      className="buttons"
                      variant="success"
                    >
                      Resume Playthrough
                    </Button>
                  </Card>
                  <Button
                    onClick={() => handleDeleteChar(character.id)}
                    size="sm"
                    className="buttons"
                    variant="danger"
                  >
                    Delete Character
                  </Button>
                  <br></br>
                  {character.ng > 1 ? <NGPlus /> : null}
                </ZoomInUpDiv>
              </Col>
            );
          })
        ) : (
          <h1>
            <PulseDiv>
              <Card id="no-characters-card">
                No characters yet! Click "Create Character" to get started.
              </Card>
            </PulseDiv>
          </h1>
        )}
      </Row>
    </Container>
  );
}

export default UserHome;
