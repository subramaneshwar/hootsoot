import React from 'react'
import { Container } from 'react-bootstrap'

function Containers() {
  return (
    <div className='py-5'
    style={{backgroundColor:"blue",height:"50%"}}
    >
        <Container className='container-fluid container-md'>
            <p className='display-5  fw-bold text-light pt-5'>See value from social sooner</p>
            <p className='text-light lh-lg'  >Our training and strategic services have helped<br/>
            thousand of organisation succeed on social.</p>
            <button type='button' className='btn btn-success btn-lg mt-3'>Request a Demo</button>
        </Container>
    </div>
  )
}

export default Containers