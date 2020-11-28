import React from 'react';
import {Col, Container, Row, Image} from 'react-bootstrap';
import satu from '../Gambar/pexels-adrien-olichon-3534755.jpg';
import dua from '../Gambar/pexels-david-bartus-915674.jpg';
import tiga from '../Gambar/pexels-ingo-joseph-9816.jpg';
import empat from '../Gambar/pexels-riccardo-bertolo-4245826.jpg';

function Dapur () {
    return (
        <Container id='dapur' >
            <h4>Dapur</h4>
            <Row>
                <Col xs={12} md={6} lg={3} >
                <Image src={satu} fluid style={{padding:'15px 0px'}} />
                <Image src={dua} fluid style={{padding:'15px 0px'}} />
                <Image src={tiga} fluid style={{padding:'15px 0px'}} />
                <Image src={empat} fluid style={{padding:'15px 0px'}} />
                </Col>
                <Col xs={12} md={6} lg={3} >
                <Image src={empat} fluid style={{padding:'15px 0px'}} />
                <Image src={tiga} fluid style={{padding:'15px 0px'}} />
                <Image src={dua} fluid style={{padding:'15px 0px'}} />
                <Image src={satu} fluid style={{padding:'15px 0px'}} />
                </Col>
                <Col xs={12} md={6} lg={3} >
                <Image src={empat} fluid style={{padding:'15px 0px'}} />
                <Image src={tiga} fluid style={{padding:'15px 0px'}} />
                <Image src={dua} fluid style={{padding:'15px 0px'}} />
                <Image src={satu} fluid style={{padding:'15px 0px'}} />
                </Col>
                <Col xs={12} md={6} lg={3} >
                <Image src={empat} fluid style={{padding:'15px 0px'}} />
                <Image src={tiga} fluid style={{padding:'15px 0px'}} />
                <Image src={dua} fluid style={{padding:'15px 0px'}} />
                <Image src={satu} fluid style={{padding:'15px 0px'}} />
                </Col>
            </Row>
        </Container>
    )
}

export default Dapur;