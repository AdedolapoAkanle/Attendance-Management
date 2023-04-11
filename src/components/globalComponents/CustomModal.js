import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../../Styles/Components/Modal.css";

const CustomModal = ({ header, body, showModal, onHide, onSubmit }) => {
  return (
    <>
      <Modal show={showModal} onHide={onHide}>
        <Modal.Title style={{ paddingLeft: "2rem", paddingTop: "1rem" }}>
          {header}
        </Modal.Title>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer style={{ marginRight: "1rem" }}>
          <Button className="close-modal" onClick={onHide}>
            Close
          </Button>
          <Button type="submit" className="save-modal" onClick={onSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
