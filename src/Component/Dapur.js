import React, { useState } from 'react';
import {Col, Container, Row, Image, Modal, Button} from 'react-bootstrap';
import satu from '../Gambar/interior/dapur/IMG-20201128-WA0055.jpg';
import dua from '../Gambar/interior/dapur/IMG-20201128-WA0056.jpg';
import tiga from '../Gambar/interior/dapur/IMG-20201128-WA0057.jpg';
import empat from '../Gambar/interior/dapur/IMG-20201128-WA0058.jpg';
import lima from '../Gambar/interior/dapur/IMG-20201128-WA0059.jpg';
import enam from '../Gambar/interior/dapur/IMG-20201128-WA0060.jpg';
import tujuh from '../Gambar/interior/dapur/IMG-20201128-WA0020.jpg';
import delapan from '../Gambar/interior/dapur/IMG-20201128-WA0021.jpg';
import sembilan from '../Gambar/interior/dapur/IMG-20201128-WA0022.jpg';
import sepuluh from '../Gambar/interior/dapur/IMG-20201128-WA0023.jpg';
import sebelas from '../Gambar/interior/dapur/IMG-20201128-WA0024.jpg';
import duabelas from '../Gambar/interior/dapur/IMG-20201128-WA0025.jpg';
import satua from '../Gambar/interior/dapur/IMG-20201128-WA0026.jpg';
import duaa from '../Gambar/interior/dapur/IMG-20201128-WA0027.jpg';
import tigaa from '../Gambar/interior/dapur/IMG-20201128-WA0028.jpg';
import empata from '../Gambar/interior/dapur/IMG-20201128-WA0029.jpg';
import limaa from '../Gambar/interior/dapur/IMG-20201128-WA0030.jpg';
import enama from '../Gambar/interior/dapur/IMG-20201128-WA0031.jpg';
import tujuha from '../Gambar/interior/dapur/IMG-20201128-WA0032.jpg';
import delapana from '../Gambar/interior/dapur/IMG-20201128-WA0033.jpg';
import sembilana from '../Gambar/interior/dapur/IMG-20201128-WA0034.jpg';
import sepuluha from '../Gambar/interior/dapur/IMG-20201128-WA0035.jpg';
import sebelasa from '../Gambar/interior/dapur/IMG-20201128-WA0036.jpg';

