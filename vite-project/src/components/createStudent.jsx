import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isURL from'validator/lib/isURL'

function CreateStudent({ fetchData }) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [dateofbirth, setDatofbirth] = useState('');
    const [gender, setGender] = useState(true);
    const [Class, setClass] = useState('');
    const [image, setImage] = useState('');
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [errorURL, setErrorURL] = useState('');

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

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);

        if (value.trim().split(' ').length < 2) {
            setError('Name must contain at least two words');
        } else {
            setError('');
        }
    }

    const handleImageChange = (event) => {
        const value = event.target.value;
        setImage(value)

        if(!isURL(value)){
            setErrorURL('Valid URL');
        }
    }
    

    const handleDateChange = (event) => {
        const value = event.target.value;
        setDatofbirth(value);

        const enteredDate = new Date(value);
        const currentDate = new Date();

        if (enteredDate >= currentDate) {
            setErrorDate('Date of birth must be before the current date');
        } else {
            setErrorDate('');
        }
    };

    const closeAdd = async () => {
        let res = await createStudent(name, dateofbirth, gender, Class, image, feedback);
        if (res) {
            toast.success("Create successfully");
            fetchData();
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
                    <form>
                        <form>
                            <label>Name: </label><br />
                            <input
                                type='text'
                                placeholder='Name'
                                value={name}
                                required
                                onChange={handleNameChange}
                            />
                            {error && <p style={{ color: 'red', marginBottom: 0 }}>{error}</p>}
                        </form>
                        <form>
                            <label>Date of birth: </label><br />
                            <input
                                type='date'
                                placeholder='Date of birth'
                                required
                                value={dateofbirth}
                                onChange={handleDateChange}
                            />
                            {errorDate && <p style={{ color: 'red', marginBottom: 0 }}>{errorDate}</p>}
                        </form>
                        <label>Gender: </label><br />
                        <select style={{ marginBottom: "10px" }} onChange={(e) => setGender(e.target.value === 'true')}>
                            <option value='true'>Male</option>
                            <option value='false'>Female</option>
                        </select><br />
                        <label>Class: </label><br />
                        <input
                            type='text'
                            placeholder='Class'
                            style={{ marginBottom: "10px" }}
                            required=""
                            value={Class}
                            onChange={(event) => setClass(event.target.value)}
                        /><br />
                        <label>Image: </label><br />
                        <input
                            type='text'
                            placeholder='Image URL'
                            required
                            value={image}
                            onChange={handleImageChange}
                        />
                        {errorURL && <p style={{ color: 'red', marginBottom: 0 }}>{errorURL}</p>}
                        <br></br>
                        <label>Feedback: </label><br />
                        <input
                            type='text'
                            placeholder='Feedback'
                            style={{ marginBottom: "10px" }}
                            value={feedback}
                            onChange={(event) => setFeedback(event.target.value)}
                        /><br />
                    </form>
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
