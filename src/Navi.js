import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
// import './Sidebar.css'
import './components/sidebar/Sidebar.css'

function Navi() {
  return (
    <div><Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-start flex-grow-1 pe-3">
            {/* <Sidebar/> */}
            <NavLink to='/mainNavigationPage/profilePageUser' activeClassName='navLinkActive' >Profile User Page</NavLink>
          <NavLink to='/mainNavigationPage/profilePageCompany' activeClassName='navLinkActive' >Profile Company Page</NavLink>
          <NavLink to='/mainNavigationPage/customerListPage' activeClassName='navLinkActive' >Customer List Page</NavLink>
          <NavLink to='/mainNavigationPage/agencyOrBrokerPage' activeClassName='navLinkActive' >Agency Or Broker Page</NavLink>
          <NavLink to='/mainNavigationPage/brokerBussinessPage' activeClassName='navLinkActive' > Broker Bussiness Page</NavLink>
     
          </Nav>
         
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar></div>
  )
}

export default Navi