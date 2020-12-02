import React, { useState } from 'react';
import {Col, Container, Row, Image, Modal, Button} from 'react-bootstrap';
import satu from '../Gambar/interior/mandi/IMG-20201128-WA0054.jpg';
import dua from '../Gambar/interior/mandi/IMG-20201128-WA0053.jpg';
import tiga from '../Gambar/interior/mandi/IMG-20201128-WA0052.jpg';
import empat from '../Gambar/interior/mandi/IMG-20201128-WA0051.jpg';
import lima from '../Gambar/interior/mandi/IMG-20201128-WA0050.jpg';
import enam from '../Gambar/interior/mandi/IMG-20201128-WA0040.jpg';
import tujuh from '../Gambar/interior/mandi/IMG-20201128-WA0037.jpg';
import delapan from '../Gambar/interior/mandi/IMG-20201128-WA0038.jpg';
import sembilan from '../Gambar/interior/mandi/IMG-20201128-WA0039.jpg';

function Mandi () {
    const [mandi1, setmandi1] = useState(false);
    const [mandi2, setmandi2] = useState(false);
    const [mandi3, setmandi3] = useState(false);
    const [mandi4, setmandi4] = useState(false);
    const [mandi5, setmandi5] = useState(false);
    const [mandi6, setmandi6] = useState(false);
    const [mandi7, setmandi7] = useState(false);
    const [mandi8, setmandi8] = useState(false);
    const [mandi9, setmandi9] = useState(false);
    return (
        <Container id='mandi' className='gamb' >
            <h4>Kamar Mandi</h4>
            <Row className='kotak'>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={satu} fluid onClick={() => setmandi1(true)} className='gb' />
                    <Image src={dua} fluid onClick={() => setmandi2(true)} className='gb' />
                    <Image src={tiga} fluid onClick={() => setmandi3(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={empat} fluid onClick={() => setmandi4(true)} className='gb' />
                    <Image src={lima} fluid onClick={() => setmandi5(true)} className='gb' />
                    <Image src={enam} fluid onClick={() => setmandi6(true)} className='gb'/>
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={tujuh} fluid onClick={() => setmandi7(true)} className='gb' />
                    <Image src={delapan} fluid onClick={() => setmandi8(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={sembilan} fluid onClick={() => setmandi9(true)} className='gb' />
                </Col>
            </Row>
            
            <Modal show={mandi1} onHide={() => setmandi1(false)} centered size='lg'>
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

            <Modal show={mandi2} onHide={() => setmandi2(false)} centered size='lg'>
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

            <Modal show={mandi3} onHide={() => setmandi3(false)} centered size='lg'>
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

            <Modal show={mandi4} onHide={() => setmandi4(false)} centered size='lg'>
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

            <Modal show={mandi5} onHide={() => setmandi5(false)} centered size='lg'>
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

            <Modal show={mandi6} onHide={() => setmandi6(false)} centered size='lg'>
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

            <Modal show={mandi7} onHide={() => setmandi7(false)} centered size='lg'>
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

            <Modal show={mandi8} onHide={() => setmandi8(false)} centered size='lg'>
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

            <Modal show={mandi9} onHide={() => setmandi9(false)} centered size='lg'>
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
        </Container>
    )
}

export default Mandi;