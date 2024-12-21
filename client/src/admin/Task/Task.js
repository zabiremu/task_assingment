import React, { useEffect, useState } from 'react'
import {  Col, NavLink, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Layouts from '../../layouts/Layouts';
import axios from 'axios';
const Task = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/task');
            const data = response.data.data;
            const task = data;
            setTask(task);
        }
        fetchData();
    }, []);

    const handleDestroy = async (id) => {
        const response = await axios.get(`http://127.0.0.1:8000/api/destroy/` + id);    
        if (response.status === 200) {
            console.log(response.data); 
            setTask(task.filter((task) => task.id !== id));
        } else {
            console.log(response)
        }
    }
    if (localStorage.getItem('token') || localStorage.getItem('email')) {
        return (
            <>
                <Row>
                    <Layouts />
                    <Col sm={8} md={8} lg={9} >
                        <h1>Task</h1>
                        <NavLink className="btn bg-primary w-25 float-end mb-3" href="create-task">Add Task</NavLink>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Task Name</th>
                                    <th>Task Desc</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {task && task.map((task, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{task.task_name}</td>
                                                <td>{task.task_desc}</td>
                                                <td>{task.status}</td>
                                                <td>
                                                    <NavLink className="btn btn-primary" href={`edit-task/${task.id}`}>Edit</NavLink>
                                                    <NavLink className="btn btn-danger" onClick={()=>handleDestroy(task.id)}>Delete</NavLink>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    } else {
        navigate('/');
    }
}

export default Task