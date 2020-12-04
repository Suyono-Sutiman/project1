import React from 'react';
import {Col, Container, Row, Button} from 'react-bootstrap';
import cp from '../Gambar/copyright.svg';

function Kontak () {
    return (
        <Container id='kontak' >
            <Row>
                <Col xs={12} md={6}>
                    <h4>Alamat Kantor</h4>
                    <p style={{textAlign:'left'}} >
                    Kampung Hantap Heulang RT.011 RW.05<br/>
                    Kelurahan Sukamulya<br/>
                    Kecamatan Cikupa<br/>
                    Kabupaten Tangerang, Banten
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <h4>Hubungi Kami</h4>
                    <Row>
                        <Col><Button
                        href='tel:082336469743'
                        variant="outline-dark">082336469743</Button></Col>
                        <Col><hr/></Col>
                    </Row>
                    <Row>
                        <Col><hr/></Col>
                        <Col><Button
                        href='mailto:jj.interprice@gmail.com'
                        variant="outline-primary">jj.interprice@gmail.com</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button
                        href='https://wa.me/6282336469743'
                        variant="outline-success">Whatsapp</Button></Col>
                        <Col><hr/></Col>
                    </Row>
                </Col>
            </Row>
            <hr/>
            <p>Copyright <img src={cp} alt='@' className='cp' />2020_<a 
            href='https://noone.my.id/'>No[o]ne</a>_All rights reserved</p>
        </Container>
    )
}

export default Kontak;