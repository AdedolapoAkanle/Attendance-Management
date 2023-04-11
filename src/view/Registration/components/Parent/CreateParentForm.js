import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { parentAction } from "../../../../redux/actions/type";
import "../../../../Styles/Components/Modal.css";

const CreateParentForm = ({ state, updateState }) => {
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
          className="modal__form-field modal__drop"
          onChange={(e) => handleOnchange(e, "title")}
        >
          <option hidden>Select title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
        </Form.Select>
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label className="modal__label">Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter number"
          className="modal__form-field modal__drop"
          onChange={(e) => updateState({ ...state, phone: e.target.value })}
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateParentForm);
