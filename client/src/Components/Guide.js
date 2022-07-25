import React, { useState, useEffect } from "react";
import { Container, Card, Button, Badge, Row } from "react-bootstrap";

function Guide({ selectedChar, handleUpdateSelectedChar }) {
  const [bosses, setBosses] = useState([]);
  const [currentBoss, setCurrentBoss] = useState({});

  useEffect(() => {
    fetch("/api/bosses")
      .then((r) => r.json())
      .then((bosses) => {
        setCurrentBoss(bosses.find((boss) => boss.id === selectedChar.boss_id));
        setBosses(bosses);
      });
  }, []);

  console.log(selectedChar);
  console.log("current boss:", currentBoss);

  function handleBeatBoss() {
    const boss_id = currentBoss.id + 1;
    fetch(`/api/characters/${selectedChar.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ boss_id: boss_id }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((updatedChar) => {
          setCurrentBoss(
            bosses.find((boss) => boss.id === updatedChar.boss_id)
          );
          handleUpdateSelectedChar(updatedChar);
        });
      } else {
        r.json().then((error) => console.log("error:", error));
      }
    });
  }

  return (
    <Container>
      <h3 style={{ textAlign: "center" }}>
        <Badge size="sm" bg="secondary">
          {selectedChar.name}
        </Badge>
      </h3>
      <Card>
        <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
          {currentBoss.name}
        </Card.Header>
        <Card.Text style={{ color: "red", textAlign: "center" }}>
          {currentBoss.health} HP
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          Location: {currentBoss.location}
        </Card.Text>
        <Card.Img
          style={{ margin: "auto", maxWidth: "900px" }}
          src={currentBoss.image_url}
        />
      </Card>
      <Row>
        <Button variant="light">hint</Button>
      </Row>
      <Row>
        <Button variant="secondary">hint</Button>
      </Row>
      <Row>
        <Button variant="dark">hint</Button>
      </Row>
      <Row>
        {currentBoss.id < 192 ? (
          <Button onClick={handleBeatBoss} variant="outline-danger">
            Beat the Boss!
          </Button>
        ) : (
          <Button variant="success">START NEW GAME+</Button>
        )}
      </Row>
    </Container>
  );
}

export default Guide;
