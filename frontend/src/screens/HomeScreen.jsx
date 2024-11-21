import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import img from '../assets/hero_img.jpg';
import axios from 'axios';

axios.defaults.baseURL = '/api';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get('/products/');
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div 
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'start',
        height: '60vh', // Full height
        width: '100%', // Full width
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        position: 'relative', // Enable absolute positioning inside
      }}
    >


      <Row 
        style={{
          width: '100%', // Full width for the products section
          marginTop: 'auto', // Push to bottom if desired
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: white overlay
          padding: '20px', // Add spacing
        }}
      >
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
