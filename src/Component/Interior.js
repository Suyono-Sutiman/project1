import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Keluarga from './Keluarga';
import Tamu from './Tamu';

function Interior () {
    return (
        <Container>
            <h2>Interior</h2>
            <Row>
                <Col xs={12} md={6} >
                <Keluarga/>
                </Col>
                <Col xs={12} md={6} >
                <Tamu/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} >
                <Tamu/>
                </Col>
                <Col xs={12} md={6} >
                <Tamu/>
                </Col>
            </Row>
        </Container>
    )
}

export default Interior;