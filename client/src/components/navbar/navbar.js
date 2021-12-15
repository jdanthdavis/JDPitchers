import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

import './styles.css';
import testLogo1 from '../../images/blk-circle.png'
import testLogo2 from '../../images/blk-plants.png'
import testLogo3 from '../../images/circle-nobkgd.png'
import testLogo4 from '../../images/circle-whtbkgd.png'
import testLogo5 from '../../images/plants-nobkgd.png'

const Navbars = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
<Navbar className='color-nav' expand="lg" bg="dark">
  <Container>
    <Navbar.Brand href="/">
      <LazyLoadImage
      className='img'
      alt="Home Logo"
      src={testLogo5} />
      <span className='HomeLogoText'>JDPitchers</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/inventory">Collection</Nav.Link>
        {/* <NavDropdown title="Work" id="basic-nav-dropdown">
          <NavDropdown.Item href="/2020crosses">2020 Crosses</NavDropdown.Item>
          <NavDropdown.Item href="/2019crosses">2019 Crosses</NavDropdown.Item>
          <NavDropdown.Item href="/2018crosses">2018 Crosses</NavDropdown.Item>
          <NavDropdown.Item href="/2017crosses">2017 Crosses</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/viewmore">View More</NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="https://www.instagram.com/jdpitchers" target="_blank" rel="noopener noreferrer">
          Instagram</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="mailto:jdpitchers@gmail.com">Contact Us</Nav.Link>
        </Nav>
        <Nav>
        {user?.result ? (
        <>
        <Nav.Link href="/admin">Admin</Nav.Link>
        <Nav.Link onClick={logout}>Logout</Nav.Link>
        </>
        ) : (
          <Nav.Link href="/"></Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Navbars;