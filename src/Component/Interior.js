import React from 'react';
import {Container} from 'react-bootstrap';
import Dapur from './Dapur';
import Keluarga from './Keluarga';
import Tamu from './Tamu';
import Tidur from './Tidur';
import Mandi from './Mandi';

function Interior () {
    return (
        <Container id='interior' style={{textAlign:'left'}} >
            <h2>Interior</h2>
            <Keluarga/>
            <Tamu/>
            <Tidur/>
            <Dapur/>
            <Mandi/>
        </Container>
    )
}

export default Interior;