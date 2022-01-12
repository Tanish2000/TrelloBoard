import React from 'react'
import { Modal, Form, Button, Alert } from "react-bootstrap";


const AddCards = ({ modalShow , handleClose , handleChange , content , error , listNo , handleListNo, handleSubmit }) => {
    return (
        <div>
            <Modal
                size="sm"
                show={modalShow}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Add Card
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Title </Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="title"
                            value={content.title}
                            placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Description </Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="desc"
                            value={content.desc}
                            placeholder="Enter Description" />
                    </Form.Group>
                </Modal.Body>
                {
                    (error !== null && error.length > 0) &&
                    <Alert variant='danger'>
                        {error}
                    </Alert>
                }
                <Modal.Footer>
                    <div className="d-flex align-items-center justify-content-center">
                        <Form.Group >
                            {/* <Form.Label>Enter List number</Form.Label> */}
                            <Form.Control
                                type="text"
                                onChange={(e) => handleListNo(e)}
                                name="title"
                                value={listNo}
                                placeholder="Enter List number" />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Add
                        </Button>

                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddCards
