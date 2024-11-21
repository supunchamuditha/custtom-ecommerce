import Form from 'react-bootstrap/Form';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    <div className='.page-background'>
    <br />
    <center>
    <h1 className="">Log In</h1>
    </center>
    <br />
    <Form>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <br />
      <Form.Control type="submit" placeholder="Log In" className='submit-btn'/>
    </Form>
    <br />
    <br />
    <center>
        <p>Don&#39;t Have an Account ?<Link to="/register"><span > Create Now</span></Link></p>
    </center>
    </div>
    </>
  );
}

export default Login;