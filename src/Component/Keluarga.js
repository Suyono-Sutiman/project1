import React, { useState } from 'react';
import {Col, Container, Row, Image, Modal, Button} from 'react-bootstrap';
import satu from '../Gambar/interior/keluarga/IMG-20201128-WA0005.jpg';
import dua from '../Gambar/interior/keluarga/IMG-20201128-WA0006.jpg';
import tiga from '../Gambar/interior/keluarga/IMG-20201128-WA0007.jpg';
import empat from '../Gambar/interior/keluarga/IMG-20201128-WA0008.jpg';
import lima from '../Gambar/interior/keluarga/IMG-20201128-WA0042.jpg';
import enam from '../Gambar/interior/keluarga/IMG-20201128-WA0043.jpg';
import tujuh from '../Gambar/interior/keluarga/IMG-20201128-WA0044.jpg';
import delapan from '../Gambar/interior/keluarga/IMG-20201128-WA0045.jpg';
import sembilan from '../Gambar/interior/keluarga/IMG-20201128-WA0046.jpg';
import sepuluh from '../Gambar/interior/keluarga/IMG-20201128-WA0047.jpg';
import sebelas from '../Gambar/interior/keluarga/IMG-20201128-WA0048.jpg';
import duabelas from '../Gambar/interior/keluarga/IMG-20201128-WA0049.jpg';

function Keluarga () {
    const [keluarga1, setkeluarga1] = useState(false);
    const [keluarga2, setkeluarga2] = useState(false);
    const [keluarga3, setkeluarga3] = useState(false);
    const [keluarga4, setkeluarga4] = useState(false);
    const [keluarga5, setkeluarga5] = useState(false);
    const [keluarga6, setkeluarga6] = useState(false);
    const [keluarga7, setkeluarga7] = useState(false);
    const [keluarga8, setkeluarga8] = useState(false);
    const [keluarga9, setkeluarga9] = useState(false);
    const [keluarga10, setkeluarga10] = useState(false);
    const [keluarga11, setkeluarga11] = useState(false);
    const [keluarga12, setkeluarga12] = useState(false);
    return (
        <Container id='keluarga' className='gamb' >
            <h4>Keluarga</h4>
            <Row className='kotak'>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={satu} fluid onClick={() => setkeluarga1(true)} className='gb' />
                    <Image src={dua} fluid onClick={() => setkeluarga2(true)} className='gb' />
                    <Image src={tiga} fluid onClick={() => setkeluarga3(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={empat} fluid onClick={() => setkeluarga4(true)} className='gb' />
                    <Image src={lima} fluid onClick={() => setkeluarga5(true)} className='gb' />
                    <Image src={enam} fluid onClick={() => setkeluarga6(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={tujuh} fluid onClick={() => setkeluarga7(true)} className='gb' />
                    <Image src={delapan} fluid onClick={() => setkeluarga8(true)} className='gb' />
                    <Image src={sembilan} fluid onClick={() => setkeluarga9(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={sepuluh} fluid onClick={() => setkeluarga10(true)} className='gb'/>
                    <Image src={sebelas} fluid onClick={() => setkeluarga11(true)} className='gb' />
                    <Image src={duabelas} fluid onClick={() => setkeluarga12(true)} className='gb' />
                </Col>
            </Row>
            
            <Modal show={keluarga1} onHide={() => setkeluarga1(false)} centered size='lg'>
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

            <Modal show={keluarga2} onHide={() => setkeluarga2(false)} centered size='lg'>
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

            <Modal show={keluarga3} onHide={() => setkeluarga3(false)} centered size='lg'>
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

            <Modal show={keluarga4} onHide={() => setkeluarga4(false)} centered size='lg'>
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

            <Modal show={keluarga5} onHide={() => setkeluarga5(false)} centered size='lg'>
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

            <Modal show={keluarga6} onHide={() => setkeluarga6(false)} centered size='lg'>
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

            <Modal show={keluarga7} onHide={() => setkeluarga7(false)} centered size='lg'>
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

            <Modal show={keluarga8} onHide={() => setkeluarga8(false)} centered size='lg'>
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

            <Modal show={keluarga9} onHide={() => setkeluarga9(false)} centered size='lg'>
                <Modal.Body><Image src={sembilan} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={keluarga10} onHide={() => setkeluarga10(false)} centered size='lg'>
                <Modal.Body><Image src={sepuluh} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={keluarga11} onHide={() => setkeluarga11(false)} centered size='lg'>
                <Modal.Body><Image src={sebelas} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={keluarga12} onHide={() => setkeluarga12(false)} centered size='lg'>
                <Modal.Body><Image src={duabelas} fluid/></Modal.Body>
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

export default Keluarga;