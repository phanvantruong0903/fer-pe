import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { toast } from 'react-toastify';

function UpdateStudents(props) {
    const { id, fetchData } = props;
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [dateofbirth, setDatofbirth] = useState('');
    const [gender, setGender] = useState('');
    const [Class, setClass] = useState('');
    const [image, setImage] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateStudents = (name, dateofbirth, gender, Class, image, feedback) => {
        feedback = feedback+ 'good';
        return axios.put(`https://667ae03dbd627f0dcc90e613.mockapi.io/students/${id}`, {
            name: name,
            dateofbirth: dateofbirth,
            gender: gender,
            class: Class,
            image: image,
            feedback: feedback
        });
    }

    const closeAdd = async () => {
        let res = await updateStudents(name, dateofbirth, gender, Class, image, feedback);
        if (res) {
            fetchData();
            handleClose();
        }
    }

    return (
        <>
            <Button variant="warning" className='mx-1' onClick={handleShow}>
                Update
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div><label>Name: </label> <br></br>
                        <input type='text' placeholder='Name' style={{ marginBottom: "20px" }} value={name} required="" onChange={(event) => {
                            setName(event.target.value)
                        }}></input> <br></br></div>
                    <label>Date of birth: </label> <br></br>
                    <input type='text' placeholder='Date of birth' style={{ marginBottom: "20px" }} value={dateofbirth} onChange={(event) => {
                        setDatofbirth(event.target.value)
                    }}></input><br></br>
                    <label>Gender: </label> <br></br>
                    <select onChange={(e) => { setGender(e.target.value === 'true') }}>
                        <option value='true'>Male</option>
                        <option value='false'>Female</option>
                    </select><br></br>
                    <label>Class: </label> <br></br>
                    <input type='text' placeholder='Class' style={{ marginBottom: "20px" }} value={Class} onChange={(event) => {
                        setClass(event.target.value)
                    }}></input><br></br>
                    <label>Image: </label> <br></br>
                    <input type='text' placeholder='Image url' style={{ marginBottom: "20px" }} value={image} onChange={(event) => {
                        setImage(event.target.value)
                    }}></input><br></br>
                    <label>Feedback: </label><br></br>
                    <input type='text' placeholder='Feedback' style={{ marginBottom: "20px" }} value={feedback} onChange={(event) => {
                        setFeedback(event.target.value)
                    }}></input><br></br>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeAdd}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateStudents;
