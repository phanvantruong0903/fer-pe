import { useState } from "react";
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function DetailStudent(props) {
    const {id, name, dateofbirth,gender,Class,image,feedback } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Details
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Details Student </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>ID: {id}</p>
                    <p>Name: {name}</p>
                    <p>Date of birth: {dateofbirth}</p>
                    <p>gender: {gender?'Male':'Female'}</p>
                    <p>class: {Class}</p>
                    <p>image: <img style={{ height: "150px", width: "150px" }} src={image}></img></p>
                    <p>Feedback: {feedback}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DetailStudent;

