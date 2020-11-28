import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../Gambar/JJ.svg';
import './Navibar.css';

function Navibar () {
    return (
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed='top'>
        <Navbar.Brand href="#home" className='jeneng'>
            <img
            alt=""
            src={logo}
            width="45"
            height="45"
            className="d-inline-block align-top"
            />{' '}
        Enterprise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <NavDropdown title="Interior" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#keluarga">Ruang Keluarga</NavDropdown.Item>
                <NavDropdown.Item href="#tamu">Ruang Tamu</NavDropdown.Item>
                <NavDropdown.Item href="#tidur">Kamar Tidur</NavDropdown.Item>
                <NavDropdown.Item href="#dapur">Dapur</NavDropdown.Item>
                <NavDropdown.Item href="#mandi">Kamar Mandi</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Exterior" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#renan">Kolam Renang</NavDropdown.Item>
                <NavDropdown.Item href="#mini">Kolam Mini</NavDropdown.Item>
                <NavDropdown.Item href="#taman">Taman</NavDropdown.Item>
                <NavDropdown.Item href="#teras">Teras</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#tentang">Tentang</Nav.Link>
            <Nav.Link href="#kontak">Kontak</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;