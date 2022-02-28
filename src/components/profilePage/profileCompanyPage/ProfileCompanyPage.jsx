import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import BillingAddress from "../profileUserPage/BillingAddress"
import CorrespondanceAddress from "../profileUserPage/CorrespondanceAddress"
import './ProfileCompanyPage.css'

function ProfileCompanyPage() {
    const [inputData, setinputData] = useState({
        lastname: "",
        firstname: "",
        email: "",
        phoneno: "",

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
        if (!values.companyname) {
            errors.companyname = "Company Name is Required!";
        } else if (!regex1.test(values.companyname)) {
            errors.companyname = "Company Name should be Alphabet!";
        }
        else if (values.companyname.length > 12) {
            errors.companyname = "Company Name should be less than 12 characters";
        }
        if (!values.contactname) {
            errors.contactname = "Contact name is Required!";
        } else if (!regex1.test(values.contactname)) {
            errors.contactname = "Contact should be Alphabet!";
        } else if (values.contactname.length > 6) {
            errors.contactname = "Contact should be less than 6 characters";
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
                        <Button className='btn btn-dark my-2' type="submit">Submit</Button>
                    </div><br></br>
                    <Row className='companyInfo'>
                        <Col className="item">
                            <Form.Group controlId="exampleForm.ControlInput1" >
                                <Form.Control type="text" placeholder="Company name"
                                    name='companyname'
                                    value={inputData.companyname}
                                    onChange={(e) => {
                                        setinputData({ ...inputData, companyname: e.target.value })
                                    }}
                                />
                                <p className='text-danger'>{formErrors.companyname}</p>
                            </Form.Group>
                        </Col>
                        <Col className="item">
                            <Form.Group controlId="exampleForm.ControlInput2" >
                                <Form.Control type="text" placeholder="Contact name"
                                    name='contactname'
                                    value={inputData.contactname}
                                    onChange={(e) => {
                                        setinputData({ ...inputData, contactname: e.target.value })
                                    }}
                                />
                                <p className='text-danger'>{formErrors.contactname}</p>
                            </Form.Group>
                        </Col>
                        <Col className="item">
                            <Form.Group controlId="exampleForm.ControlInput3" >
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
                        <Col className="item">
                            <Form.Group controlId="exampleForm.ControlInput4" >
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

export default ProfileCompanyPage