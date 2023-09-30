import React from 'react';
import Header from '../Navbar/Header';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
    }
    return (
        <div>
            <Header></Header>
            <Container className='w-50 p-5 border mt-5 bg-danger text-light rounded'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Text className="text-muted">

                    </Form.Text> <br />
                    <Button className='
                    text-center' variant="light" type='submit'>Register</Button>
                </Form>
                <span className='mt-5'>Already Have Account ? Please <Link to='/login'><Button variant="outline-light">Login</Button></Link></span>

            </Container>
        </div>
    );
};

export default Register;