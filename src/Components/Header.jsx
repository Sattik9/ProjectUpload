import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
    const token=sessionStorage.getItem("token");
    const name=sessionStorage.getItem("name");
    let history=useNavigate();
    const LogOut=()=>{
        sessionStorage.clear();
        history("/login");
        toast("Logout Successful!")
    }
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link>Read</Nav.Link></LinkContainer>
            <LinkContainer to="/create"><Nav.Link>Create</Nav.Link></LinkContainer>
            {token==="" || token===null?<><LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer></>:<><NavDropdown title={name} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={LogOut} ><i class="fa fa-sign-out"style={{fontSize:"17px"}}></i>Log Out</NavDropdown.Item>
              
            </NavDropdown></>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    </>
  )
}

export default Header