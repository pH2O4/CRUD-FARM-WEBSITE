import React from "react";
import './Header.css'
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from "react-bootstrap";


class Header extends Component {
    render(){
      return <div className="Header">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/"> NFT's Fazenda Decisão</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Mercado">Mercado</Nav.Link>
          <Nav.Link href="#Lançamentos">Lançamento</Nav.Link>
          <Nav.Link id="buttonrigth" href="/Sobre">Parceiros/Sobre</Nav.Link>
          <Nav.Link id="styleconnect" href="/login$Register">Login/Register</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>


    }
};

export default Header