import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='text-center mt-5 mb-5 pt-4'>
            <h2><b>Contact Us</b></h2>
            <p>If you need any help, Then contact with us</p>
            <hr className='w-25 mx-auto mb-4' />
            <Form className='w-50 mx-auto shadow-lg p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='btn btn-primary' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;