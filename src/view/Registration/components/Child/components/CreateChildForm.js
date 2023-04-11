import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { childAction } from "../../../../../redux/actions/type";
import "../../../../../Styles/Components/Modal.css";

const CreateChildForm = ({ state, updateState }) => {
  const handleOnchange = (e, field) => {
    const value = e.target.value;
    updateState({ ...state, [field]: value });
  };

  return (
    <Form className="modal__form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="modal__label">Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          className="modal__form-field"
          onChange={(e) => handleOnchange(e, "lastName")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="modal__label">First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          className="modal__form-field"
          onChange={(e) => handleOnchange(e, "firstName")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="modal__label">Parent's number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter number"
          className="modal__form-field"
          onChange={(e) => handleOnchange(e, "parentId")}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className="modal__label">Gender</Form.Label>
        <Form.Select
          aria-label=""
          className="modal__form-field modal__drop"
          onChange={(e) => handleOnchange(e, "gender")}
        >
          <option hidden>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label className="modal__label">Dob</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter Dob"
          className="modal__form-field modal__drop"
          onChange={(e) => handleOnchange(e, "dob")}
        />
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = ({ child }) => ({
  state: child.childState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(childAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChildForm);
