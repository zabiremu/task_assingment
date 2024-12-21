import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Form, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');  // State to store error messages (optional)

    const handleForm = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents default form behavior

        // Optional: Reset any previous error
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', user);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', response.data.user.email)
                navigate('/dashboard');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred while trying to log in. Please try again later.');
        }
    };
    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">
            <Form onSubmit={handleSubmit}>
                <MDBRow>
                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                    </MDBCol>
                    <MDBCol col='4' md='6' onSubmit={handleSubmit}>
                        <div className="divider d-flex align-items-center my-4">
                            Register
                        </div>
                        <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg" name='name' onChange={handleForm} />
                        <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" name='email' onChange={handleForm} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" name='password' onChange={handleForm} />
                        <div className="d-flex justify-content-between mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        </div>
                        {/* Display error message if any */}
                        {error && <div className="text-danger mb-3">{error}</div>}
                        <Button type='submit' className='d-block'>
                            Submit
                        </Button>
                        <p className='d-inline-block'>have an account?</p>
                        <Button style={{ marginLeft: "12px" }}>
                            <NavLink
                                to="/"
                                style={({ isActive }) => ({
                                    color: isActive
                                        ? ""
                                        : "white",
                                })}
                            >
                                Login
                            </NavLink>
                        </Button>
                    </MDBCol>
                </MDBRow>
            </Form>
        </MDBContainer>
    );
}

export default Register;