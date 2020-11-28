import React from 'react';
import {Container} from 'react-bootstrap';
import Mini from './Mini';
import Renang from './Renang';
import Taman from './Taman';
import Teras from './Teras';

function Exterior () {
    return (
        <Container id='exterior' style={{textAlign:'left'}} >
            <h2>Exterior</h2>
            <Renang/>
            <Mini/>
            <Taman/>
            <Teras/>
        </Container>
    )
}

export default Exterior;