import React, { useState, useEffect } from "react";
import { Container, Card, Button, Badge, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Guide({ selectedChar, handleUpdateSelectedChar }) {
  const [bosses, setBosses] = useState([]);
  const [currentBoss, setCurrentBoss] = useState({});
  const [smallHintToggle, setSmallHintToggle] = useState(false);
  const [mediumHintToggle, setMediumHintToggle] = useState(false);
  const [bigHintToggle, setBigHintToggle] = useState(false);

  /* 
  if user reloads page, selectedChar state will reset 
  and guide component will not render properly, so this
  will redirect to user-home component
  */
  const history = useHistory();
  if (!Boolean(selectedChar.name)) {
    history.push("/user-home");
  }

  useEffect(() => {
    fetch("/api/bosses")
      .then((r) => r.json())
      .then((bosses) => {
        setCurrentBoss(bosses.find((boss) => boss.id === selectedChar.boss_id));
        setBosses(bosses);
      });
  }, []);

  // console.log("selectedChar:", selectedChar);
  // console.log("current boss:", currentBoss);

  function handleBeatBoss() {
    setSmallHintToggle(false);
    setMediumHintToggle(false);
    setBigHintToggle(false);
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

  function handleNewGame() {
    // also increase NG attribute by 1
    setSmallHintToggle(false);
    setMediumHintToggle(false);
    setBigHintToggle(false);
    fetch(`/api/characters/${selectedChar.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ boss_id: 1 }),
      body: JSON.stringify({ boss_id: 26 }),
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
        <Button onClick={() => setSmallHintToggle(true)} variant="light">
          {smallHintToggle ? currentBoss.hints[0].small : "Small Hint"}
        </Button>
      </Row>
      <Row>
        <Button onClick={() => setMediumHintToggle(true)} variant="secondary">
          {mediumHintToggle ? currentBoss.hints[0].medium : "Medium Hint"}
        </Button>
      </Row>
      <Row>
        <Button onClick={() => setBigHintToggle(true)} variant="dark">
          {bigHintToggle ? currentBoss.hints[0].big : "Big Hint"}
        </Button>
      </Row>
      <Row>
        {/* {currentBoss.id < 24 ? (
          <Button onClick={handleBeatBoss} variant="outline-danger">
            Beat the Boss!
          </Button>
        ) : (
          <Button onClick={handleNewGame} variant="success">
            START NEW GAME+
          </Button>
        )} */}
        {currentBoss.id < 49 ? (
          <Button onClick={handleBeatBoss} variant="outline-danger">
            Beat the Boss!
          </Button>
        ) : (
          <Button onClick={handleNewGame} variant="success">
            START NEW GAME+
          </Button>
        )}
      </Row>
    </Container>
  );
}

export default Guide;
