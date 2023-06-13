import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Navs() {
  return (
    <div>
        <Navbar expand="md" className='my-3'>
            <Container>
                <Navbar.Brand href='#'><img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hootsuite_logo.png" alt="" height="40" /></Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse>
                <Nav className='me-auto'>
                    <Nav.Link className='fw-bolder'>PlatForm</Nav.Link>
                    <Nav.Link className='fw-bolder'>Plans</Nav.Link>
                    <Nav.Link className='fw-bolder'>Enterprisres</Nav.Link>
                    <Nav.Link className='fw-bolder'>Resources</Nav.Link>
                    <Nav.Link className='fw-bolder'>Education</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='fw-semibold' >Contact US</Nav.Link>
                        <Nav.Link className='fw-semibold' >Log in</Nav.Link>
                        <button className="btn btn-success">Signup</button>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navs