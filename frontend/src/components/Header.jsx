import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import img from '../assets/logo.png'
import './Header.css'


function Header() {
  return (
    <header>
    <Navbar expand="lg" className="fixed-top" style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
    <Container fluid>
        <LinkContainer to='/'>
        <Navbar.Brand>
        <img 
          src={img} 
          width={30} 
          height={30} 
          className="d-inline-block align-top" 
          alt="Logo"
        />

        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/cart'>
            <Nav.Link> <i className='fas fa-shopping-cart navbar-icons' ></i> Cart</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/about'>
            <Nav.Link> <i className='' ></i> About </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
          <LinkContainer to='/login'>
            <Nav.Link> <i className='fas fa-user navbar-icons'></i> Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header