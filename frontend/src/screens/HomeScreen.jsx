import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import img from '../assets/bg.png';
import img1 from '../assets/prekirisamba.jpg';
import img2 from '../assets/sudukekulu.png';
import img3 from '../assets/supirinadu.jpg';
import img4 from '../assets/supirisamba.jpg';


// Static list of products for frontend-only implementation
const products = [
  {
    _id: 1,
    name: 'Premium kiri samba',
    image: img1,
    rating: 4.5,
    numReviews: 25,
    price: 2400.99,
  },
  {
    _id: 2,
    name: 'Sudu kekulu',
    image: img2,
    rating: 3.9,
    numReviews: 30,
    price: 2099.99,
  },
  {
    _id: 3,
    name: 'Supiri nadu',
    image: img3,
    rating: 4.2,
    numReviews: 15,
    price: 1899.99,
  },
  {
    _id: 4,
    name: 'Supiri samba',
    image: img4,
    rating: 5.0,
    numReviews: 50,
    price: 2299.99,
  },
];

function HomeScreen() {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
        </h1>
      </div>

      {/* Products Section */}
      <div>
        <Container>
          <br />
          <br />
          <h1>Products</h1>
          <Row
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '20px',
              margin: 0,
            }}
          >
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HomeScreen;
