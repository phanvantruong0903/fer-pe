import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
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
        <div>
            <h1>Student List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((students) => (
                        <tr key={students.id}>
                            <td >{students.id}</td>
                            <td>{students.name}</td>
                            <td>{students.dateofbirth}</td>
                            <td>{students.gender?'Male':'Female'}</td>
                            <td>{students.class}</td>
                            <td><img style={{ height: "150px", width: "150px" }} src={students.image}></img></td>
                            <td>
                                <DetailStudent
                                    id={students.id}
                                    name={students.name}
                                    dateofbirth={students.dateofbirth}
                                    gender={students.gender}
                                    Class={students.class}
                                    image={students.image}
                                    feedback={students.feedback}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </div>
    );
}

export default Home;
