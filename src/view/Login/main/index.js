import React from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { LoginAction } from "../../../redux/actions/type";
import logo from "../../../img/logo.png";
import { useNavigate } from "react-router-dom";
import "../../../Styles/view/login.css";

const Login = (obj) => {
  const { state, updateState } = obj;
  const navigate = useNavigate();

  const { email, password, errorMsg } = state;
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((email === "" && password === "") || email === "" || password === "") {
      updateState({ ...state, errorMsg: "*All fields are required!" });
      return;
    }

    if (email === "dolapo@gmail.com" && password === "dolapo") {
      navigate("/dashboard");
    } else {
      updateState({ ...state, errorMsg: "*Incorrect email or password!" });
    }
  };

  return (
    <main className="login">
      <div className="login__container">
        <div className="login__form">
          <img src={logo} alt="" className="login__logo" />
          <Form onSubmit={(e) => handleSubmit(e)}>
            {errorMsg ? <div className="msg">{errorMsg}</div> : ""}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-label">Email address *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-field"
                value={email}
                onChange={(e) =>
                  updateState({ ...state, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                className="form-field"
                value={password}
                onChange={(e) =>
                  updateState({ ...state, password: e.target.value })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
            {/* </Link> */}
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
