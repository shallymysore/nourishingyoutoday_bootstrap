import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Button } from "react-bootstrap";
import logo from '../logos/svg/logo-no-background.svg';
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/nav-icon2.svg';
import navIcon3 from '../images/nav-icon3.svg';
import './NavBar.css'
import { Link, BrowserRouter as Router } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    //setIsMenuOpen(false);

    if (isMenuOpen) { // Close menu on any link press if mobile
      setIsMenuOpen(false);
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClose = () => setIsMenuOpen(false);

  return (
    <>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand>
          <Link to ='/ ' className='navbar-brand' onClick={() => handleScrollToSection('home')}>
          <img src={logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        {isSmallScreen && (
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='navbar-link' onClick={() => handleScrollToSection('about')}>
              About
            </Nav.Link>
            <Nav.Link as={Link} className='navbar-link' to="/recipes">
              Recipes
            </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} className='navbar-link' to="/services/weight-management">
                Weight Management
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} className='navbar-link' to="/services/sports-nutrition">
                Sports Nutrition
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} className='navbar-link' to="/services/wellness-nutrition">
                Wellness Nutrition
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/" className='navbar-link' onClick={() => handleScrollToSection('connect')}>
              Contact Us
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <Nav.Link as={Link} to='/SignIn'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>

        {isSmallScreen && (
          <Offcanvas show={isMenuOpen} onHide={() => setIsMenuOpen(false)} placement="end">
            <Offcanvas.Header>
            <Button onClick={handleClose}>
              <FaTimes/>
            </Button>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" onClick={() => handleScrollToSection('about')}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/recipes">
                  Recipes
                </Nav.Link>
                <NavDropdown title="Services">
                  <NavDropdown.Item as={Link} to="/services/weight-management">
                    Weight Management
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/sports-nutrition">
                    Sports Nutrition
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/wellness-nutrition">
                    Wellness Nutrition
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/" onClick={() => handleScrollToSection('connect')}>
                  Contact Us
                </Nav.Link>
              </Nav>
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <Nav.Link as={Link} to='/SignIn'>
                <button class="btn btn-outline-secondary" ><span>Let’s Connect</span></button>
              </Nav.Link>
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </Container>
    </Navbar>
    </>
  );
};
