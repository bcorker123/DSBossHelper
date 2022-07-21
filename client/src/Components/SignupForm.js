import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function SignupForm({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });

  const history = useHistory();

  const [errors, setErrors] = useState(null);

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
    <div>
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
        <Button variant="outline-danger" type="submit">
          Sign Up
        </Button>
      </Form>
      {errors ? <div>!!{errors.error}!!</div> : null}
    </div>
  );
}

export default SignupForm;
