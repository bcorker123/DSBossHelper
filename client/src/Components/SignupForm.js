import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
// import { fadeIn } from "react-animations";

function SignupForm({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
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
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newUser) => {
          handleLogin(newUser);
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
      <Form.Group>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleInput}
        />
      </Form.Group>
      {errors ? <Alert variant="danger">{errors.error}</Alert> : null}
      <Button className="buttons" variant="danger" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default SignupForm;
