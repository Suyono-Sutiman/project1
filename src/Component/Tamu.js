import React from 'react';
import {Col, Container, Row, Image} from 'react-bootstrap';
import keluarga1 from '../Gambar/undraw_at_home_octe.svg';

function Tamu () {
    return (
        <Container>
            <h4>Ruang Tamu</h4>
            <Row>
                <Col>
                <Image src={keluarga1} fluid />
                </Col>
                <Col>
                <Image src={keluarga1} fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                <Image src={keluarga1} fluid />
                </Col>
                <Col>
                <Image src={keluarga1} fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                <Image src={keluarga1} fluid />
                </Col>
                <Col>
                <Image src={keluarga1} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Tamu;