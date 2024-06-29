import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Delete({ id, fetchData }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteStudent = (id) => {
        return axios.delete(`https://667ae03dbd627f0dcc90e613.mockapi.io/students/${id}`);
    }

    const handleDelete = async () => {
        let res = await deleteStudent(id);
        if (res.status === 200) {  // Check if the response status is 200
            toast.success("Delete Successful");
            fetchData();
            handleClose();
        } else {
            toast.error("Delete Failed");
        }
    }


    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this student?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer/>

        </>
    );
}

export default Delete;
