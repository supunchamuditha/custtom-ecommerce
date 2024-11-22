import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'; // Add your custom CSS here if needed

function About() {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <br />
        <br /><br /><br />
        <h1 className="hero-title">About Us</h1>
        <p className="hero-subtitle">Learn more about who we are and what we do.</p>
      </div>

      {/* Main Content */}
      <Container>
        <Row className="mt-4">
          <Col md={6}>
            <Card className="info-card">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to deliver high-quality products that bring value to our customers.
                  We are dedicated to innovation, excellence, and customer satisfaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="info-card">
              <Card.Body>
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  We aim to be a global leader in our industry, recognized for our commitment to 
                  sustainability and social responsibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card className="info-card">
              <Card.Body>
                <Card.Title>About Our Team</Card.Title>
                <Card.Text>
                  Our team is composed of passionate professionals who work tirelessly to achieve 
                  our shared goals. Together, we strive to make a positive impact on our community 
                  and the world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
