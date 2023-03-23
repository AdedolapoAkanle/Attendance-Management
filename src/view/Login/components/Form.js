import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../../Styles/view/login.css";

const LoginForm = ({ state, useState }) => {
  return (
    <div className="login__container">
      <div className="login__form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-label">Email address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="form-field"
            />
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="form-field"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
        <p>Forgot Password?</p>
        <h5>
          Don't have an account? <a href="#">Register here</a>
        </h5>
      </div>

      <div className="login__text--container">
        <div className="login__text">
          <h2>Children church attendance</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
