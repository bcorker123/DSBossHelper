import React from "react";
import { Row, Button } from "react-bootstrap";

function Hints({
  currentBoss,
  smallHintToggle,
  mediumHintToggle,
  bigHintToggle,
}) {
  return (
    <>
      <Row>
        <Button
          //onClick={() => setSmallHintToggle(true)}
          variant="light"
        >
          {smallHintToggle ? currentBoss.hints[0].small : "Small Hint"}
        </Button>
      </Row>
      <Row>
        <Button
          //onClick={() => setMediumHintToggle(true)}
          variant="secondary"
        >
          {mediumHintToggle ? currentBoss.hints[0].medium : "Medium Hint"}
        </Button>
      </Row>
      <Row>
        <Button
          //onClick={() => setBigHintToggle(true)}
          variant="dark"
        >
          {bigHintToggle ? currentBoss.hints[0].big : "Big Hint"}
        </Button>
      </Row>
    </>
  );
}

export default Hints;
