import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { parentAction } from "../../../../redux/actions/type";
import "../../../../Styles/Components/Modal.css";

const EditParentForm = ({ state, updateState }) => {
  // State
  const { title, firstName, lastName, phone } = state;

  // Handlers
  const handleOnchange = (e, field) => {
    const value = e.target.value;
    updateState({ ...state, [field]: value });
  };

  return (
    <Form className="modal__form">
      <Form.Group>
        <Form.Label className="modal__label">Title</Form.Label>
        <Form.Select
          aria-label=""
          value={title}
          className="modal__form-field modal__drop"
          onChange={(e) => handleOnchange(e, "title")}
        >
          <option hidden>Select title</option>
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="modal__label">Last Name</Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          placeholder="Enter last name"
          className="modal__form-field"
          onChange={(e) => handleOnchange(e, "lastName")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="modal__label">First Name</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          placeholder="Enter first name"
          className="modal__form-field"
          onChange={(e) => handleOnchange(e, "firstName")}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label className="modal__label">Phone Number</Form.Label>
        <Form.Control
          type="tel"
          value={phone}
          placeholder="Enter number"
          className="modal__form-field modal__drop"
          onChange={(e) => handleOnchange(e, "phone")}
        />
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = ({ parent }) => ({
  state: parent.parentState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(parentAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditParentForm);
