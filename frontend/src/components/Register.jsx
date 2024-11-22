import Form from 'react-bootstrap/Form';
import './Register.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
    <div className='rb'>
    <Container>
    <br />
    <center>
    <h1>Register</h1>
    </center>
    <br />
    <Form>
      <Form.Group className="mb-3" controlId="formGroupFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" className="input"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" className="input" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="input"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone" className="input"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address"  className="input"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="input" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="ConfirmPassword" className="input" />
      </Form.Group>
      <br />
      <Form.Control type="submit" placeholder="Register Now" className='submit-btn'/>
    </Form>
    <br />
    <br />
    <center>
        <p> Have an Account ?<Link to="/login"><span > LogIn Now</span></Link></p>
    </center>
    </Container>
    </div>
    </>
  );
}

export default Register;