import Form from 'react-bootstrap/Form';
import './Register.css';

function Register() {
  return (
    <>
    <h1>Register</h1>
    <br />
    <Form>
      <Form.Group className="mb-3" controlId="formGroupFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="ConfirmPassword" />
      </Form.Group>
      <br />
      <Form.Control type="submit" placeholder="Register Now" className='submit-btn'/>
    </Form>
    </>
  );
}

export default Register;