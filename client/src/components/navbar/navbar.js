import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

import './styles.css';
import Logo from '../../images/logo.png'

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
<Navbar className='color-nav' expand="lg">
  <Container>
    <Navbar.Brand href="/"><img className='img' src={Logo} alt="circle"></img> JDPitchers</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/inventory">Collection</Nav.Link>
        <NavDropdown title="Work" id="basic-nav-dropdown">
          <NavDropdown.Item href="/2020crosses">2020 Crosses</NavDropdown.Item>
          <NavDropdown.Item href="/2019crosses">2019 Crosses</NavDropdown.Item>
          <NavDropdown.Item href="/2018crosses">2018 Crosses</NavDropdown.Item>
          <NavDropdown.Item href="/2017crosses">2017 Crosses</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/viewmore">View More</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/work">Space Holder</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        </Nav>
        <Nav>
        {user?.result ? (
        <>
        <Nav.Link href="/admin">Admin</Nav.Link>
        <Nav.Link onClick={logout}>Logout</Nav.Link>
        </>
        ) : (
          <Nav.Link href="/auth">Sign In</Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Navbars;