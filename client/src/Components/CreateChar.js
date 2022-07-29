import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Alert,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function CreateChar({ user, handleNewChar }) {
  const [builds, setBuilds] = useState([]);
  const [newChar, setNewChar] = useState({
    name: "",
    build_id: "",
    boss_id: 26,
    //boss_id: 1,
    user_id: "",
    ng: 1,
  });
  const [errors, setErrors] = useState(null);

  const history = useHistory();

  useEffect(() => {
    fetch("/api/builds")
      .then((r) => r.json())
      .then((buildList) => setBuilds(buildList));
  }, []);

  function handleSelectClass(build_id) {
    setNewChar({ ...newChar, build_id: build_id, user_id: user.id });
  }

  function handleNameInput({ target: { value } }) {
    setNewChar({ ...newChar, name: value, user_id: user.id });
  }

  function handleCreateChar() {
    console.log("newChar obj:", newChar);
    fetch("/api/characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newChar),
    }).then((r) => {
      if (r.ok) {
        r.json().then((createdChar) => {
          console.log("response char obj:", createdChar);
          handleNewChar(createdChar);
          history.push(`/user-home`);
        });
      } else {
        r.json().then((errors) => {
          console.log("response error:", errors);
          setErrors(errors);
        });
      }
    });
  }

  return (
    <div id="create-character-outer-div">
      <Container fluid>
        <InputGroup>
          <InputGroup.Text>Name:</InputGroup.Text>
          <Form.Control
            onChange={handleNameInput}
            value={newChar.name}
          ></Form.Control>
        </InputGroup>
        <Row>
          {builds[0]
            ? builds.map((build) => {
                return (
                  <Col key={build.id}>
                    <Card style={{ width: "150px" }} key={build.id}>
                      <Card.Body>
                        <Card.Title className="build-names">
                          {build.name}
                        </Card.Title>
                      </Card.Body>
                      <Card.Img
                        className="build-img"
                        src={build.image_url}
                        alt={build.name}
                      />
                      <Button
                        onClick={() => handleSelectClass(build.id)}
                        className="buttons"
                        variant="danger"
                      >
                        Select Class
                      </Button>
                    </Card>
                  </Col>
                );
              })
            : null}
        </Row>
        {errors
          ? errors.error.map((error) => {
              return (
                <Alert key={error} variant="danger">
                  {error}
                </Alert>
              );
            })
          : null}
        <Button
          id="create-character-btn"
          size="lg"
          className="buttons"
          variant="success"
          onClick={handleCreateChar}
        >
          Create Character
        </Button>
      </Container>
    </div>
  );
}

export default CreateChar;
