import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

function Tentang () {
    return (
        <Container id='tentang' >
            <h2>Tentang Kami</h2>
            <Row>
                <Col xs={12} md={6}>
                    <h4>Siapakah JJ Enterprise</h4>
                    <p style={{textAlign:'left'}} >
                    JJ Enterprise berdiri sejak tahun 2011.<br/>
                    Kami bergerak di bidang jasa yang meliputi arsitektur, 
                    desain interior eksterior dan kontraktor (design & Build) untuk rumah, ruko, apartemen, 
                    cafe, restoran, kantor, villa dan lain-lain.<br/>
                    Produk yang kami tawarkan terbaik di kelasnya serta pekerja kami sudah sangat berpengalaman.<br/>
                    JJ Enterprise berdedikasi untuk memberikan layanan terbaik untuk Anda.
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <h4>Jam Kerja</h4>
                    <Row>
                        <Col>Senin</Col>
                        <Col>08:00 - 18:00</Col>
                    </Row>
                    <Row>
                        <Col>Selasa</Col>
                        <Col>08:00 - 18:00</Col>
                    </Row>
                    <Row>
                        <Col>Rabu</Col>
                        <Col>08:00 - 18:00</Col>
                    </Row>
                    <Row>
                        <Col>Kamis</Col>
                        <Col>08:00 - 18:00</Col>
                    </Row>
                    <Row>
                        <Col>Jum'at</Col>
                        <Col>08:00 - 18:00</Col>
                    </Row>
                    <Row>
                        <Col>Sabtu</Col>
                        <Col>08:00 - 18:00</Col>
                    </Row>
                    <Row>
                        <Col>Minggu</Col>
                        <Col>08:00 - 18:00</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Tentang;