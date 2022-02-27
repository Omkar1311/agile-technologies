import { Card, Button, Form, Col, Row, } from 'react-bootstrap'
import './ProfileUserPage.css'
import { useState } from 'react';
import CorrespondanceAddress from './CorrespondanceAddress';
import BillingAddress from './BillingAddress';

function ProfileUserPage() {
    const [inputData, setinputData] = useState({
        lastname: "",
        firstname: "",
        email: "",
        phoneno: "",
        add1: "",
        add2: "",
        city: "",
        state: "",
        zip: ""

    });

    const [formErrors, setformErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(inputData));
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        const regex1 = /^[a-zA-Z]/
        if (!values.lastname) {
            errors.lastname = "Last Name is Required!";
        } else if (!regex1.test(values.lastname)) {
            errors.lastname = "Last Name should be Alphabet!";
        }
        else if (values.lastname.length > 12) {
            errors.lastname = "Last Name should be less than 12 characters";
        }
        if (!values.firstname) {
            errors.firstname = "First name is Required!";
        } else if (!regex1.test(values.firstname)) {
            errors.firstname = "First name should be Alphabet!";
        } else if (values.firstname.length > 6) {
            errors.firstname = "First name should be less than 6 characters";
        }
        if (!values.email) {
            errors.email = "Email is Required!"
        } else if (!regex.test(values.email)) {
            errors.email = "Enter a valid email id!";
        }
        if (!values.phoneno) {
            errors.phoneno = "Phone no is Required!";
        } else if (values.phoneno.length > 11) {
            errors.phoneno = "Phone no cannot be less than 6 characters!";
        }


        return errors;
    }
    return (
        <div className='section'>
            <Form className='form' onSubmit={handleSubmit}>
                <Card className='container w-100 '>
                    <div className='d-flex justify-content-end '>
                        <h3 className='container '>User Personal Info </h3>
                        <Button className='btn btn-dark my-2' type="submit"   >Submit</Button>
                    </div><br></br>
                    <Row className='userInfo'>
                        <Col className='item'>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Last Name"
                                    name='lastname'
                                    value={inputData.lastname}
                                    onChange={(e) => {
                                        setinputData({ ...inputData, lastname: e.target.value })
                                    }}
                                />
                                <p className='text-danger'>{formErrors.lastname}</p>
                            </Form.Group>
                        </Col>
                        <Col className='item'>
                            <Form.Group controlId="exampleForm.ControlInput2">
                                <Form.Control type="text" placeholder="First Name"
                                    name='firstname'
                                    value={inputData.firstname}
                                    onChange={(e) => {
                                        setinputData({ ...inputData, firstname: e.target.value })
                                    }}
                                />
                                <p className='text-danger'>{formErrors.firstname}</p>
                            </Form.Group>
                        </Col>
                        <Col className='item'>
                            <Form.Group controlId="exampleForm.ControlInput3">
                                <Form.Control type="email" placeholder="Email"
                                    name='email'
                                    value={inputData.email}
                                    onChange={(e) => {
                                        setinputData({ ...inputData, email: e.target.value })
                                    }}
                                />
                                <p className='text-danger'>{formErrors.email}</p>
                            </Form.Group>
                        </Col>
                        <Col className='item'>
                            <Form.Group controlId="exampleForm.ControlInput4">
                                <Form.Control type="number" placeholder="Phone no"
                                    name='phoneno'
                                    value={inputData.phoneno}
                                    onChange={(e) => {
                                        setinputData({ ...inputData, phoneno: e.target.value })
                                    }}
                                />
                                <p className='text-danger'>{formErrors.phoneno}</p>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>

                <CorrespondanceAddress />
                <BillingAddress />

            </Form>
        </div>
    )
}

export default ProfileUserPage;

