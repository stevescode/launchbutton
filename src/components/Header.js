import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import goustoLogo from '../assets/images/gousto.png'; // Import the gousto.png image
import './Header.css';

const Header = () => {
  return (
    <Navbar className="custom-navbar" variant="dark" fixed="top">
      <div className="gousto-logo" style={{ backgroundImage: `url(${goustoLogo})` }}></div>
      <Container>
        {/* Use the imported image as the Navbar.Brand */}
        <Navbar.Brand>
          <img
            src={goustoLogo} // Use the imported image source here
            width="90"
            height="34"
            className="d-inline-block align-top"
            alt="Gousto Logo"
            style={{ paddingTop: '7px' }} // Add padding-top style here
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
        <span class="header-nav-links">
          <a class="header-nav-link" href="/#">Choose Recipes</a>
          <a class="header-nav-link" href="/#">Free Food</a>
          <a class="header-nav-link" href="/#" to="/blog/sustainability">Sustainability</a>
          <a class="header-nav-link" href="/#" data-optimizely="desktop-header-help-link" to="/help-centre">Help</a>
          <span role="button" tabindex="0" class="header-nav-end">
            <a class="header-nav-end-link" data-testing="myGoustoButtonLink" href="/#">My Gousto</a>
            <span role="button" tabindex="0" class="header-nav-end-button" data-testing="logoutButton">Logout</span>
            </span>
          </span>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
