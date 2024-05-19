import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
const HeaderComponents = () => {
    return(
        <>
           <Navbar collapseOnSelect expend = 'lg' bg ='primary' variant="dark">
            <Container>
                <Navbar.Brand>  
                    My E-Commerce
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>           
                <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className = 'me-auto'>
                         <Nav>
                            <Link to="/" className="nav-link">Home</Link> 
                         </Nav>
                         <Nav>
                            <Link to="/about" className="nav-link">About</Link> 
                         </Nav>
                     </Nav>
                     <Nav>
                         <Nav>
                            <Link to="/cart" className="nav-link">Cart</Link> 
                         </Nav>
                         <Nav>
                            <Link to="/login" className="nav-link">Login</Link> 
                         </Nav>
                     </Nav>
                </Navbar.Collapse>
            </Container>
           </Navbar>
        </>
    )
}

export default HeaderComponents;