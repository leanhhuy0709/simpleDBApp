import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function UserListModal({customer}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Customer Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="username" disabled>
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                value={customer.username}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="fname"
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lname"
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fname">
              <Form.Label>BDate</Form.Label>
              <Form.Control
                name="fname"
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fname">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="fname"
                type="email"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserListModal;