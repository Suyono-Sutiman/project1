import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Container, Row, Col, Image} from 'react-bootstrap';
import hero from '../Gambar/undraw_at_home_octe.svg';
import Button from 'react-bootstrap/Button'

function awal () {
    return (
        <Jumbotron id='home' >
            <Container style={{marginTop:71}}>
                <Row>
                    <Col sm={6}>
                    <Image src={hero} fluid />
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col><h2>Exterior</h2></Col>
                            <Col><h2>Interior</h2></Col>
                        </Row>
                        <Row>
                            <Col><h1>Design</h1></Col>
                        </Row>
                        <Row style={{marginBottom:10}}>
                            <Col><Button 
                            href='#exterior' 
                            variant="outline-primary">Lihat Exterior</Button></Col>
                            <Col><Button 
                            href='#interior' 
                            variant="outline-primary">Lihat Interior</Button></Col>
                        </Row>
                        <Row>
                            <Col><Button 
                            href='https://wa.me/6282336469743' 
                            variant="outline-primary">Konsultasi</Button></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default awal;