import Form from "react-bootstrap/Form";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (password !== confirmPassword) {
        return setError("Passwords do not match");
      }
      const response = await axios.post("http://localhost:3000/api/auth/", {
        full_name: fullName,
        username: username,
        email: email,
        phone_number: phone,
        address: address,
        password: password,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setError("Failed to register");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="rb">
        <Container>
          <br />
          <center>
            <h1>Register</h1>
          </center>
          <br />
          <h1>Register</h1>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
            <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="ConfirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            {error && <p className="error">{error}</p>}
            {message && <p className="message">{message}</p>}
            <Form.Control
              type="submit"
              placeholder="Register Now"
              className="submit-btn"
              disabled={loading}
            />
          </Form>
          <br />
          <br />
          <center>
            <p>
              {" "}
              Have an Account ?
              <Link to="/login">
                <span> LogIn Now</span>
              </Link>
            </p>
          </center>
        </Container>
      </div>
    </>
  );
}

export default Register;