function Dapur () {
    const [dapur1, setdapur1] = useState(false);
    const [dapur2, setdapur2] = useState(false);
    const [dapur3, setdapur3] = useState(false);
    const [dapur4, setdapur4] = useState(false);
    const [dapur5, setdapur5] = useState(false);
    const [dapur6, setdapur6] = useState(false);
    const [dapur7, setdapur7] = useState(false);
    const [dapur8, setdapur8] = useState(false);
    const [dapur9, setdapur9] = useState(false);
    const [dapur10, setdapur10] = useState(false);
    const [dapur11, setdapur11] = useState(false);
    const [dapur12, setdapur12] = useState(false);
    const [dapur1a, setdapur1a] = useState(false);
    const [dapur2a, setdapur2a] = useState(false);
    const [dapur3a, setdapur3a] = useState(false);
    const [dapur4a, setdapur4a] = useState(false);
    const [dapur5a, setdapur5a] = useState(false);
    const [dapur6a, setdapur6a] = useState(false);
    const [dapur7a, setdapur7a] = useState(false);
    const [dapur8a, setdapur8a] = useState(false);
    const [dapur9a, setdapur9a] = useState(false);
    const [dapur10a, setdapur10a] = useState(false);
    const [dapur11a, setdapur11a] = useState(false);
    return (
        <Container id='dapur' className='gamb' >
            <h4>Dapur</h4>
            <Row className='kotak'>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={satu} fluid onClick={() => setdapur1(true)} className='gb' />
                    <Image src={dua} fluid onClick={() => setdapur2(true)} className='gb' />
                    <Image src={tiga} fluid onClick={() => setdapur3(true)} className='gb' />
                    <Image src={empat} fluid onClick={() => setdapur4(true)} className='gb' />
                    <Image src={lima} fluid onClick={() => setdapur5(true)} className='gb' />
                    <Image src={enam} fluid onClick={() => setdapur6(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={tujuh} fluid onClick={() => setdapur7(true)} className='gb' />
                    <Image src={delapan} fluid onClick={() => setdapur8(true)} className='gb' />
                    <Image src={sembilan} fluid onClick={() => setdapur9(true)} className='gb' />
                    <Image src={sepuluh} fluid onClick={() => setdapur10(true)} className='gb' />
                    <Image src={sebelas} fluid onClick={() => setdapur11(true)} className='gb' />
                    <Image src={duabelas} fluid onClick={() => setdapur12(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={satua} fluid onClick={() => setdapur1a(true)} className='gb' />
                    <Image src={duaa} fluid onClick={() => setdapur2a(true)} className='gb' />
                    <Image src={tigaa} fluid onClick={() => setdapur3a(true)} className='gb' />
                    <Image src={empata} fluid onClick={() => setdapur4a(true)} className='gb' />
                    <Image src={limaa} fluid onClick={() => setdapur5a(true)} className='gb' />
                    <Image src={enama} fluid onClick={() => setdapur6a(true)} className='gb' />
                </Col>
                <Col xs={6} md={3} lg={3} className='colgb'>
                    <Image src={tujuha} fluid onClick={() => setdapur7a(true)} className='gb' />
                    <Image src={delapana} fluid onClick={() => setdapur8a(true)} className='gb' />
                    <Image src={sembilana} fluid onClick={() => setdapur9a(true)} className='gb' />
                    <Image src={sepuluha} fluid onClick={() => setdapur10a(true)} className='gb' />
                    <Image src={sebelasa} fluid onClick={() => setdapur11a(true)} className='gb' />
                </Col>
            </Row>
            
            <Modal show={dapur1} onHide={() => setdapur1(false)} centered size='lg'>
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

            <Modal show={dapur2} onHide={() => setdapur2(false)} centered size='lg'>
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

            <Modal show={dapur3} onHide={() => setdapur3(false)} centered size='lg'>
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

            <Modal show={dapur4} onHide={() => setdapur4(false)} centered size='lg'>
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

            <Modal show={dapur5} onHide={() => setdapur5(false)} centered size='lg'>
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

            <Modal show={dapur6} onHide={() => setdapur6(false)} centered size='lg'>
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

            <Modal show={dapur7} onHide={() => setdapur7(false)} centered size='lg'>
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

            <Modal show={dapur8} onHide={() => setdapur8(false)} centered size='lg'>
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

            <Modal show={dapur9} onHide={() => setdapur9(false)} centered size='lg'>
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

            <Modal show={dapur10} onHide={() => setdapur10(false)} centered size='lg'>
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

            <Modal show={dapur11} onHide={() => setdapur11(false)} centered size='lg'>
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

            <Modal show={dapur12} onHide={() => setdapur12(false)} centered size='lg'>
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
            
            <Modal show={dapur1a} onHide={() => setdapur1a(false)} centered size='lg'>
                <Modal.Body><Image src={satua} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur2a} onHide={() => setdapur2a(false)} centered size='lg'>
                <Modal.Body><Image src={duaa} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur3a} onHide={() => setdapur3a(false)} centered size='lg'>
                <Modal.Body><Image src={tigaa} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur4a} onHide={() => setdapur4a(false)} centered size='lg'>
                <Modal.Body><Image src={empata} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur5a} onHide={() => setdapur5a(false)} centered size='lg'>
                <Modal.Body><Image src={limaa} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur6a} onHide={() => setdapur6a(false)} centered size='lg'>
                <Modal.Body><Image src={enama} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur7a} onHide={() => setdapur7a(false)} centered size='lg'>
                <Modal.Body><Image src={tujuha} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur8a} onHide={() => setdapur8a(false)} centered size='lg'>
                <Modal.Body><Image src={delapana} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur9a} onHide={() => setdapur9a(false)} centered size='lg'>
                <Modal.Body><Image src={sembilana} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur10a} onHide={() => setdapur10a(false)} centered size='lg'>
                <Modal.Body><Image src={sepuluha} fluid/></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Pesan
                    </Button>
                    <Button variant="outline-primary" href='https://wa.me/6282336469743'>
                        Konsultasi
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={dapur11a} onHide={() => setdapur11a(false)} centered size='lg'>
                <Modal.Body><Image src={sebelasa} fluid/></Modal.Body>
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

export default Dapur;