import React from 'react';
import {Container} from 'react-bootstrap';
import Dapur from './Dapur';
import Keluarga from './Keluarga';
import Mandi from './Mandi';

function Interior () {
    return (
        <Container id='interior' style={{textAlign:'left'}} >
            <h2>Interior</h2>
            <Keluarga/>
            <Mandi/>
            <Dapur/>
        </Container>
    )
}

export default Interior;