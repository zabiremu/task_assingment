import React, { useState } from 'react'
import { Button, Col, Form, FormText, Row } from 'react-bootstrap';
import Layouts from '../../layouts/Layouts';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const CreateTask = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState({
        task_name: '',
        task_desc: '',
        status: '',
    });
    const [error, setError] = useState('');  // State to store error messages (optional)

    const handleForm = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents default form behavior

        // Optional: Reset any previous error
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create-task', task);

            if (response.status === 200) {
               console.log(response.data);
               navigate('/task');
            } else {
                console.log(response)
                setError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred while trying to log in. Please try again later.');
        }
    };
    if (localStorage.getItem('token') || localStorage.getItem('email')) {
        return (
            <>
                <Row>
                    <Layouts />
                    <Col sm={8} md={8} lg={9} >
                        <h1>Task</h1>
                        <hr />
                        <FormText>{error}</FormText>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Task</Form.Label>
                                <Form.Control type="text" placeholder="Enter Task" name='task_name' onChange={handleForm}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='task_desc' onChange={handleForm}></textarea>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Select type="checkbox" label="Status" onChange={handleForm} name='status'>
                                    <option value="pending">Pending</option>
                                    <option value="working">Working</option>
                                    <option value="completed">Completed</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    } else {
        navigate('/');
    }
}
export default CreateTask;