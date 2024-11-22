import { Row, Col, Image, ListGroup, Card, Button, Container } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link, useParams } from 'react-router-dom';
import img1 from '../assets/prekirisamba.jpg';
import img2 from '../assets/sudukekulu.png';
import img3 from '../assets/supirinadu.jpg';
import img4 from '../assets/supirisamba.jpg';

// Static product data for frontend-only implementation
const products = [
  {
    _id: 1,
    name: 'Premium kiri Samba',
    image: img1,
    description: 'High-quality Prekiri Samba rice, perfect for meals.',
    rating: 4.5,
    numReviews: 25,
    price: 2400.99,
    countInStock: 10,
  },
  {
    _id: 2,
    name: 'Sudu Kekulu sahal',
    image: img2,
    description: 'Fresh Sudu Kekulu rice, grown organically.',
    rating: 3.9,
    numReviews: 30,
    price: 2099.99,
    countInStock: 5,
  },
  {
    _id: 3,
    name: 'Supiri Nadu',
    image: img3,
    description: 'Premium Supiri Nadu rice, rich in flavor.',
    rating: 4.2,
    numReviews: 15,
    price: 1899.99,
    countInStock: 2,
  },
  {
    _id: 4,
    name: 'Supiri Samba',
    image: img4,
    description: 'The finest Supiri Samba rice for your family.',
    rating: 5.0,
    numReviews: 50,
    price: 2299.99,
    countInStock: 0,
  },
];

function ProductScreen() {
  const { id } = useParams(); // Extracting _id from route parameters
  const product = products.find((p) => p._id === Number(id)); // Find the product based on the id

  if (!product) {
    return (
      <div>
        <h2>Product not found!</h2>
        <Link to="/" className="btn btn-light my-3">Go Back</Link>
      </div>
    );
  }

  return (
    <div>
      <Container>
      {/* Back button to return to the homepage */}
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        {/* Product image section */}
        <Col md={6} lg={6}> {/* Increased width for the image */}
        <Image
          src={product.image}
          alt={product.name}
          style={{ maxHeight: "600px", objectFit: "cover" }} // Set max height and fit
          fluid
        />
        </Col>

        {/* Product details and rating */}
        <Col md={3} lg={2}> {/* Reduced width for details */}
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: Rs:{product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Purchase options */}
        <Col md={2} lg={2}> {/* Adjusted width for purchase options */}
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="w-100" type="button" disabled={product.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default ProductScreen;
