import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

function NGPlus() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="sm"
        style={{ color: "white" }}
        className="buttons"
        variant="warning"
        onClick={() => setOpen(!open)}
      >
        What is NG+?
      </Button>
      <Collapse in={open}>
        <div className="ng-help">
          NG+ will reset all killed Bosses and NPCs, and increase difficulty,
          because enemies will have more attack power and health points, and
          yield more souls. Most items and equipment will carry over, along with
          character Soul Level, Humanity, and Magic already obtained.
        </div>
      </Collapse>
    </>
  );
}

export default NGPlus;
