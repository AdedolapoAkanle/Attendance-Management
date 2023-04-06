import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { parentAction } from "../../redux/actions/type";
import "../../Styles/Components/Modal.css";

const FormModalSecondary = ({
  header,
  text,
  style,
  state,
  updateState,
  action,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={style} variant="primary" className="" onClick={handleShow}>
        {text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Title style={{ paddingLeft: "2rem", paddingTop: "1rem" }}>
          {header}
        </Modal.Title>
        <Modal.Body style={{}}>
          <Form className="modal__form">
            <Form.Group>
              <Form.Label className="modal__label">Title</Form.Label>
              <Form.Select
                aria-label=""
                className="modal__form-field modal__drop"
                onChange={(e) =>
                  updateState({ ...state, title: e.target.value })
                }
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
                onChange={(e) =>
                  updateState({ ...state, lastName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="modal__label">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                className="modal__form-field"
                onChange={(e) =>
                  updateState({ ...state, firstName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label className="modal__label">Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter number"
                className="modal__form-field modal__drop"
                onChange={(e) =>
                  updateState({ ...state, phone: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ marginRight: "1rem" }}>
          <Button className="close-modal" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" className="save-modal" onClick={action}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// render(<Example />);

const mapStateToProps = ({ parent }) => ({
  state: parent.parentState,
});

const mapDispatchToProps = (dispatch) => ({
  updateState: (params) => dispatch(parentAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormModalSecondary);

// const handleSubmit = async (event) => {
//   const formData = {
//     title,
//     firstName,
//     lastName,
//     phone,
//   };
//   event.preventDefault();

//   const res = await fetch("192.168.1.176:5000/api/parent", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   });
//   // .then((response) => response.json())
//   // .then((data) => {
//   //   console.log(data);
//   // })
//   // .catch((error) => {
//   //   console.error(error);
//   // });
//   console.log(res);
// };
