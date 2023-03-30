import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa";
import "../../Styles/Components/Modal.css";

const FormModal = ({ header, add = true, text }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="modal__text" onClick={handleShow}>
        {/* {add == true ? <FaPlus className="add" /> : null} */}
        {text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Title style={{ paddingLeft: "2rem", paddingTop: "1rem" }}>
          {header}
        </Modal.Title>
        <Modal.Body style={{}}>
          <Form className="modal__form">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="modal__label">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                className="modal__form-field"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="modal__label">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                className="modal__form-field"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="modal__label">Gender</Form.Label>
              <Form.Select
                aria-label=""
                className="modal__form-field modal__drop"
              >
                <option hidden>Select Gender</option>
                <option value="mr">Male</option>
                <option value="mrs">Female</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label className="modal__label">Dob</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Dob"
                className="modal__form-field modal__drop"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ marginRight: "1rem" }}>
          <Button variant="" className="close-modal" onClick={handleClose}>
            Close
          </Button>
          <Button variant="" className="save-modal" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// render(<Example />);

export default FormModal;
