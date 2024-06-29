// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import DetailStudent from './DetailStudens';
import CreateStudent from './createStudent';
import UpdateStudents from './updateStudent';
import Delete from './deleteStudent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get('https://667ae03dbd627f0dcc90e613.mockapi.io/students')
            .then((response) => {
                setData(response.data);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'space-between', margin: '10px 20px' }}>
                <h1>Student List</h1>
                <CreateStudent fetchData={fetchData} />
            </div>
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
                            <td>{students.id}</td>
                            <td>{students.name}</td>
                            <td>{students.dateofbirth}</td>
                            <td>{students.gender ? 'Male' : 'Female'}</td>
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
                            <td>
                                <UpdateStudents
                                    id={students.id}
                                    name={students.name}
                                    dateofbirth={students.dateofbirth}
                                    gender={students.gender}
                                    Class={students.class}
                                    image={students.image}
                                    feedback={students.feedback}
                                    fetchData={fetchData}
                                />
                            </td>
                            <td>
                                <Delete
                                    id={students.id}
                                    fetchData={fetchData}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Dashboard;
