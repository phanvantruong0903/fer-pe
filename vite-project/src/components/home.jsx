import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import DetailStudent from './DetailStudens';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://667ae03dbd627f0dcc90e613.mockapi.io/students')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Student List</h1>
            <div className="row">
                {data.map((student) => (
                    <div className="col-md-4" key={student.id}>
                        <Card style={{ marginBottom: '20px' }}>
                            <Card.Img variant="top" src={student.image} width={'100px'} height={'250px'} />
                            <Card.Body>
                                <Card.Title>{student.name}</Card.Title>
                                <Card.Text>
                                    <strong>ID:</strong> {student.id} <br />
                                    <strong>Date of Birth:</strong> {student.dateofbirth} <br />
                                    <strong>Gender:</strong> {student.gender ? 'Male' : 'Female'} <br />
                                    <strong>Class:</strong> {student.class} <br />
                                </Card.Text>
                                <DetailStudent
                                    id={student.id}
                                    name={student.name}
                                    dateofbirth={student.dateofbirth}
                                    gender={student.gender}
                                    Class={student.class}
                                    image={student.image}
                                    feedback={student.feedback}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
