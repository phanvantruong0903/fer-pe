// createStudent.js
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateStudent({ fetchData }) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [dateofbirth, setDatofbirth] = useState('');
    const [gender, setGender] = useState(true);
    const [Class, setClass] = useState('');
    const [image, setImage] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createStudent = (name, dateofbirth, gender, Class, image, feedback) => {
        return axios.post("https://667ae03dbd627f0dcc90e613.mockapi.io/students", {
            name: name,
            dateofbirth: dateofbirth,
            gender: gender,
            class: Class,
            image: image,
            feedback: feedback
        });
    }

    const closeAdd = async () => {
        let res = await createStudent(name, dateofbirth, gender, Class, image, feedback);
        if (res) {
            toast.success("Create successfully");
            fetchData(); // Gọi hàm fetchData để tải lại dữ liệu
            handleClose();
        }
    }

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Create new Student
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label>Name: </label><br />
                        <input
                            type='text'
                            placeholder='Name'
                            style={{ marginBottom: "20px" }}
                            value={name}
                            required=""
                            onChange={(event) => setName(event.target.value)}
                        /><br />
                    </div>
                    <label>Date of birth: </label><br />
                    <input
                        type='text'
                        placeholder='Date of birth'
                        style={{ marginBottom: "20px" }}
                        value={dateofbirth}
                        onChange={(event) => setDatofbirth(event.target.value)}
                    /><br />
                    <label>Gender: </label><br />
                    <select onChange={(e) => setGender(e.target.value === 'true')}>
                        <option value='true'>Male</option>
                        <option value='false'>Female</option>
                    </select><br />
                    <label>Class: </label><br />
                    <input
                        type='text'
                        placeholder='Class'
                        style={{ marginBottom: "20px" }}
                        value={Class}
                        onChange={(event) => setClass(event.target.value)}
                    /><br />
                    <label>Image: </label><br />
                    <input
                        type='text'
                        placeholder='Image'
                        style={{ marginBottom: "20px" }}
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    /><br />
                    <label>Feedback: </label><br />
                    <input
                        type='text'
                        placeholder='Feedback'
                        style={{ marginBottom: "20px" }}
                        value={feedback}
                        onChange={(event) => setFeedback(event.target.value)}
                    /><br />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeAdd}>
                        Create
                    </Button>
                </Modal.Footer>
                <ToastContainer />
            </Modal>
        </>
    );
}

export default CreateStudent;
