import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { shake } from "react-animations";
// import Hints from "./Hints";

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

  const shakeAnimation = keyframes`${shake}`;
  const ShakeDiv = styled.div`
    animation: 0.5s ${shakeAnimation};
  `;

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
      <Card>
        <Card.Header style={{ textAlign: "center" }}>
          Current Character: {selectedChar.name.toUpperCase()}
        </Card.Header>
      </Card>
      <Card>
        <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
          <ShakeDiv>{currentBoss.name}</ShakeDiv>
        </Card.Header>
        <Card.Text style={{ color: "red", textAlign: "center" }}>
          <ShakeDiv>{currentBoss.health} HP</ShakeDiv>
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          <ShakeDiv>Location: {currentBoss.location}</ShakeDiv>
        </Card.Text>
        <Card.Img
          style={{ margin: "auto", maxWidth: "900px" }}
          src={currentBoss.image_url}
        />
      </Card>
      {/* <Hints
        currentBoss={currentBoss}
        smallHintToggle={smallHintToggle}
        mediumHintToggle={mediumHintToggle}
        bigHintToggle={bigHintToggle}
      /> */}
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
          <Button onClick={handleBeatBoss} className="buttons" variant="danger">
            Beat the Boss!
          </Button>
        ) : (
          <Button onClick={handleNewGame} className="buttons" variant="success">
            START NEW GAME+
          </Button>
        )} */}
        {currentBoss.id < 49 ? (
          <Button onClick={handleBeatBoss} className="buttons" variant="danger">
            Beat the Boss!
          </Button>
        ) : (
          <Button onClick={handleNewGame} className="buttons" variant="success">
            START NEW GAME+
          </Button>
        )}
      </Row>
    </Container>
  );
}

export default Guide;
