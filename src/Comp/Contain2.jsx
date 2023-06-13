import React from 'react'
import { Container } from 'react-bootstrap'

function Contain2() {
  return (
    <div>
        <Container >
            <div className='d-md-flex gap-5 mt-5 justify-content-around align-items-center m-2'>
            <div >
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZpoRuasxqCGhyOdnVVGc-1Avoyisz2ESRrEpiP2DVBRt0SBew" alt=""  style={{width:"200px"}}  />
            <p className='fw-bolder pt-2' >2500</p>
            <small>enterprise organization successfully launched</small>
            </div>
            <div>
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLIse3WHYU9-uublpIdDuf7-iumKOuuFfUfkWYSI70uku47UOM" alt="" style={{width:"200px"}}   />
            <p className='fw-bolder pt-2' >2500</p>
            <small style={{}}>enterprise organization successfully launched</small>
            </div>
            <div>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqmv5cDhiFL87rI6vYjGcnclvW67l1T5xWwPXd_ZuU7znfRgLp" alt=""  style={{width:"200px"}} />
            <p className='fw-bolder pt-2' >2500</p>
            <small>enterprise organization successfully launched</small>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Contain2