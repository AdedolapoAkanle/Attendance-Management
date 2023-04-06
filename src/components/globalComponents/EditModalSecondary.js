import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { Api } from "../../api/parentApi";
import { parentAction } from "../../redux/actions/type";
import "../../Styles/Components/Modal.css";

const EditModalSecondary = ({
  header,
  text,
  style,
  state,
  updateState,
  action,
}) => {
  const { title, firstName, lastName, phone, id } = state;

  useEffect(() => {
    getUserById();
  });

  const getUserById = async () => {
    const data = {
      id: id,
    };

    const api = new Api();
    const res = await api.edit("parent", data);
    // console.log(res);
    updateState({
      ...state,
      title: res.title,
      firstName: res.firstName,
      lastName: res.lastName,
      phone: res.phone,
    });
  };

  const handleSubmit = async () => {
    const data = {
      title,
      firstName,
      lastName,
      phone,
    };

    // console.log(data);
    const api = new Api();
    const res = await api.post("parent", data);

    // alert(res.message);
  };

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
                value={title}
                className="modal__form-field modal__drop"
                onChange={(e) =>
                  updateState({ ...state, title: e.target.value })
                }
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
                onChange={(e) =>
                  updateState({ ...state, lastName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="modal__label">First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
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
                value={phone}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditModalSecondary);
