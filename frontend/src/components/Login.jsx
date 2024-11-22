import Form from "react-bootstrap/Form";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          username: username,
          password: password,
        }
      );

      console.log(response.data);
      alert("Login Successful");
    } catch (error) {
      console.error(error);
      setError("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-background">
        <Container>
          <br />
          <center>
            <h1 className="">Log In</h1>
          </center>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            {error && <p className="error">{error}</p>}
            <Form.Control
              type="submit"
              placeholder="Log In"
              className="submit-btn"
              disabled={loading}
            />
          </Form>
          <br />
          <br />
          <center>
            <p>
              Don&#39;t Have an Account ?
              <Link to="/register">
                <span> Create Now</span>
              </Link>
            </p>
          </center>
        </Container>
      </div>
    
    <div className='page-background'>
    <Container>
    <br />
    <center>
    <h1 className="">Log In</h1>
    </center>
    <br />
    <Form>
      <Form.Group className="mb-3 " controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" className="tb-1"/>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="tb-1" />
      </Form.Group>
      <br />
      <Form.Control type="submit" placeholder="Log In" className='submit-btn '/>
    </Form>
    <br />
    <br />
    <center>
        <p>Don&#39;t Have an Account ?<Link to="/register"><span > Create Now</span></Link></p>
    </center>
    </Container>
    </div>
    
    </>
  );
}

export default Login;
