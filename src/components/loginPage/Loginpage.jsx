
import { Button, Card, Form } from 'react-bootstrap'
import { Formik } from 'formik';

function Loginpage(props) {
  

  return (

    <div className='container my-5 w-25 '>
      <Card className='mainCard'>
        <Card.Body>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email =<div style={{color:'red'}}>'Required'</div>
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = <div style={{color:'red'}}>'*Invalid user name address';</div>
              } else if (!values.password) {
                errors.password = <div style={{color:'red'}}>'Required';</div>
              } else if (
                ! /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)
              ) {
                errors.password = <div style={{color:'red'}}>'*Invalid password'</div>
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                props.history.push('/mainNavigationPage/profilePageUser')
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="formBasicName">
                  <Form.Label className='container d-flex justify-content-start' name='userName'>User Name</Form.Label>
                  <Form.Control className='bg-light'
                    type="email"
                    placeholder='username'
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}

                  />
                </Form.Group>
                {errors.email && touched.email && errors.email}
                <Form.Group className="mb-2" controlId="formBasicPassword" >
                  <Form.Label className='container d-flex justify-content-start' name='password' autoComplete="on">Password</Form.Label>
                  <Form.Control
                    className='bg-light'
                    type="password"
                    name="password"
                    placeholder='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </Form.Group>
                {errors.password && touched.password && errors.password}
                <Button className='container d-flex justify-content-center mt-5 w-50'
                  variant="success"
                  type="submit" disabled={isSubmitting}
                  >
                  Log In
                </Button>

              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>

    </div>


  );
            }
export default Loginpage