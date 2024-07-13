import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function UpdateStudents() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: '',
        dateofbirth: '',
        gender: '',
        class: '',
        image: '',
        feedback: ''
    });

    const getStudent = async () => {
        try {
            const res = await axios.get(`https://667ae03dbd627f0dcc90e613.mockapi.io/students/${id}`);
            if (res && res.data) {
                setStudent(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getStudent();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent(prevStudent => ({
            ...prevStudent,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            await axios.put(`https://667ae03dbd627f0dcc90e613.mockapi.io/students/${id}`, student);
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Button variant="outline-primary" style={{ margin: "10px" }} onClick={() => navigate(-1)}>Back</Button>
            <Container>
                <div className="detail-container">
                    <h2>UPDATE STUDENT INFORMATION</h2>
                    <div className="content-container">
                        <div className="img-container">
                            <img src={student.image} alt="Student" />
                        </div>
                        <div className="detail-content">
                            <label data-label="Name:">
                                <input
                                    type='text'
                                    name='name'
                                    value={student.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label data-label="Date of birth:">
                                <input
                                    type='text'
                                    name='dateofbirth'
                                    value={student.dateofbirth}
                                    onChange={handleChange}
                                />
                            </label>
                            <label data-label="Gender:">
                                <select
                                    name='gender'
                                    value={student.gender ? "true" : "false"}
                                    onChange={handleChange}
                                >
                                    <option value="true">Male</option>
                                    <option value="false">Female</option>
                                </select>
                            </label>
                            <label data-label="Class:">
                                <input
                                    type='text'
                                    name='class'
                                    value={student.class}
                                    onChange={handleChange}
                                />
                            </label>
                            <label data-label="Feedback:">
                                <input
                                    type='text'
                                    name='feedback'
                                    value={student.feedback}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <Button onClick={handleSubmit}>Save Changes</Button>
                </div>
            </Container>
        </div>
    );
}

export default UpdateStudents;
