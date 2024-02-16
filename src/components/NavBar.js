import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from '../logos/svg/logo-no-background.svg';
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/nav-icon2.svg';
import navIcon3 from '../images/nav-icon3.svg';
import './NavBar.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (e,value) => {
    setActiveLink(value);
    console.log(value)
    e.preventDefault(); // Prevent default Link behavior
    
    const targetSection = document.getElementById(value);
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      }
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={(e) => onUpdateActiveLink(e,'home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={(e) => onUpdateActiveLink(e,'about')}>About</Nav.Link>
              <Nav.Link as={Link} to="/recipes" className={activeLink === 'recipes' ? 'active navbar-link' : 'navbar-link'} onClick={(e) => onUpdateActiveLink(e,'recipes')}>Recipes</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#service/4.1">Weight Management</NavDropdown.Item>
                  <NavDropdown.Item href="#service/4.2">Sports Nutrition</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}