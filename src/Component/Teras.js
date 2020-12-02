import React, { useState } from 'react';
import {Col, Container, Row, Image, Modal, Button} from 'react-bootstrap';
import satu from '../Gambar/exterior/teras/IMG-20201128-WA0001.jpg';
import dua from '../Gambar/exterior/teras/IMG-20201128-WA0016.jpg';
import tiga from '../Gambar/exterior/teras/IMG-20201128-WA0003.jpg';

function Teras () {
    const [teras1, setteras1] = useState(false);
    const [teras2, setteras2] = useState(false);
    const [teras3, setteras3] = useState(false);
    return (
        <Container id='teras' className='gamb' >
            <h4>Teras</h4>
            <Row className='kotak'>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={satu} fluid onClick={() => setteras1(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={tiga} fluid onClick={() => setteras3(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={dua} fluid onClick={() => setteras2(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                </Col>
            </Row>
            
            <Modal show={teras1} onHide={() => setteras1(false)} centered size='lg'>
                <Modal.Body><Image src={satu} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={teras2} onHide={() => setteras2(false)} centered size='lg'>
                <Modal.Body><Image src={dua} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={teras3} onHide={() => setteras3(false)} centered size='lg'>
                <Modal.Body><Image src={tiga} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Teras;