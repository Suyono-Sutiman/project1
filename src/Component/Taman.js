import React, { useState } from 'react';
import {Col, Container, Row, Image, Modal, Button} from 'react-bootstrap';
import satu from '../Gambar/exterior/taman/IMG-20201128-WA0000.jpg';
import dua from '../Gambar/exterior/taman/IMG-20201128-WA0002.jpg';
import tiga from '../Gambar/exterior/taman/IMG-20201128-WA0004.jpg';
import empat from '../Gambar/exterior/taman/IMG-20201128-WA0010.jpg';

function Taman () {
    const [taman1, settaman1] = useState(false);
    const [taman2, settaman2] = useState(false);
    const [taman3, settaman3] = useState(false);
    const [taman4, settaman4] = useState(false);
    return (
        <Container id='taman' className='gamb' >
            <h4>Taman</h4>
            <Row className='kotak'>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={satu} fluid onClick={() => settaman1(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={tiga} fluid onClick={() => settaman3(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={dua} fluid onClick={() => settaman2(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={empat} fluid onClick={() => settaman4(true)} className='gb'/>
                </Col>
            </Row>
            
            <Modal show={taman1} onHide={() => settaman1(false)} centered size='lg'>
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

            <Modal show={taman2} onHide={() => settaman2(false)} centered size='lg'>
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

            <Modal show={taman3} onHide={() => settaman3(false)} centered size='lg'>
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

            <Modal show={taman4} onHide={() => settaman4(false)} centered size='lg'>
                <Modal.Body><Image src={empat} fluid/></Modal.Body>
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

export default Taman;