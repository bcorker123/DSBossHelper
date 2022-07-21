import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function LoginForm({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const [errors, setErrors] = useState(null);

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
        <Button variant="outline-danger" type="submit">
          Login
        </Button>
      </Form>
      {errors ? <div>!!{errors.error}!!</div> : null}
    </div>
  );
}

export default LoginForm;
