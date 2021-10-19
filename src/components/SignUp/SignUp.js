import React from 'react';
import useAuth from './../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faLink } from '@fortawesome/free-solid-svg-icons';
import google from './../../assets/images/google.png'
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

const Signup = () => {
    const { getName, signInWithGoogle, getPhoto, signUp, error, getPassword, getEmail } = useAuth();

    return (
        <div className="text-center my-4">
            <h2>Please Signup</h2>
            <p className=" mt-2">Signup with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="w-25 mx-auto">
                <Form onSubmit={signUp}>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="name" visuallyHidden>
                                Your Name
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    required
                                    onBlur={getName}
                                    type="text"
                                    autoComplete="current-name"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Email Address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    required
                                    onBlur={getEmail}
                                    type="email"
                                    autoComplete="current-email"
                                    id="email"
                                    placeholder="Enter your email address"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="text-start">
                            <Form.Label htmlFor="password" visuallyHidden>
                                Your Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    required
                                    onBlur={getPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="email" visuallyHidden>
                                Your Profile Photo URL
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    required
                                    onBlur={getPhoto}
                                    type="text"
                                    autoComplete="current-text"
                                    id="photo"
                                    placeholder="Enter your Valid photo URL"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        Signup
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/login">
                    <span className='text-dark'>Already have an Account? </span> Please Login!
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p> Signup with</p>
            <div>
                <button
                    onClick={() => {
                        signInWithGoogle()
                            .then((result) => {
                                /*  const user = result.user;
                                 setUser(user);
                                 history.push(redirect); */
                            })
                            .catch((err) => {
                                /* const errorMessage = err.message;
                                setError(errorMessage); */
                            });
                    }}
                    className="btn"
                >
                    <img src={google} width="46px" alt="google-icon" />
                </button>
            </div>
        </div>
    );
};

export default Signup;