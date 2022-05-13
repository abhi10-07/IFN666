import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalError = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Errors</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.message
          ? props.message
          : `Limit Reach . Please upgrade your plan or visit our
                documentation for more details at
                https://financialmodelingprep.com/developer/docs/pricing.`}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalError;
