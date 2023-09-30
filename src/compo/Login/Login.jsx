import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Header from '../Navbar/Header';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLoginButton = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
    }
    return (
        <div>
            <Header></Header>
            <Container className='w-50 p-5 border mt-5 bg-danger text-light rounded'>
                <Form onSubmit={handleLoginButton}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Text className="text-muted">

                    </Form.Text> <br />
                    <Button className='
                    text-center' variant="light" type='submit'>Login</Button> <br />
                    <span className='mt-5'>New In This Web ? Please <Link to='/register'><Button variant="outline-light">Register</Button></Link></span>
                </Form>
            </Container>
        </div>
    );
};

export default Login;