import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { childAction, parentAction } from "../../../../redux/actions/type";
import "../../../../Styles/Components/Modal.css";
import { fetchParentByPhone } from "../../operations/parent";

const CreateChildForm = ({
  state,
  updateState,
  stateParent,
  updateParentState,
}) => {
  const { arr } = stateParent;
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const phone = await fetchParentByPhone();
    updateState({ ...state, phone });
    console.log(phone);
  };

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

      <Form.Group>
        <Form.Label className="modal__label">Parent's number</Form.Label>
        <Form.Select
          aria-label=""
          type="tel"
          className="modal__form-field modal__drop"
          onChange={(e) => handleOnchange(e, "parentId")}
        >
          <option hidden>Search...</option>
          {arr.map((el) => (
            <option key={el.phone} value={el.phone}>
              {el.phone}({el.lastName})
            </option>
          ))}
        </Form.Select>
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

const mapStateToProps = ({ child, parent }) => ({
  state: child.childState,
  stateParent: parent.parentState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(childAction(params)),
  updateParentState: (params) => dispatch(parentAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateChildForm);
