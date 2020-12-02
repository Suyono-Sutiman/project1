import React, { useState } from 'react';
import {Col, Container, Row, Image, Modal, Button} from 'react-bootstrap';
import satu from '../Gambar/exterior/kolam/IMG-20201128-WA0017.jpg';
import dua from '../Gambar/exterior/kolam/IMG-20201128-WA0011.jpg';
import tiga from '../Gambar/exterior/kolam/IMG-20201128-WA0018.jpg';
import empat from '../Gambar/exterior/kolam/IMG-20201128-WA0013.jpg';
import lima from '../Gambar/exterior/kolam/IMG-20201128-WA0019.jpg';
import enam from '../Gambar/exterior/kolam/IMG-20201128-WA0014.jpg';
import tujuh from '../Gambar/exterior/kolam/IMG-20201128-WA0012.jpg';
import delapan from '../Gambar/exterior/kolam/IMG-20201128-WA0009.jpg';

function Renang () {
    const [kolam1, setKolam1] = useState(false);
    const [kolam2, setKolam2] = useState(false);
    const [kolam3, setKolam3] = useState(false);
    const [kolam4, setKolam4] = useState(false);
    const [kolam5, setKolam5] = useState(false);
    const [kolam6, setKolam6] = useState(false);
    const [kolam7, setKolam7] = useState(false);
    const [kolam8, setKolam8] = useState(false);
    return (
        <Container id='renang' className='gamb' >
            <h4>Kolam</h4>
            <Row className='kotak'>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={tujuh} fluid onClick={() => setKolam7(true)} className='gb' />
                    <Image src={dua} fluid onClick={() => setKolam2(true)} className='gb'/>
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={tiga} fluid onClick={() => setKolam3(true)} className='gb' />
                    <Image src={delapan} fluid onClick={() => setKolam8(true)} className='gb'/>
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={lima} fluid onClick={() => setKolam5(true)} className='gb' />
                    <Image src={enam} fluid onClick={() => setKolam6(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={satu} fluid onClick={() => setKolam1(true)} className='gb'/>
                    <Image src={empat} fluid onClick={() => setKolam4(true)} className='gb' />
                </Col>
            </Row>
            
            <Modal show={kolam1} onHide={() => setKolam1(false)} centered size='lg'>
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

            <Modal show={kolam2} onHide={() => setKolam2(false)} centered size='lg'>
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

            <Modal show={kolam3} onHide={() => setKolam3(false)} centered size='lg'>
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

            <Modal show={kolam4} onHide={() => setKolam4(false)} centered size='lg'>
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

            <Modal show={kolam5} onHide={() => setKolam5(false)} centered size='lg'>
                <Modal.Body><Image src={lima} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={kolam6} onHide={() => setKolam6(false)} centered size='lg'>
                <Modal.Body><Image src={enam} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={kolam7} onHide={() => setKolam7(false)} centered size='lg'>
                <Modal.Body><Image src={tujuh} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={kolam8} onHide={() => setKolam8(false)} centered size='lg'>
                <Modal.Body><Image src={delapan} fluid/></Modal.Body>
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

export default Renang;