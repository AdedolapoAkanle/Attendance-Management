import React from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoginAction } from "../../../redux/actions/type";
import logo from "../../../img/logo.png";
import "../../../Styles/view/login.css";

const Login = (obj) => {
  const { state, updateState } = obj;

  const { email, pass, errorMsg } = state;

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (email == "" || pass == "") {
    //   return false;
    // }
    // return false;
  };

  return (
    <main className="login">
      <div className="login__container">
        <div className="login__form">
          <img src={logo} alt="" className="login__logo" />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-label">Email address *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-field"
                onChange={(e) =>
                  updateState({ ...state, email: e.target.value })
                }
              />
            </Form.Group>
            {/* <div>{email}</div> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                className="form-field"
                onChange={(e) =>
                  updateState({ ...state, pass: e.target.value })
                }
              />
            </Form.Group>
            {/* <div>{pass}</div> */}

            <Link
              to={"dashboard"}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Button
                variant="primary"
                type="submit"
                className="submit-btn"
                onClick={handleSubmit()}
              >
                Submit
              </Button>
            </Link>
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
    </main>
  );
};

const mapStateToProps = ({ login }) => ({
  state: login.loginState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(LoginAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
