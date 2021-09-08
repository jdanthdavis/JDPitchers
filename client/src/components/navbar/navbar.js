import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';

import useStyles from './styles';
import Logo from '../../images/logo.png'

const Navbars = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const linkStyle = {
    color: '#5b7b37'
  };

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

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/"><img className={classes.logo} src={Logo} alt="circle"></img> JDPitchers</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link className={classes.nav} href="/">Home</Nav.Link>
        <Nav.Link className={classes.nav} href="/inventory">Collection</Nav.Link>
        <NavDropdown className={classes.nav} title="Work" id="basic-nav-dropdown">
          <NavDropdown.Item href="/2020crosses">2020 Crosses</NavDropdown.Item>
          <NavDropdown.Item href="/2019crosses">2019 Crosses</NavDropdown.Item>
          <NavDropdown.Item href="/2018crosses">2018 Crosses</NavDropdown.Item>
          <NavDropdown.Item href="/2017crosses">2017 Crosses</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/viewmore">View More</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className={classes.nav} href="/work">Space Holder</Nav.Link>
        <Nav.Link className={classes.nav} href="/about">About Us</Nav.Link>
        </Nav>
        <Nav>
        {user?.result ? (
        <>
        <Nav.Link className={classes.nav} href="/admin">Admin</Nav.Link>
        <Nav.Link className={classes.nav} onClick={logout}>Logout</Nav.Link>
        </>
        ) : (
          <Nav.Link className={classes.nav} href="/auth">Sign In</Nav.Link>
        )}

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Navbars;