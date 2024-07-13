import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

const DetailPage = () => {

    const [student, setStudent] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    const getStudent = async () => {
        try {
            const res = await axios.get(`https://667ae03dbd627f0dcc90e613.mockapi.io/students/${id}`)
            if (res && res.data) {
                setStudent(res.data)
            }
        } catch (error) {
            console.error(error.error)
        }
    }

    useEffect(() => {
        getStudent()
    }, [])

    return (
        <div>
            <Button variant="outline-primary" style={{ margin: "10px" }} onClick={() => navigate(-1)}>Back</Button>
            <Container>
                <div className="detail-container">
                    <h2>STUDENT INFORMATION</h2>
                    <div className="content-container">
                        <div className="img-container">
                            <img src={student.image} alt="Student" />
                        </div>
                        <div className="detail-content">
                            <label data-label="Name:">{student.name}</label>
                            <label data-label="Date of birth:">{student.dateofbirth}</label>
                            <label data-label="Gender:">{`${student.gender}` === "true" ? "male" : "female"}</label>
                            <label data-label="Class:">{student.class}</label>
                            <label data-label="Feedback:">{student.feedback}</label>
                        </div>
                    </div>
                </div>

            </Container >
        </div>
    )
}

export default DetailPage
