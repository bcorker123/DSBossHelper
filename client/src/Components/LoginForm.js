import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
// import { fadeIn } from "react-animations";

function LoginForm({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);

  const history = useHistory();

  // const fadeInAnimation = keyframes`${fadeIn}`;
  // const FadeInForm = styled.form`
  //   animation: 1s ${fadeInAnimation};
  // `;

  function handleInput({ target: { name, value } }) {
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          handleLogin(user);
          history.push("/user-home");
        });
      } else {
        r.json().then((errors) => setErrors(errors));
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          value={formData.username}
          onChange={handleInput}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
        />
      </Form.Group>
      {errors ? <Alert variant="danger">{errors.error}</Alert> : null}
      <Button variant="danger" className="buttons" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
