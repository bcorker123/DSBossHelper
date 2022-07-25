import React, { useState, useEffect } from "react";
import { Container, Card, Badge, Col, Row, Button } from "react-bootstrap";

function UserHome({ user, selectChar }) {
  console.log("in UserHome, user:", user);

  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    fetch("/api/bosses")
      .then((r) => r.json())
      .then((bosses) => {
        setBosses(bosses);
      });
  }, []);

  return (
    <Container fluid>
      {bosses[0] ? <div>{bosses[0].id}</div> : null}
      <Row>
        {user.characters.length > 0 ? (
          user.characters.map((character) => {
            return (
              <Col key={character.id}>
                <Card style={{ width: "150px" }} key={character.id}>
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                  </Card.Body>
                  <Card.Img
                    className="character-img"
                    src={character.build_image}
                    alt={character.name}
                  />
                  <Button
                    onClick={() => selectChar(character.id)}
                    variant="outline-danger"
                  >
                    Resume Playthrough
                  </Button>
                </Card>
              </Col>
            );
          })
        ) : (
          <h1>
            <Badge bg="danger">
              No characters yet! Click "Create Character" to get started.
            </Badge>
          </h1>
        )}
      </Row>
    </Container>
  );
}

export default UserHome;
