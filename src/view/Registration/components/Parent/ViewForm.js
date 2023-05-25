import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { parentAction } from "../../../../redux/actions/type";
import "../../../../Styles/Components/Modal.css";

const ViewParent = ({ state, updateState }) => {
  // State
  const { arr, id, title, firstName, lastName, phone } = state;
  console.log(state);
  // Handlers

  return (
    <Form className="modal__form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="modal__label">Last Name</Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          placeholder="Enter last name"
          className="modal__form-field"
        />
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "idjos");
  return {
    state: state.parent.parentState,
    state: state.child.childState,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(parentAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewParent);
